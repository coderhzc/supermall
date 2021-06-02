import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    AddShopCar:[],
  },
  mutations:{
    ShopCart(state,payload){
      let oldProduct = state.AddShopCar.find(item => item.iid === payload.iid)
      if(oldProduct){
        oldProduct.count += 1
      }else{
        payload.count =1
        state.AddShopCar.push(payload)
      }
    }
  }
})
