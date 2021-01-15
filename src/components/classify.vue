<template>
    <div class="classify">
        <div class="top">
            <div><span>商品分类</span></div>
            <div class="search">
                <span class="iconfont">&#58896;</span>
                <input type="text" placeholder="年货礼盒满229-210">
            </div>
        </div>
        <div class="other" >
      
            	<div class="list">
                   <div>
                        <div v-for="(item,index) in productList" :key="index" @click="cupPage(item.title)">
					<div v-if="item.title == theTitle" class="cup">
						<span>{{item.title}}</span>
						<div v-if="theTitle == item.title" class="sign"></div>
					</div>
                    <div v-else>
						<span>{{item.title}}</span>
						<div v-if="theTitle == item.title" class="sign"></div>
					</div>
				    </div>
                   </div>
                </div>
		
            <div class="main">
                <component :is="componentName" :title="theTitle" ref="child"></component>
            </div>
        </div>
        
    </div>
</template>

<script>
import hotTuijian from "./classify-components/hotTuijian"
export default {
    created(){
        let url = "http://localhost:8080/json/rementuijian.json";
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();
        let that = this;
        xhr.onload = function(){
            that.productList = JSON.parse(xhr.response);
            // console.log(that.productList)
            that.theTitle = that.productList[0].title;
            // console.log(that.theTitle)
        }
    },
     data(){
        return {
            productList:[],
            componentName:"hot-tuijian",
            theTitle:''
        }
    },
    components:{
        "hot-tuijian":hotTuijian
    },
    methods:{
        cupPage(title){
            this.theTitle = title
            // document.querySelector(".main").scrollTop = 0
            // this.$refs.moves.scrollTop = 0
            // console.log(this.theTitle)
            this.$refs.child.left = 0;
        }
    }
}
</script>

<style scoped>
    .classify{
        height: 100%;
        
        display: flex;
        flex-direction: column;
    }
    .top{
        height: 54px;
        display: flex;
        /* background-color: green; */
    }
    .top>div:first-child{
        height: 100%;
        /* background-color: grey; */
        width: 27%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top>div:first-child>span{
        font-size: 75%;
    }
    .search{
        /* background-color: indigo; */
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
       position: relative;
        padding: 1px;

    }
    .search>input{
        margin-left:  10px;
        margin-right:  10px;
        border-radius: 17px;
          width: 100%;
        height: 55%;
        outline: none;
        border: none;
        padding-left: 40px;
        padding-right: 20px;
        letter-spacing: 1px;
        background-color: #f7f7f7;
    }
    .search>span{
        position: absolute;
        left: 20px;
        color: #666;
    }
    .other{
       
        flex-grow: 1;
        display: flex;
    }
    
    .list{
         width: 27%;
         flex-shrink: 0;
         overflow: auto;
         /* flex-grow: 1; */
         display: flex;
         flex-direction: column;
         height: 100%;
         /* background-color: rosybrown; */
    }
    .list>div{
        height: 0;
    }
    .list>div>div{
        height: 50px;
        flex-shrink: 0;
        /* flex-grow: 1; */
        width: 100%;
        background-color: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666;
         position: relative;
        
    }

    .main{
        flex-grow: 1;
        /* background-color: skyblue; */
    }
    .sign{
        position: absolute;
        width: 4px;
        height: 10px;
        background-color: orange;
        top: 50%;
        margin-top: -4px;
        left: 10px;
        border-radius: 2px;
    }
    .cup{
        background-color: white;
        height: 100%;
        width: 100%;
        display: flex;
         display: flex;
        justify-content: center;
        align-items: center;
         position: relative;

    }
    

</style>