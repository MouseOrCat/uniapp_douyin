<template>
	<view class="videoRight">
		<view class="iconTop margin-bottom">
			<image src="../../static/7bcf5743faaad31c22c48f211356f87.jpg" class="videoRightIcon" mode="scaleToFill"></image>
			<uni-transition :mode-class="modeClass" :show="isSmallIconShow" >
				<view class="smallIcon font" @click="follow">&#xe607;</view>
			</uni-transition>
		</view>
		<view class="videoGive font margin-bottom">
			<view class="iconCommon" :class="{videoGiveActive:isGiveShow}" @click="isGiveShow=!isGiveShow">&#xe62f;</view>
			<view>90</view>
		</view>
		<view class="videoComment font margin-bottom">
			<view class="iconCommon">&#xe630;</view>
			<view>100</view>
		</view>
		<view class="videoForward font margin-bottom">
			<view class="iconCommon">&#xe682;</view>
			<text>分享</text>
		</view>
		<view class="videoCd font cdCommon">&#xe609;</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				isSmallIconShow:true,
				modeClass: ['fade'],
				isGiveShow:false
			}
		},
		methods:{
			follow(){
				this.isSmallIconShow = false
			},
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.videoRight{
		color:#fff;text-align:center;
		.iconCommon{font-size:rpx(40);}.cdCommon{font-size:rpx(50);}
		.margin-bottom{margin-bottom:rpx(60);}
		.videoRightIcon{
			width:rpx(80);height:rpx(80);@include border-radius(50%);}
		.videoCd{
			animation: rotate 1.5s linear 0.2s infinite;
		}
		.iconTop{
			.smallIcon{
				position:absolute;
				width:rpx(30);height:rpx(30);background-color:red;text-align:center;line-height:rpx(30);@include border-radius(50%);
				top:rpx(65);
				left:rpx(24);
				color:#fff;font-weight: bold;font-size:rpx(20);
			}
		}
	}
	@keyframes rotate{
		0%{transform: rotate(0deg);}
		100%{transform: rotate(360deg);}
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	.videoGiveActive{color:red;}
</style>
