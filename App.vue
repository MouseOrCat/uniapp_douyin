<script>
	import StorageUtil from "./common/storage/StorageUtil.js"
	export default {
		onLaunch(){
			uni.getSystemInfo({
				success: function (res) {
					// console.log(res)
					// console.log(res.screenHeight); //屏幕高度  注意这里获得的高度宽度都是px 需要转换rpx
					// console.log(res.windowWidth);  //可使用窗口宽度
					// console.log(res.windowHeight); //可使用窗口高度
					// console.log(res.screenWidth); //屏幕宽度
					const rpx=(res.screenHeight * (750 / res.windowWidth))  //将px 转换rpx
					// console.log(rpx)
				}
			})
			
			uni.getSystemInfo({
					success:(res)=>{
						if(res.windowHeight){
							// console.log(res.windowHeight+'aaa')
							StorageUtil.syncSaveStorage('rpx_height',res.windowHeight)
						}
						
						// this.$store.commit('set_window_height',res.windowHeight*2);
					}
				})
			
			if (process.env.NODE_ENV === 'development') {
					// baseUrl=""
					// console.log('开发环境')
				} else {
					// baseUrl=""
					console.log('生产环境')
				}
				
				
		},
		onShow: function() {
			
			},
		onHide: function() {
			console.log('App Hide');
		}
}
</script>

<style>
	
	ul,li{list-style-type: none;}
	.left{float:left;}
	.right{float:right;}
	@font-face {
	  font-family: 'iconfont';  /* Project id 2512393 */
	  src: url('//at.alicdn.com/t/font_2512393_veyqltnxg2.woff2?t=1620202760479') format('woff2'),
	       url('//at.alicdn.com/t/font_2512393_veyqltnxg2.woff?t=1620202760479') format('woff'),
	       url('//at.alicdn.com/t/font_2512393_veyqltnxg2.ttf?t=1620202760479') format('truetype');
	}
	.font{
		font-family: iconfont;
	}
	/*
		想要高度100%适应  必须设置如下样式才行   一个坑
	*/
	body{
		width:100%;height:100%;
	}
	
	/* #ifdef H5 || MP-WEIXIN */
	uni-page-body,page{
		height: 100%;
	}
	
	/* #endif */
	
</style>
