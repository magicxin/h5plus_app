<template>
  <div class="main">
		<component :is="page[active]"></component>
    <van-tabbar v-model="active">
		  <van-tabbar-item icon="shop">资讯</van-tabbar-item>
		  <van-tabbar-item icon="chat">物业</van-tabbar-item>
		  <van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
		</van-tabbar>
		
  </div>
</template>

<script>
import news from 'pages/news/news'
import propertyCenter from 'pages/propertyCenter/property-center'
import userCenter from 'pages/userCenter/user-center'
export default {
  name: 'hello',
  components: {news,propertyCenter,userCenter},
  data() {
  	return {
  	  active:0,
  		showPop: false,
  		showEditor:false,
		page: [news.name,propertyCenter.name,userCenter.name]
  	}
  },
  mounted() {
  	
  },
  methods: {
  	popup() {
  		this.showPop = true
  	},
  	close() {
  		this.showEditor = false
  	},
  	edit() {
  	  this.showEditor = true
  	  this.showPop = false
  	},
  }
}
</script>

<style lang="scss">
	.main {
	  height:calc(100vh - 50px);
	  @include bg_color($background-color-theme);
	  @include font_color($font-color-theme);
		.send-news {
			width:50px;
			height:50px;
			position:absolute;
			left:50%;
			bottom: 6px;
			transform: translate(-50%);
			color:#000;
			border: 1px solid #E4E4E4;
			z-index: 2;
			/*background:#fff;*/
			/*background-color: $background-color-theme1;*/
			@include bg_color($background-color-theme);
			border-radius: 50%;
			font-size:30px;
			line-height:50px;
			text-align: center;
		}
		.popup {
			padding:24px 24px 12px 24px;
		}
		
		.toolbars {
			padding: 24px 0;
		}
		.icon-container {
        font-size:20px;
        line-height:1em;
        padding:14px 14px 12px 14px;
        border: 1px solid #EBEBEB;
        border-radius: 18px;
        margin: 14px;
      }
      .icon-text {
        color: #578FEC;
      }
      .icon-image {
        color: #16DD9A;
      }
      .editor {
        width:100vw;
        height:100vh;
      }
	}
	
</style>
