<template>
  <div class="house-info">
    <van-nav-bar left-arrow  @click-left="onClickLeft" title="物业"/>
    <div class="content">
      <header class="header">
        <div class="border-line"></div>
        <span>房屋信息</span>
      </header>
      <!--<van-field v-model="house.community" left-icon="contact" label="房主" readonly/>-->
      <van-field v-model="house.community" left-icon="contact" label="小区" readonly/>
      <van-field v-model="house.building" left-icon="contact" label="栋" readonly/>
      <van-field v-model="house.unit" left-icon="contact" label="单元" readonly/>
      <van-field v-model="house.room" left-icon="contact" label="室" readonly/>
      <van-field v-model="house.numbered" left-icon="contact" label="加密编号" readonly/>
    </div>
  </div>
</template>

<script>
  import { searchHouse } from 'controller/propertyCenter/house'
  export default {
    name: 'house_info',
    data() {
      return {
        house:{}
      }
    },
    created() {
      searchHouse.bind(this)({userId:'5c733f36a39ff51b50deecdc'}).then(res=>{
        this.house = res.house
        console.log(res)
      })
    },
    activated() {
      console.log('activated')
    },
    methods: {
      onClickLeft() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss">
  .house-info {
    height:100%;
    background:#F2F2F2;
    .content {
      padding:1rem;
    }
    .header {
      display:flex;
      align-items: center;
      margin-bottom:1rem;
    }
    .border-line {
      border-left:4px solid #5889e6;
      height:1.1rem;
      margin-right:.4rem;
    }
  }
</style>