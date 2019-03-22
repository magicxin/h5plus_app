<template>
  <div class="my-fix">
    <van-nav-bar left-arrow  @click-left="$router.back()" title="我的报修"/>
    
  </div>
</template>

<script>
  import { save } from 'controller/propertyCenter/fix'
  export default {
    name: 'my_fix',
    data() {
      return {
        
      }
    },
    created() {
      console.log(this.house)
    },
    activated() {
      console.log('activated')
    },
    methods: {
      
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