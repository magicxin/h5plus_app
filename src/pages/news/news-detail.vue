<template>
	<div class="news-detail">
	  <van-nav-bar title="详情" left-arrow @click-left="routeTo" />
	  <div class="container">
	    <header class="title">{{ news.title }}</header>
      <div class="tool-item">
        <span class="author">{{ news.user&&news.user.nickname }}</span>
        <time class="date">{{ news.meta&&news.meta.createAt |timeFormat }}</time>
      </div>
      <div class="content" v-html="news.content"></div>
	  </div>
	</div>
</template>

<script>
  import { searchNewsById } from 'controller/news/newsDetail'
	export default {
		name: 'news_detail',
		data() {
			return {
				news:''
			}
		},
		created() {
			searchNewsById.bind(this)({_id:this.$route.params._id}).then(res=>{
			  this.news = res
			})
		},
		methods: {
			routeTo() {
			  this.$router.back()
			}
		}
	}
</script>

<style lang="scss">
	.news-detail {
	  .container {
	    padding:0 1rem;
	  }
	  .title {
	    font-size:1.1rem;
	    font-weight: bold;
	    padding:.4rem 0;
	  }
	  .tool-item {
      display:flex;
      justify-content: space-between;
      padding:.2rem 0;
      color:#999;
    }
    .content {
      padding:.6rem 0;
      img {
        width:100%;
      }
    }
	}
</style>