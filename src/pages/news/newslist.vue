<template>
	<div class="newslist">
	  <!--<van-pull-refresh class="list-container" v-model="isLoading" @refresh="getNewsList">-->
    <!-- content goes here -->
	  <jc-loadmore v-scroll ref="scroll" class="list-container" :onRefresh="refresh" :onInfinite="loadmore">
      <div class="card flex-column" v-for="(item,index) in newsList" :key="index" @click="routeTo(item._id)">
        <section class="flex-row">
          <div class="title-container">
            <header class="title">{{item.title}}</header>
            <div class="sub">{{ item.sub }}</div>
          </div>
          <div class="image-container">
            <img v-load :src="item.images[0]"/>
          </div>
        </section>
        <footer class="footer">
          <div>
            <van-icon name="contact" class="icon-author"/>
            <span>{{item.user.nickname}}</span>
          </div>
          <time>{{item.meta.createAt | timeFormat}}</time>
        </footer>
      </div>
      <div v-if="finished" slot="infinite" class="text-center">没有更多数据</div>
      </jc-loadmore>
    <jc-empty v-if="newsList.length === 0"></jc-empty> 
	</div>
</template>

<script>
  import uris from 'utils/uris'
  import jcLoadmore from 'components/jc-loadmore'
  import jcEmpty from 'components/jc-empty.vue'
  import { searchNews } from 'controller/news/newsList'
	export default {
		name: 'newslist',
		components: {jcLoadmore,jcEmpty},
		data() {
			return {
				newsList: [],
        index:0,
        count:5,
        finished:false,
			}
		},
		props: {
			type: {
				type: String,
				default: "all",
				validator: val => ["", "1", "2"].indexOf(val) > -1
			}
		},
		created() {
		  searchNews.bind(this)({type:this.type,count:this.count,index:this.index}).then(res=>{
		    console.log(res.news)
		    this.newsList = res.news
		    if(res.length === this.newsList.length) {
          this.finished = true
        }
		  })
		},
		mounted() {
		  
		},
		methods: {
			plusReady() {
//			  let video = new plus.video.VideoPlayer('video',{
//        src:'http://vjs.zencdn.net/v/oceans.mp4',
//        controls: false
//      });
			},
			loadmore(done) {
			  if(!this.finished) {
			    this.index++
          this.getNewsList({type:this.type,count:this.count,index:this.index})
          .then(res=>{
            this.newsList = this.newsList.concat(res.news)
            if(res.length === this.newsList.length) {
              this.finished = true
            }
            done()
          })
			  }
			},
			refresh(done) {
			  this.finished = false
			  this.getNewsList()
          .then(res=>{
            this.newsList = res.news
            done()
          })
			},
			getNewsList(params) {
			  this.isLoading = true
			  return new Promise((resolve,reject)=>{
			    searchNews.bind(this)(params).then(resolve)
			    .catch(reject)
			  })
			},
			routeTo(id) {
			  this.$router.push({
			    name:'news_detail',
			    params: {
			      _id: id
			    }
			  })
			}
		},
		activated() {
		  this.$refs['scroll'].$el.scrollTop = this.$refs['scroll'].$el.dataset.top
		}
	}
</script>

<style lang="scss" scoped>
	.newslist {
	  height:100%;
	  position:relative;
	  /*.list-container {
	    height:100%;
	    overflow: scroll;
      -webkit-overflow-scrolling : touch;
	  }*/
		.card {
			display:flex;
			padding:14px;
			border-bottom: 1px solid #EBEBEB;
			.title-container {
			  color:#333;
				padding-right:10px;
				flex: 5 1 0;
			}
			.title {
			  font-size:16px;
			  padding:.4rem 0;
			}
			.image-container {
				flex: 3 1 0;
				height:33vw;
				img {
					width:100%;
					height:100%;
					object-fit: cover;
				}
				video {
					width:100%;
					height:100px;
					object-fit: cover;
				}
			}
			.footer {
			  display: flex;
			  align-items: center;
			  justify-content: space-between;
				padding: 4px 0;
				font-size: 12px;
				color:#999;
				
			}
			.icon-author {
			  color: red;
        margin-right:4px;
			}
		}
	}
</style>