<template>
	<div class="user-info">
	  <van-nav-bar title="用户中心" left-arrow @click-left="$router.back()" />
	  <van-field class="field" v-model="user.username" type="text" label="用户名"/>
	  <van-field class="field" v-model="nickname" type="text" label="昵称" />
	  <van-field class="field" v-model="carNumber" type="text" label="车牌号"/>
    <van-field class="field" v-model="phoneNumber" type="text" label="电话" />
		<van-button class="btn" size="large" type="primary" @click="save">保存</van-button>
	</div>
</template>

<script>
  import uri from 'utils/uris'
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
        this.carNumber = user.carNumber
        this.nickname = user.nickname
        this.phoneNumber = user.phoneNumber
		  },
			save() {
			  this.$post(uri.updateUser,{username:this.user.username,nickname:this.nickname,phoneNumber:this.phoneNumber}).then(res=>{
			    this.$toast('修改成功！')
			  })
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