import uri from 'utils/uris'
/*
 @desc 查询资讯
 * */
function searchNews(params) {
  return new Promise((resolve,reject)=>{
    this.$get(uri.searchNews,{params:params}).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
export {
  searchNews,  
}
