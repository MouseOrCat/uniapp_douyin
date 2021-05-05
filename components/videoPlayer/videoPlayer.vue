<template>
	<view class="video-content">
		<video 
		:loop="false"
		class="video-player" 
		:controls="true"
		:show-center-play-btn="true"
		:show-play-btn="false"
		:show-fullscreen-btn="false"
		:src="item.src"
		:index="index"
		:muted="true"
		:enable-progress-gesture="true"
		></video>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/common.scss";
	.video-content{
		width:100%;height:100%;
		.video-player{
			width:100%;height:100%;
		}
	}
	
</style>
