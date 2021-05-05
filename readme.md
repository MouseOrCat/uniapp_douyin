视频播放  发送弹幕
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo"
					src="https://v2.kwaicdn.com/upic/2021/04/05/15/BMjAyMTA0MDUxNTEzMjFfOTczMTY5ODIyXzQ3Mjg3OTQ4ODE0XzFfMw==_b_B6fcdc34743dd144e7cc2e42a958dfad9.mp4?pkey=AAUUfKSUx8WRrSXOWEkIt63FDhOi0oGN6sflKmFwk8gG9wlrjy4QE2h9ZvZF8Yt6Vxm6lysgzxVWUcQlekqpK4fFshWSDU-s3lalWeQgcpzwB88tsUY5IkjzdB8hA4nlnKg&tag=1-1619405406-xpcwebhome-0-l9jugijzup-02c03604e25250a2&clientCacheKey=3xxdztb569kq9yk_b.mp4&tt=b&di=777b4544&bp=14944"
					@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	 export default {
	     data() {
	         return {
	             src: '',
	             danmuList: [{
	                     text: '第 1s 出现的弹幕',
	                     color: '#ff0000',
	                     time: 1
	                 },
	                 {
	                     text: '第 3s 出现的弹幕',
	                     color: '#ff00ff',
	                     time: 3
	                 }
	             ],
	             danmuValue: ''
	         }
	     },
	     onReady: function(res) {
	         // #ifndef MP-ALIPAY
	         this.videoContext = uni.createVideoContext('myVideo')
	         // #endif
	     },
	     methods: {
	         sendDanmu: function() {
	             this.videoContext.sendDanmu({
	                 text: this.danmuValue,
	                 color: this.getRandomColor()
	             });
	             this.danmuValue = '';
	         },
	         videoErrorCallback: function(e) {
	             uni.showModal({
	                 content: e.target.errMsg,
	                 showCancel: false
	             })
	         },
	         getRandomColor: function() {
	             const rgb = []
	             for (let i = 0; i < 3; ++i) {
	                 let color = Math.floor(Math.random() * 256).toString(16)
	                 color = color.length == 1 ? '0' + color : color
	                 rgb.push(color)
	             }
	             return '#' + rgb.join('')
	         }
	     }
	 }
</script>