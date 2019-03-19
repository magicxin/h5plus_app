import uri from 'utils/uris'
/*
 @desc 创建资讯
 * */
function resetPassword(params) {
  return new Promise((resolve,reject)=>{
    this.$post(uri.resetPassword,params).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}

export {
  resetPassword,
}