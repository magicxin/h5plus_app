import uri from 'utils/uris'
/*
 @desc 保存报修
 * */
function save(params) {
  return new Promise((resolve,reject)=>{
    this.$post(uri.saveFix,params).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
/*
 @desc 获取报修信息
 * */
function getFix(params) {
  return new Promise((resolve,reject)=>{
    this.$get(uri.getFix,{params:params}).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
/*
 @desc 查询报修列表
 * */
function getList(params) {
  return new Promise((resolve,reject)=>{
    this.$get(uri.saveFix,params).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
export {
  save, getList ,getFix
}
