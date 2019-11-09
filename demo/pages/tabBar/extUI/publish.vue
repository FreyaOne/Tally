<template>
	<view class="uni-common-mt">
		<form>
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<!-- <view class="uni-uploader-title">点击可预览选好的图片</view> -->
							<view class="uni-textarea" style="height: 300px; margin-top:30px;" auto-height>
								<textarea @blur="bindTextAreaBlur" auto-height placeholder="这一刻的想法..." />
								<button type="default" placeholder="发表"></button>
							</view>
							
						</view>
					</view>
				</view>
			</view>
			</form>
	</view>
</template>

<script>
	import permision from "@/common/permission.js"
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
</script>

<style>
	.image {
		width: 100%;
	}
	
	.demo {
		background: #ffffff;
		    padding: 27px;
		    width: 11px;
		    height: 11px;
	}
</style>
