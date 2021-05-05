<template>
   <view class="content-large">
	   <view class="content">
	   	<Top></Top>
	   	<video-list></video-list>
	    <Tab></Tab>
	   </view>
   </view>
</template>

<script>
	 import Tab from "../../components/tab/tab.vue"
	 import Top from "../../components/top/top.vue"
	 import VideoList from "../../components/videoList/videoList.vue"
	 export default {
	    components:{
			Tab,Top,VideoList
		},
		onShow(){
			
		},
		methods:{
			// subNvue(){
			// 	const videoLeft = uni.getSubNVueById("videoLeft")
			// 	videoLeft.hide();
			// }
		}
	 }
</script>

<style lang="scss">
	.content-large{width:100%;height:100%;}
	.content{
		width:100%;height:100%;
	}
</style>
