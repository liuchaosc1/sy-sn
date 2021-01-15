<template>

  <div class="bigbox">
    
    <div class="banner" v-if="productList.banner != undefined">
      <img :src="productList.banner" alt=""/>
    </div>

    <div class="pageCup" v-if="productList.banner == undefined" >
      <div class="movebox" ref="move2" >
        <div :style="{left:'-'+left+'%'}" ref="move3">
          <p v-for="(item,index) in productList.content"  >
          <span @click="cup(item.class,index)">
            {{item.class}}
            <div  v-if="index1 == index" class="sign"></div>
            </span>
          </p>
        </div>
      </div>
    </div>
    
    <div class="main"  ref="moves">
      <div class="movediv"   :style="{top:'-'+top}"  >
        <div v-for="(item,index) in productList.content" :key="index" ref="init">
        <div class="title">
          <span>{{ item.class }}</span>
        </div>
        <div class="content">
         

         <div v-for="(item1,index1) in productList.content[index].main" :key="index1">
            <div class="commodity" >
            <div class="photo"><img :src="item1.pic" alt=""></div>
            <div class="thisname"><span>{{item1.name}}</span></div>
            </div>
            
          
         </div>

      </div>
         
         <!-- 本行div用以占位 -->
         <div v-if="productList.content[index].main.length%3 == 2" class="commodity"></div>
         
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let url = "http://localhost:8080/json/rementuijian.json";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    let that = this;
    xhr.onload = function () {
      let list = JSON.parse(xhr.response);
      // console.log(list);
      for (let i = 0; i < list.length; i++) {
        // console.log(list[i].title)
        if (list[i].title == that.title) {
          that.productList = list[i];
        }
      }
      that.className =  that.productList.content[0].class
     
    };
    

  },
  computed:{
    
  },
  mounted(){
    let moves = this.$refs.moves
    let that = this
    // console.dir(moves)
    moves.onscroll = function(){
      that.scroll = moves.scrollTop
      // console.log(that.scroll)
    }
	


	},
  watch:{
    title(val,newval){
      let url = "http://localhost:8080/json/rementuijian.json";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    let that = this;
    xhr.onload = function () {
      let list = JSON.parse(xhr.response);
      // console.log(list);
      for (let i = 0; i < list.length; i++) {
        
        if (list[i].title == that.title) {
          that.productList = list[i];
        }
      }
      that.className =  that.productList.content[0].class
      
    };
    },
    scroll(newVal){
      
      let c = 0;
      let sum =0;
      for(let i = 1; i < this.$refs.moves.children[0].children.length;i++){
        
       
        sum = sum + this.$refs.moves.children[0].children[i].scrollHeight

        if (newVal >= sum) {
           c = i
         
        }
        
        
      }
      this.index1 = c;
      
      if (this.$refs.moves.children[0].children.length>5) {
        this.left = newVal/85
      // console.log(this.left);
      }
      // console.dir(this.$refs.move3.children)
    }


  },
  
  
  props:["title"],
  data() {
    return {
      productList: [],
      // thisTitle:"大家电",
      className:'',
       index1:0,
      top:0,
      scroll:'',
      arr:[],
      left:0,
    };
  },
  methods:{
    cup(className,index){
     this.index1 = index
     if(index>0){
      
        let height = 0;
        for (let i = 1;i <= index; i++) {
          height = height + this.$refs.init[i-1].scrollHeight
          
        }
       
        this.$refs.moves.scrollTop = Math.abs(height)

     }else{
     
       this.$refs.moves.scrollTop = 0
     }
    },
  

  }
};
</script>

<style  scoped>
.bigbox {
  height: 100%;
  width: 100%;
  
  position: relative;
  display: flex;
  flex-direction: column;
}
.movediv{
  position: relative;
  /* top: 0; */
}
.banner {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
}

.banner > img {
  width: 89%;
  border-radius: 12px;
}
.main {
  /* flex-grow: 1; */
  
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 0;
  width: 100%;
}
.main>div>div{
display: flex;
 width: 100%;
  flex-direction: column;
  align-items: center;
  
}

.title {
  width: 89%;
 
  padding-bottom: 15px;
  /* padding-top: 15px; */
  display: flex;
  align-items: center;
  font-size: 12px;
}
.content {
  width: 100%;
  /* background-color: darkslategrey; */
  /* height: 50px; */
  display: flex;
  justify-content: flex-start;
  
  flex-wrap: wrap;
}
.commodity {
  width: 63px;
  /* height: 81px; */
  /* background-color: green; */
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 18px;
}

.photo {
  width: 100%;
  height: 63px;
  /* background-color: red; */
}
.photo > img {
  width: 100%;
  height: 100%;
}
.thisname {
  width: 100%;
  /* height: 18px; */
  /* background-color: green; */
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
}
.pageCup{
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.movebox{
  overflow: auto;
  width: 89%;
}

.movebox>div{
  height: 100%;
  display: flex;
  justify-content: flex-start;
  
  /* margin-left: 14px;
   margin-right: 21px; */
   width: 89%;
   position: relative;
   left: 0%;
  /* background-color: red; */
}
.movebox>div>p{
  margin-right: 15px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.movebox>div>p>span{
  font-size: 6px;
  line-height: 20px;
  position: relative;
  
}
    .sign{
        position: absolute;
        width: 10px;
        height: 4px;
        background-color: orange;
        right: 50%;
        margin-right: -5px;
        top: 23px;
        border-radius: 2px;
    }
</style>