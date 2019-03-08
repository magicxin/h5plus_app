import uri from 'utils/uris'
/*
 @desc 查询资讯
 * */
function searchHouse(params) {
  return new Promise((resolve,reject)=>{
    this.$get(uri.searchHouse,{params:params}).then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}
export {
  searchHouse,  
}
