<template>
	<div class="user-info">
	  <van-nav-bar title="用户中心" left-arrow @click-left="$router.back()" />
	  <van-field class="field" v-model="carNumber" type="text" label="车牌号" readonly/>
    <van-field class="field" v-model="address" type="text" label="住址" readonly/>
    <van-field class="field" v-model="nickname" type="text" label="昵称" readonly/>
    <van-field class="field" v-model="phoneNumber" type="text" label="电话" readonly/>
		<!--<van-button class="btn" size="large" type="primary" @click="save">保存</van-button>-->
	</div>
</template>

<script>
	export default {
		name: 'user-info',
		data() {
			return {
        user:this.$store.state.admin.user,
        old_pass:'',
        carNumber:'',
        address:'',
        nickname:'',
        phoneNumber:'',
        
			}
		},
		created() {
		  console.log(this.user)
			this.init(this.user)
		},
		methods: {
		  init(user) {
        this.carNumber = user.car.carNumber
        this.address = user.house.address
        this.nickname = user.nickname
        this.phoneNumber = user.phoneNumber
		  },
			save() {
			  
			}
		}
	}
</script>

<style lang="scss">
	.user-info {
	  .btn {
	    margin-top:2rem;
	  }
	  .field {
	    margin-top:1rem;
	  }
	}
</style>