import uri from 'utils/uris'
/*
 @desc 查询资讯
 * */
function searchNewsById(params) {
  return new Promise((resolve,reject)=>{
    this.$get(uri.searchNewsById,{params:params}).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
export {
  searchNewsById,  
}
