<template>
    <div class="classify">
        <div class="top">
            <div><span>商品分类</span></div>
            <div class="search">
                <input type="text" placeholder="年货礼盒满229-210">
            </div>
        </div>
        <div class="other">
            <div class="list">
                <div>
                    <span>热门推荐</span>
                    <div class="sign"></div>
                    </div>
            </div>
            <div class="main">
                <component :is="componentName"></component>
            </div>
        </div>
    </div>
</template>

<script>
import hotTuijian from "./classify-components/hotTuijian"
export default {
     data(){
        return {
            componentName:"hot-tuijian"
        }
    },
    components:{
        "hot-tuijian":hotTuijian
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top>div:first-child>span{
        font-size: 115%;
    }
    .search{
        /* background-color: indigo; */
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      
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
    .other{
        
        flex-grow: 1;
        display: flex;
    }
    .list{
         width: 27%;
         flex-shrink: 0;
         /* background-color: rosybrown; */
    }
    .list>div:nth-child(1){
        height: 50px;
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

</style>