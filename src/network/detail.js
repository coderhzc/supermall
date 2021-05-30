import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export class Goods{
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
export class Shop{
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
