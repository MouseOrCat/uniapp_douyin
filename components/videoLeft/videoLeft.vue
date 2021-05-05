<template>
	<view class="videoLeft">
		<view class="author margin-bottom">
			@青丝剪辑
		</view>
		<view class="title margin-bottom">
			第34集|驰名中外一歌手，音韵婉转会多变，能学多重鸟儿叫，北疆内蒙是家园
		</view>
		<view class="music margin-bottom">
			<view class="music-iconfont font left">&#xe8db;</view>
			<view class="music-title left">
				<view class="music-view">情思剪辑创作的原声-情思剪辑创作的原声</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.videoLeft{
		color:#fff;
		font-size:rpx(32);
		padding-left:rpx(20);
		.music{
			width:rpx(450);overflow: hidden;
			&::after{@include clear-both;}
			.music-iconfont{
				margin-right:rpx(10);
			}
			.music-title{
				width:rpx(350);overflow: hidden;height:rpx(50);
				.music-view{
					width:rpx(400);
					animation: music 4s linear 0.2s infinite;
				}
			}
		}
		.margin-bottom{margin-bottom:rpx(20);}
	}
	@keyframes music{
		0%{
			transform: translate3d(100%,0,0);
		}
		100%{
			transform: translate3d(-100%,0,0);
		}
	}
</style>
