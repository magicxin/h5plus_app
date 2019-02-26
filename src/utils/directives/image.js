import Vue from 'vue'
import loading from 'assets/loading.png'
function load(el) {
  el.src = el.dataset.url
}
Vue.directive('load', {
  bind: function (el) {
    let image = new Image()
    image.src = el.src
  
    image.onload = function () {
      el.style.display="block"
      el.src = el.dataset.url
    }
    el.dataset.url = el.src
    el.removeAttribute('src')
    el.style.display="none"
//  el.addEventListener('load',load(el))
  },
  componentUpdated: function (el) {
//  el.removeEventListener('load',load(el))
  }
})