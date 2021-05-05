<template>
	<view class="tab-bottom">
		<view class="tab-box">
			首页
		</view>
		<view class="tab-box">
			朋友
		</view>
		<view class="tab-box">
			<view class="font tab-font">&#xe607;</view>
		</view>
		<view class="tab-box">
			消息
		</view>
		<view class="tab-box">
			我
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.tab-bottom{
		position:fixed;left:0;bottom:0;background-color:#000;width:100%;
		&::after{
			@include clear-both;
		}
		.tab-box{
			width:20%;height:rpx(80);float:left;color:#fff;text-align:center;line-height: rpx(80);font-size:rpx(25);
			.tab-font{
				height:rpx(60);line-height:rpx(60);text-align:center;width:70%;margin:rpx(10) auto rpx(10) auto;border:1px solid #fff;border-radius:5px;box-shadow: 0px 0px 10px red;
			}
		}
	}
</style>
