import Vue from 'vue'

Vue.filter('timeFormat', function (value) {
  let date = new Date(value)
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
})