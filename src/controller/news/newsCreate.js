import uri from 'utils/uris'
/*
 @desc 创建资讯
 * */
function saveNews(params) {
  return new Promise((resolve,reject)=>{
    this.$post(uri.saveNews,params).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}

export {
  saveNews,
}