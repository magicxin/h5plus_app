<template>
	<div class="reset-password">
	  <van-nav-bar title="修改密码" left-arrow @click-left="routeTo" />
	  <van-field class="field" v-model="old_pass" type="password" label="密码" placeholder="请输入密码" required/>
	  <van-field class="field" v-model="new_pass" type="password" label="新密码" placeholder="请输入新密码" required/>
	  <van-field class="field" v-model="new_repass" type="password" label="重复" placeholder="请输入新密码" required/>
		<van-button class="btn" size="large" type="primary" @click="save">保存</van-button>
	</div>
</template>

<script>
  import { resetPassword } from 'controller/user/resetPassword'
	export default {
		name: 'reset-password',
		data() {
			return {
        user:this.$store.state.admin.user,
        old_pass:'',
        new_pass:'',
        new_repass:''
			}
		},
		created() {
			
		},
		methods: {
			save() {
			  resetPassword.bind(this)({
			    old_pass:this.old_pass,
			    new_pass:this.new_pass,
			    new_repass:this.new_repass,
			    username:this.user.username
			  }).then(res=>{
			    this.$toast('修改成功！')
			    this.$store.commit('admin/updateUser',null)
			    this.$router.replace('login')
			  })
			  .catch(err=>{
			    
			  })
			},
			routeTo() {
			  this.$router.back()
			}
		}
	}
</script>

<style lang="scss">
	.reset-password {
	  .field {
	    margin-top:.8rem;
	  }
	  .btn {
	    margin-top:2rem;
	  }
	}
</style>