<template>
  <div class="homePage">
    
      <div class="comp-content" ref="scrollDiv">
        <keep-alive>
            <div class="main">
                <component :is="componentName" v-on:my-del="del" ref = "child"></component>
            </div>
        </keep-alive>
      </div>
      <div class="bottom-bar" v-show="showOrnot()">
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
           
            <!-- <img src="../images/panghangbang-b.png" alt="" v-if="componentName=='paihangbang'" class="bottom-img"> -->
            <img src="../images/paihangbang.png" alt=""  class="bottom-img">
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
   
   <div class="delete " v-show="flag">
      <div class="delbox">
        <div class="dle">
          <h5>提示</h5>
          <p>是否确认删除</p>
          <div>
            <div @click="quxiao"><span>取 消</span></div>
            <div @click="quedin"><span>删 除</span></div>
          </div>
        </div>
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
   mounted(){
     this.$refs.scrollDiv.addEventListener("scroll",this.scrollEvent,true)
   },
    computed:{
      login(){
        return this.$store.state.login
      },
      loginIn(){
        return this.$store.state.loginIn
      },
      componentName(){
     return this.$store.state.componentName
   },
    num1(){
      return this.$store.state.num1;
    }
    },
    components:{
        "my-like":like,
        "my-class":classify,
        "paihangbang":paihangbang,
        "shopping-car":shppingCar,
        "my-mine":myAccount
  },
  data(){
    return {
      flag:0
    }
  },
    
  
  methods:{
    btn(componentName){
      this.$store.state.componentName=componentName;
    //   console.log(this.componentName)
      
    },
    showOrnot(){
      if(this.componentName!='my-mine'){
        return true
      }else if(this.componentName=="my-mine"&&this.$store.state.login){
        return false
      }else if(this.$store.state.loginIn){
        return true
      }
    },
    del(){
      this.flag = 1;
    },
    quedin(){
      // console.log(this.$refs.child);
      this.$refs.child.del();
      this.quxiao();
    },
    quxiao(){
      this.flag = 0;

    },
    scrollEvent(){
      if(this.$refs.scrollDiv.scrollTop>450){
        this.$store.state.num1=1
      }else if(this.$refs.scrollDiv.scrollTop<450){
        this.$store.state.num1=0
      }
    }
  }
}
</script>
<style >

*{
  margin: 0;
  padding: 0;
}
.homePage{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow: hidden; */
    
}
.main{
    height: 100%;
}
.comp-content{
    /* background-color: yellow; */
    flex-grow: 1;
    overflow: auto;
}
.bottom-bar{
  width: 100%;
    flex-shrink: 0;
    background: #fff;
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
.delete{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color:rgba(0, 0, 0, 0.4);
		z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
	}
  .delbox{
    width: 80%;
    height: 0;
    padding-bottom: 42%;
    background-color: white;
    position: relative;
    border-radius: 8px;

  }
  .dle{
    width: 100%;
    height: 100%;
    position: absolute;
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

  }
  .dle>div{
    height: 23%;
    width: 83%;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
  }
  .dle>p{
    font-size: .58rem;
    color: #666;
  }
  .dle>div>div{
    width: 46%;
    height: 92%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .62rem;
     border-radius: 4px;
  }
  .dle>div>div:nth-child(1){
    border: #c1c1c1 1px solid;
  }
  .dle>div>div:nth-child(2){
    background-color: #fc0;
  }
  /* .dele{
    display: none;
  } */
</style>

