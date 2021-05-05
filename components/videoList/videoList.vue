<template>
		<view class="large-view" :style="{height:large_height}">
			<view class="video-large">
				<swiper class="video-swiper" :indicator-dots="false" :vertical="true" :autoplay="false" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) of list" :key="index">
						<view class="swiper-item">
							<video-player :item="item" :index="index"></video-player>
						</view>
						<view class="videoLeftBottom">
							<videoLeft></videoLeft>
						</view>
						<view class="videoRightTop">
							<videoRight></videoRight>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
</template>

<script>
	import videoPlayer from "../videoPlayer/videoPlayer.vue"
	import StorageUtil from "../../common/storage/StorageUtil.js"
	import videoLeft from "../videoLeft/videoLeft.vue"
	import videoRight from "../videoRight/videoRight.vue"
	export default{
		data(){
			return {
				list:[
					{
						id:1,
						src:'https://v1.kwaicdn.com/upic/2021/04/20/10/BMjAyMTA0MjAxMDAyMjRfMjMyNTkyNjQ2OF80ODE0MDA3NDg0NF8xXzM=_b_Bb32596bb7d2af516e7ac2a7b3ee3eee3.mp4?pkey=AAWgX7UArcUNbVROa9opAHXIBjPhIDvHETkXJajUBKIJgQyVUq_i060OxofkM20I-ZCVKilCyabvbG9cvemMEFIC_Sg-apjKPKM-cnQp860dMKVXXId8XygVHJS4N7qqO6g&tag=1-1620179180-xpcwebhome-0-kzzbng7n4g-934b6d0b7a52bd60&clientCacheKey=3xe2a4mbdjbp356_b.mp4&tt=b&di=777b43c6&bp=14944',
					},
					{
						id:2,
						src:'https://v2.kwaicdn.com/upic/2021/04/11/13/BMjAyMTA0MTExMzI2NTJfMjM4MjQwMjU3XzQ3NjI5MjIyOTc1XzFfMw==_b_Bedee03a7b00c23beef26e187b63d3b8d.mp4?pkey=AAXlgLaCH9lf8-AuGz2TJMnbY33TllICPlM3ZxNNWD9Nqf-Y9qYeP57AnFKwv-iOoBjj37PRTh3CYzFQYJ_eYqhCFTQ-HXQ0Gdhf65ExCpz8xaibrVS_oOftFbwpnGXKCac&tag=1-1620179180-xpcwebhome-0-db4lhojkx1-1f2f9dfdaae7e933&clientCacheKey=3xkgcep3qnepibc_b.mp4&tt=b&di=777b43c6&bp=14944',
					},
					{
						id:3,
						src:'https://v1.kwaicdn.com/upic/2021/03/28/15/BMjAyMTAzMjgxNTEwNDNfMjc4OTg2NV80Njc5MTAyMzQ3Ml8xXzM=_b_B34ff2b93f94b52bb73bfbff23309e714.mp4?pkey=AAVS7TkGMgSWuT1Dc-7Tb7G9K2jjiNOl3rbyMoS03lixR06g0qcAbE4FCKlRnyb8u6FO8qJAp2enQt5bh12Jlnd5_R5Bz9GpaYL8ziGYY63BGrk1OhlJfW7NDudNJ-pEUXE&tag=1-1620179236-xpcwebbrilliant-0-8wf9rvldw8-2f669aa24a86d9a9&clientCacheKey=3xf76tiigwm3saw_b.mp4&tt=b&di=777b43c6&bp=14944',
					},
					{
						id:4,
						src:'https://v2.kwaicdn.com/upic/2021/02/04/20/BMjAyMTAyMDQyMDQ2MzNfNjc0OTk1Nl80MzU4NTI2NDk3MV8xXzM=_b_B6c0fb1959e92e0cbfd2fe5dc26586d62.mp4?pkey=AAVHcsTH8VRgWHciZcjGSIBhxmFismpO0EX8VJ-98HWFe0FVgykRr6DV6eJ9iAi_pj75KkhCMKGaaOowkoGgw8WyKSEScgi6B_Nniu7psmodQNKivpREpk7_9rontAuJAwM&tag=1-1620179255-xpcwebbrilliant-0-sircx8fkxc-69685785e55a005d&clientCacheKey=3xaypuarfhrn4n6_b.mp4&tt=b&di=777b43c6&bp=14944',
					}
				]
			}
		},
		
		components:{
			videoPlayer,videoLeft,videoRight
		},
		computed:{
			large_height(){
				const view_height = StorageUtil.syncGetStorage('rpx_height')
				console.log(view_height)
				if(view_height){
					return view_height*0.88+'px'
				}else{
					return '87%'
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.large-view{
		width:100%;height:100%;
		.video-large{
			height:100%;
			.video-swiper{
				width:100%;height:100%;position:relative;z-index:9;
				.swiper-item{color:#fff;background-color:#000;height:100%;}
				.videoLeftBottom{width:rpx(562);position: absolute;left:0;bottom:0;z-index:999;}
				.videoRightTop{position:absolute;right:rpx(20);bottom:rpx(20);z-index:999;}
			}
		}
	}

</style>
