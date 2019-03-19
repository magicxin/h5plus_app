<template>
	<div class="user-center">
	  <div class="user-background">
	    <div class="user-cell" @click="$router.push('user-info')">
	      <div class="avatar"><img :src="addPath(user.avatar)"/></div>
	      <div class="nickname">{{user.nickname}}</div>
	      <div class="icon flex-row flex-center">
	        <van-icon name="arrow" />
	      </div>
	    </div>
	  </div>
	  <!--<div v-else class="user-background">
      <div class="user-cell" @click="routeLogin">
        <div class="avatar"><img src="../../../static/img/avatar.png"/></div>
        <div class="nickname">请登录</div>
        <div class="icon flex-row flex-center">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="user-tools">
      </div>
    </div>-->
		<div class="bold-line"></div>
		<van-cell title="我的动态" is-link to="dynamic"/>
		<div class="bold-line"></div>
		<van-cell title="我的房屋" is-link to="house_info"/>
		<div class="bold-line"></div>
		<van-cell title="我的报修" is-link />
		<div class="bold-line"></div>
		<van-cell title="修改密码" is-link to="reset-password"/>
    <div class="bold-line"></div>
		
		<van-button class="btn" size="large" type="primary" @click="signout">退出登录</van-button>
	</div>
</template>

<script>
	export default {
		name: 'user-center',
		data() {
			return {
        user:this.$store.state.admin.user
			}
		},
		created() {
			
		},
		methods: {
			toggleTheme() {
			  this.$root.theme = this.$root.theme === 'theme1' ? 'theme' : 'theme1'
			},
			signout() {
			  this.$store.commit('admin/updateUser',null)
			  this.$toast('请重新登录！')
			  this.$router.push('signin')
			}
		}
	}
</script>

<style lang="scss">
	.user-center {
	  height:calc(100vh - 50px);
	  overflow:scroll;
	  .user-background {
	    color:#fff;
	    background: #3b3b3b;
	    .user-cell {
	      display:flex;
	      align-items: center;
	      padding:20px;
	      .avatar {
          width:60px;
          height:60px;
          margin-right:20px;
          border-radius:50%;
          overflow:hidden;
          img {
            width:100%;
            height:100%;
            object-fit: cover;
          }
        }
        .nickname {
          flex: 4 1 0;
        }
        .icon {
          flex:1 1 0;
        }
	    }
	  }
	  .tools-container,.user-tools {
	    display:flex;
	  }
	  .tool-item {
	    font-size:12px;
	    display:flex;
	    flex-flow: column;
	    justify-content: center;
	    align-items: center;
	    flex: 1 1 0;
	    padding:14px 0;
	    .icon {
	      font-size:20px;
	      margin-bottom:4px;
	    }
	    .icon-collection {
	      color:#DFA35B;
	    }
	    .icon-history {
        color:#D5869C;
      }
      .icon-theme {
        color:#87A2E5;
      }
      .dark-grey {
          color:#9D9D9D;
        }
	  }
	  .bold-line {
	    width:100vw;
	    height:10px;
	    background-color:#F4F5F7;
	  }
	  .btn {
	    margin-top:2rem;
	  }
	}
</style>