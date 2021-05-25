import {request} from "@/network/request";

export function getHomeMultidata(){       //滚动横幅和推荐的网络请求
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){        //获取商品数据的网络请求
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
