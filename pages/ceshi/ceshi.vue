<template>
		<view class="large-view" :style="{height:large_height}">
			<view class="video-large">
				<swiper class="video-swiper" :indicator-dots="false" :vertical="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in list" :key="index">
						<view class="swiper-item">
							<video-player :item="item" :index="index"></video-player>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
</template>

<script>
	import videoPlayer from "../../components/videoPlayer/videoPlayer.vue"
	import StorageUtil from "../../common/storage/StorageUtil.js"
	export default{
		data(){
			return {
				list:[
					{
						id:1,
						src:'https://v1.kwaicdn.com/upic/2021/02/19/15/BMjAyMTAyMTkxNTUxNDRfMTU4NTgyNDI1M180NDYzNDgwNzQ4N18xXzM=_b_B3a10d5509e44c9888e2f42a5f57cf9f6.mp4?pkey=AAVfmRJW9Qlf6Yfy7Ej4KRwTI8N_HSbxhrTOrmzlpDvwqg9GwKZS5q4O4B7NJhPzLGuOMCGdVwfEqgt-960546JoSa_BdJCvCHiTOUNdjoygdCvwN7962L95D7ujI8fP_QA&tag=1-1619769477-xpcwebhome-0-advwe3ve58-9d47af9f9d63d705&clientCacheKey=3xtpk4en349jchw_b.mp4&tt=b&di=777b408d&bp=14944',
					},
					{
						id:2,
						src:'https://v2.kwaicdn.com/upic/2021/04/17/20/BMjAyMTA0MTcyMDIyMjlfMTkxODE3NjgwNF80Nzk5NzE5NDE5MV8wXzM=_b_B40bffd8711ec3cb73331a5a744d99ca3.mp4?pkey=AAX1YV5uQfp84JeyDibijJnke8iRHVQygDpXC6MCzocJRSkJIbXCdlVoXpyTKRArBStUB1G9QALDPAY7P-zdGvM3uLBk90d43muHnqAXuMwbGqzcc4DZGgHk0CnaldvUjHU&tag=1-1619769477-xpcwebhome-0-z6oav1ncad-8efb08a0c21d4a64&clientCacheKey=3xrcrimcith36mq_b.mp4&tt=b&di=777b408d&bp=14944',
					},
					{
						id:3,
						src:'https://v1.kwaicdn.com/upic/2021/04/22/21/BMjAyMTA0MjIyMTQ0MjlfMTE2ODM0MDYzM180ODI3ODIxNTQ3MV8xXzM=_b_B5d38835a2b60bbb53021e5f1a99e77d1.mp4?pkey=AAVOWmelF6utT9bKkVKw_D7DDL4TVO6pfsMYsUP7eag9FmO8AFRhskjKkPbsB6ghu8YN9-ruvhMKfNHxCH1kax-EbNv-90W7lsUxU9WvU9cvGbP1tBalwo5FlD0XsQCQbj0&tag=1-1619769477-xpcwebhome-0-cxrxxdsxrw-9095b61d48ec0ff9&clientCacheKey=3x9qwjf99czxguy_b.mp4&tt=b&di=777b408d&bp=14944',
					},
					{
						id:4,
						src:'https://v2.kwaicdn.com/upic/2021/03/24/16/BMjAyMTAzMjQxNjAwNDNfNjU3NzI1OTVfNDY1NDczNjAyOTdfMV8z_b_Bed76c1e7e8752420ed4d8514bdf66d0c.mp4?pkey=AAUG_YV965FkzU0WZ4iVtVmEDt6vhy26snjbrM_yixU5MRAPakgtMO2elj6VTZBbgVyoYfOwLH2lsuXSG7RO-lDNezd72VDZOlHeGbirYEP60eLvTpnl1A55b_j_ZthN2M4&tag=1-1619769477-xpcwebhome-0-xol3qn1n5z-714aae9901f0351e&clientCacheKey=3xz5vew646pkaig_b.mp4&tt=b&di=777b408d&bp=14944',
					}
				],
			}
		},
		components:{
			videoPlayer
		},
		computed:{
			large_height(){
				const view_height = StorageUtil.asyncGetStorage('rpx_height')
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
				width:100%;height:100%;
				.swiper-item{color:#fff;background-color:#000;height:100%;}
			}
		}
	}

</style>
