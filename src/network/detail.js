import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export class Goods{  //商品信息
  constructor(itemInfo,columns,services){ //constructor 构造器
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop{  //店铺参数
  constructor(shopInfo){
    this.fans = shopInfo.cFans;
    this.name = shopInfo.name;
    this.goods = shopInfo.cGoods;
    this.sell = shopInfo.cSells;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo
    this.isBetter =shopInfo.isBetter
  }
}
export class Parameter{  //商品参数
  constructor(itemParams){
    this.tables = itemParams.rule.tables[0]
    this.set = itemParams.info.set
  }
}
export function getRecommend(){
  return request({
    url:'/recommend',
  })
}
