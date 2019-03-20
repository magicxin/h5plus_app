<template>
  <div class="fix-post">
    <van-nav-bar left-arrow  @click-left="$router.back()" title="保修"/>
    <div class="content">
      <header class="header">
        <div class="border-line"></div>
        <span>报修信息</span>
      </header>
      <!--<van-field v-model="house.community" left-icon="contact" label="房主" readonly/>-->
      <van-field v-model="house.community" left-icon="contact" label="住址" readonly/>
      <van-field v-model="house.community" left-icon="contact" label="联系电话" readonly/>
      <van-field v-model="house.community" left-icon="contact" label="问题描述" readonly/>
      
      <van-button class="mt-20" size="large" type="primary" @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
  import { searchHouse } from 'controller/propertyCenter/house'
  export default {
    name: 'fix_post',
    data() {
      return {
        house: {
        	community:'111'
        }
      }
    },
    created() {
      
    },
    activated() {
      console.log('activated')
    },
    methods: {
      submit() {
      	
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