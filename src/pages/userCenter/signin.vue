<template>
  <div class="signin">
    <van-nav-bar title="登录"/>
      <div class="login-box" ref="loginbox">
        <van-cell-group class="form-box">
          <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
          <van-field class="mb-14" v-model="password" type="password" label="密码" placeholder="请输入密码" required />
          <div @click="signup">用户注册</div>
          <van-button class="mb-14" size="large" type="danger" @click="login">登录</van-button>
          <!--<van-button class="mb-14" size="large" @click="cancel">取消</van-button>-->
        </van-cell-group>
      </div>
  </div>
</template>

<script>
  import uri from 'utils/uris'
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
        username: '',
        password: ''
      }
    },
    created() {
      //  console.log(this.$route.exit)
    },
    methods: {
      afterEnter(){
        this.$refs.loginbox.style.width='100%'

      },
      plusReady() {
        let that = this
        plus.key.addEventListener("backbutton", function() {
          var ws = plus.webview.currentWebview()
          if(that.$route.meta.exit) {
            that.count++
              if(that.count === 1) {
                that.$toast('再按一次退出')
                setTimeout(function() {
                  that.count = 0
                }, 1500)
              }
          }
          if(that.count >= 2) {
            plus.webview.close(ws, 'auto')
          }
        }, false);
        //    plus.webview.create('./launch.html', 'launch')
        //      plus.webview.show('launch');
        //      setTimeout(function() {
        //        plus.webview.close('launch')
        //      },1000)
      },
      cancel() {
        this.$root.showLoginBox = false
      },
      login() {
        this.$post(uri.login, {
            password: this.password,
            username: this.username
          })
          .then(res => {
            this.$store.commit('admin/updateUser',res)
            this.$router.push('main')
          })
          .catch(err=>{
            this.$toast(err.message)
          })
      },
      signup() {
        this.$router.push('signup')
      }
    }
  }
</script>

<style lang="scss">
  .signin {
    height:100%;
    /*height:100vh;
  @include bg_color($background-color-theme);*/
    .login-box {
      /*position: absolute;
      top: 0;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 2000;
      background: #fff;*/
    }
    .form-box {
      padding: 20px;
    }
    .mb-14 {
      margin-bottom: 14px;
    }
  }
</style>