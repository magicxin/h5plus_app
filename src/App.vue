<template>
  <div id="app" :data-theme="$root.theme">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="scss">
  #app {
    height:100%;
  }
</style>