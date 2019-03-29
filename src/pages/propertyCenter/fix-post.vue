<template>
  <div class="fix-post">
    <van-nav-bar left-arrow  @click-left="$router.back()" title="报修"/>
    <div class="content">
      <header class="header">
        <div class="border-line"></div>
        <span>报修信息</span>
      </header>
      <!--<van-field v-model="house.community" left-icon="contact" label="房主" readonly/>-->
      <van-field v-model="house.address" left-icon="contact" placeholder="请输入" label="住址"/>
      <van-field v-model="house.phoneNumber" left-icon="contact" placeholder="请输入" label="联系电话"/>
      <van-field v-model="house.truble" left-icon="contact" placeholder="请输入" label="问题描述" type="textarea" autosize/>
      
      <van-button v-if="house&&house.statu === '0'" class="mt-20" size="large" type="primary" @click="submit" disabled>审核中</van-button>
      <van-button v-else-if="house&&house.statu === '1'" class="mt-20" size="large" type="primary" @click="complete">完成</van-button>
      <van-button v-else-if="house&&house.statu === '2'" class="mt-20" size="large" type="primary" @click="submit">提交</van-button>
      <van-button v-else class="mt-20" size="large" type="primary" @click="submit">提交</van-button>
      <!--<van-button v-if="house&&!house.statu" class="mt-20" size="large" type="primary">提交</van-button>-->
    </div>
  </div>
</template>

<script>
  import { save,getFix } from 'controller/propertyCenter/fix'
  export default {
    name: 'fix_post',
    data() {
      return {
        user:this.$store.state.admin.user,
        house: {
          address:'',
        	phoneNumber:'',
        	truble:'',
        	userId:this.$store.state.admin.user._id,
        },
      }
    },
    created() {
      this.init()
      console.log(this.user)
    },
    activated() {
      console.log('activated')
    },
    methods: {
      init(params) {
        getFix.bind(this)(Object.assign({},params,{userId:this.user._id})).then(res=>{
          console.log(res)
          if(res.fix.length>0) {
            this.house = res.fix[0]
          }
        })
      },
      submit() {
      	save.bind(this)(this.house).then(res=>{
      	  this.$toast('提交成功！')
      	})
      	.catch(err=>{
      	  this.$toast(err.message)
      	})
      },
      complete() {
        save.bind(this)({
          fixId:this.house._id,
          statu:'2'
        }).then(res=>{
          this.$toast('完成维修！')
          this.$router.back()
        })
      }
    }
  }
</script>

<style lang="scss">
  .fix-post {
  	.content {
      padding:1rem 0;
    }
    .header {
      display:flex;
      align-items: center;
      padding:0 1rem;
      margin-bottom:1rem;
    }
    .border-line {
      border-left:4px solid #5889e6;
      height:1.1rem;
      margin-right:.4rem;
    }
    .mt-20 {
    	margin-top:2rem;
    }
  }
</style>