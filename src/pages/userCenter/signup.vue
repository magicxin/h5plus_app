<template>
  <div class="signup">
    <van-nav-bar title="注册"/>
      <div class="login-box" ref="loginbox">
        <van-cell-group class="form-box">
          <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
          <van-field class="mb-14" v-model="repass" type="repass" label="确认密码" placeholder="请输入密码" required />
          <van-button class="mb-14" size="large" type="danger" @click="submit">注册</van-button>
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
        password: '',
        repass:''
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
      submit() {
        this.$post(this.addHost(uri.createUser), {
          username: this.username,
          password: this.password,
          pass:this.repass
        })
          .then(res => {
            this.$toast('注册成功！')
            this.$router.push('login')
          })
          .catch(err=>{
             this.$toast(err.message)
          })
      }
    }
  }
</script>

<style lang="scss">
  .signup {
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