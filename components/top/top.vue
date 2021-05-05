<template>
	<view>
		<view class="top">
			<view class="top-left left">
				<view class="font">&#xe60a;</view>
			</view>
			<view class="top-center left">
				<view>
					<view class="top-item top-active">宝安</view>
					<view class="top-item">关注</view>
					<view class="top-item">推荐</view>
				</view>
			</view>
			<view class="top-right right">
				<view class="font">&#xe604;</view>
			</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.top{
		/* #ifdef MP-WEIXIN || H5  */
		padding:rpx(20) rpx(30) 0 rpx(30);
		/* #endif */
		/* #ifdef APP-PLUS*/
		padding:rpx(25) rpx(30) 0 rpx(30);
		/* #endif */
		
		
		background-color:#000;color:#fff;&::after{clear:both;height:0;content: '';visibility: hidden;display: block;}
		.top-left{
			width:rpx(30);margin-right:rpx(100);font-size:rpx(40);
		}
		.top-center{
			width:rpx(400);
			.top-item{
				float:left;width:caleWidth(3);text-align:center;padding-bottom:rpx(10);
			}
			.top-active{
				border-bottom:rpx(1) solid #fff;
			}
			&::after{@include clear-both;}
		}
		.top-right{
			>.font{
				font-size:rpx(45);
			}
		}
	}
</style>
