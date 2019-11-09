<template>
	<view>
		<view class="example-body">
			<view v-for="item in list" :key="item.id" class="example-box">
				<uni-card :title="item.title" :is-shadow="item.shadow" :note="item.note" :extra="item.extra" :thumbnail="item.thumbnail" @click="clickCard"> {{ item.content }}</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {
			uniCard
		},
		data() {
			return {
				list: [{
					id: 1,
					title: '张三',
					content: '这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。',
					shadow: true,
					note: 'Tips',
					extra: '',
					thumbnail: '',
				},{
					id: 2,
					title: '李四',
					content: '这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。',
					shadow: true,
					note: 'Tips',
					extra: '',
					thumbnail: '',
				},{
					id: 3,
					title: '王五',
					content: '这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。',
					shadow: true,
					note: 'Tips',
					extra: '',
					thumbnail: '',
				},
				],
				Tips: ['喜欢', '评论', '分享']
			}
		},
		methods: {
			onNavigationBarButtonTap(e) {
			uni.navigateTo({
			url: '/pages/tabBar/extUI/publish'
			});
			},
			topage(page) {
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				})
			},	
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},
			footerClick(types) {
				uni.showToast({
					title: types,
					icon: 'none'
				})
			},
			
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.example-body {
		padding: 30upx 0;
	}

	.example-box {
		margin-bottom: 30upx;
	}

	.example-box:last-child {
		margin-bottom: 0;
	}

	.image-box {
		width: 100%;
		height: 350upx;
		overflow: hidden;
	}

	.image-box .image {
		width: 100%;
		height: 100%;
	}

	.content-box {
		padding-top: 20upx;
	}

	.footer-box {
		display: flex;
		justify-content: space-between;
		width: 100%;

	}

	.footer-box__item {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.footer-box__item:nth-child(2) {
		justify-content: center;
	}

	.footer-box__item:last-child {
		justify-content: flex-end;
	}
</style>