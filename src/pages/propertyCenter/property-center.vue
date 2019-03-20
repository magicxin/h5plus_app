<template>
  <div class="property-center">
    <van-nav-bar title="物业"/>
    <div class="container">
      <div class="property-item red" @click="routeTo('house_info')">
        <van-icon name="info" size="2rem"/>
        <span>信息查询</span>
      </div>
      <div class="property-item blue" @click="routeTo('news_create')">
        <van-icon name="add-square" size="2rem"/>
        <span>创建资讯</span>
      </div>
      <div class="property-item grey">
        <van-icon name="bell" size="2rem" @click="routeTo('fix_post')"/>
        <span>报修</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'property-center',
    data() {
      return {
        
      }
    },
    created() {

    },
    mounted() {
      
    },
    activated() {
      console.log('activated')
    },
    methods: {
      routeTo(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style lang="scss">
  .property-center {
    height: calc(100vh - 50px);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .container {
      display:flex;
      padding:1rem;
      justify-content: space-around;
    }
    .property-item {
      width:26vw;
      height:26vw;
      display:flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border:1px solid #ccc;
      border-radius:5px;
    }
    .red {
      color:#f85959;
    }
    .blue {
      color:#409eff;
    }
    .grey {
      color:#aaa;
    }
  }
</style>