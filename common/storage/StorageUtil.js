/*
* 使用localStorage存储数据的模块
* 向外暴露两种 一种是函数 一种是对象，如果向外暴露多个 就对象   如果向外暴露一个 就函数
* */

export default{
	/**
	 * 异步存储接口
	 */
	asyncSaveStorage(STORAGE_KEY,data){
		uni.setStorage({
		    key: STORAGE_KEY,
		    data: data,
		    success: function () {
		        console.log('存储成功');
		    }
		});
	},
	/**
	 * 异步获取存储接口
	 */
	asyncGetStorage(STORAGE_KEY){
		let data;
		uni.getStorage({
		    key: STORAGE_KEY,
		    success: function (res) {
		        data = res.data
		    }
		});
		return data;
	},
	
	/**
	 * 同步存储接口
	 */
	syncSaveStorage(STORAGE_KEY,data){
		try {
		    uni.setStorageSync(STORAGE_KEY, data)
			console.log('存储成功')
		} catch (e) {
		    return '存储失败'
		}
	},
	/**
	 * 同步获取接口
	 */
	syncGetStorage(STORAGE_KEY){
		try {
		    const value = uni.getStorageSync(STORAGE_KEY);
		    if (value) {
		        return value
		    }
		} catch (e) {
		    return '获取失败'
		}
	}
}