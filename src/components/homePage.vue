<template>
  <div class="homePage">
    
      <div class="comp-content">
        <keep-alive>
            <div class="main">
                <component :is="componentName"></component>
            </div>
        </keep-alive>
      </div>
      <div class="bottom-bar">
        <div class="bottom-btn" @click="btn('my-like')" >
            <img src="../images/guess-you-like.png" alt="" v-if="componentName=='my-like'" class="bottom-img">
            <img src="../images/youlike.png" alt="" v-else class="bottom-img">
            <span v-if="componentName=='my-like'" class="bottom-title">猜你喜欢</span>
            <span v-else class="bottom-title2">首页</span>
        </div>
         <div class="bottom-btn" @click="btn('my-class')" >
            <img src="../images/class-b.png" alt="" v-if="componentName=='my-class'" class="bottom-img">
            <img src="../images/class.png" alt="" v-else class="bottom-img">
            <span class="bottom-title">分类</span>
        </div>
         <div class="bottom-btn" @click="btn('paihangbang')" >
            <img src="../images/panghangbang-b.png" alt="" v-if="componentName=='paihangbang'" class="bottom-img">
            <img src="../images/paihangbang.png" alt="" v-else class="bottom-img">
            <span class="bottom-title">必抢清单</span>
        </div>
         <div class="bottom-btn" @click="btn('shopping-car')" >
            <img src="../images/shopping-car-b.png" alt="" v-if="componentName=='shopping-car'" class="bottom-img">
            <img src="../images/shopping-car.png" alt="" v-else class="bottom-img">
            <span class="bottom-title">购物车</span>
        </div>
         <div class="bottom-btn" @click="btn('my-mine')" >
           
             <img src="../images/mine-b.png" alt="" v-if="componentName=='my-mine'" class="bottom-img">
            <img src="../images/mine.png" alt="" v-else class="bottom-img">
            <span class="bottom-title">我的易购</span>
            
        </div>
      </div>
   
   
  </div>
</template>

<script>
import classify from "./classify"
import like from "./likeSing"
import paihangbang from "./paihangbang"
import shppingCar from "./shoppingCar"
import myAccount from "./myAccount"
export default {
   data(){
        return {
            componentName:"my-like"
        }
    },
    components:{
        "my-like":like,
        "my-class":classify,
        "paihangbang":paihangbang,
        "shopping-car":shppingCar,
        "my-mine":myAccount
	},
  methods:{
    btn(componentName){
      this.componentName=componentName;
    //   console.log(this.componentName)
      
    }
    
  }
}
</script>
<style scoped>

*{
  margin: 0;
  padding: 0;
}
.homePage{
    height: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    
}
.main{
    height: 100%;
   
}
.comp-content{
    /* background-color: yellow; */
    flex-grow: 1;
}
.bottom-bar{
  width: 100%;
    flex-shrink: 0;
    background: rgb(247, 247, 247);
    display: flex;
    flex-direction: row;
    
   
    justify-content: space-between;
    height: 50px;
   
}

.bottom-btn{
    width: 20%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.bottom-img{
    width: 25px;
    margin-top: 5px;
}

.bottom-title{
    font-size: 0.4rem;
    color: #666666;
    
    

}
.bottom-title2{
    font-size: 0.4rem;
    color: #333;
    font-weight: bold
    

}
</style>

