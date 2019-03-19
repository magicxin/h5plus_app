<template>
	<div class="news-create">
		<van-nav-bar left-arrow  @click-left="onClickLeft" title="创建资讯"/>
		<van-cell-group>
      <van-field label="标题" v-model="form.title" placeholder="请输入标题" />
      <van-field label="副标题" v-model="form.sub" placeholder="请输入副标题" />
      <van-field label="内容" v-model="form.content" placeholder="请输入内容" />
      <van-field label="类型" v-model="form.type" placeholder="请选择类型" readonly @click="showPicker"/>
    </van-cell-group>
    <van-popup v-model="isShowPicker" class="pop-container" position="bottom">
      <van-picker :columns="types" @change="onChange" show-toolbar @cancel="cancel" @confirm="confirm"/>
    </van-popup>
    <van-button class="submit" size="large" type="danger" @click="submit">提交</van-button>
	</div>
</template>

<script>
  import { saveNews } from 'controller/news/newsCreate'
	export default {
		name: 'news_create',
		data() {
			return {
			  user:this.$store.state.admin.user,
			  form: '',
			  isShowPicker:false,
			  types:[{text:'租赁',value:'1'},{text:'新鲜事',value:'2'}]
			}
		},
		created() {
		  console.log(this.user)
			this.initForm()
		},
		mounted() {
		  
		},
		methods: {
		  initForm(form) {
		    this.form = {
          title:form&&form.title||'',
          sub:form&&form.sub||'',
          content:form&&form.content||'',
          type:form&&form.type||'',
          userId:this.user._id
        }
		  },
			onClickLeft() {
			  this.$router.back()
			},
			submit() {
			  console.log(this.form)
			  saveNews.bind(this)(this.form).then(res=>{
			    console.log(res)
			    this.$toast('创建成功！')
			    this.$router.back()
        })
			},
			// 显示 picker
			showPicker() {
			  this.isShowPicker = true
			},
			// picker 选择事件
			onChange(o) {
			  console.log(o)
			},
			// picker 取消事件
			cancel() {
			  this.isShowPicker = false
			},
			// picker 确认事件
			confirm(v) {
			  console.log(v)
			  this.form.type = v.value
			  this.isShowPicker = false
			  
			}
		},
    activated() {
      this.$refs.$scrolltop.forEach((item,index)=>{
        item.$el.scrollTop = item.$el.dataset.top
      })
    }
	}
</script>

<style lang="scss">
	.news-create {
	  .submit {
	    margin-top:2rem;
	  }
	}
</style>