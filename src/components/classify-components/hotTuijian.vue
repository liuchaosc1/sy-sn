<template>
    <div class="bigbox">
        <div class="banner"><img src="http://image.suning.cn/uimg/asbs/ad/1610330139813_app_wap_list.jpg" alt=""></div>
        <!-- <div class="zhanwei"></div> -->
        <div class="main">
            <div class="title"><span>热门推荐</span></div>
            <div class="content">
                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"><span>手机</span></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>
            </div>

             <div class="title"><span>热门推荐</span></div>
            <div class="content">
                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"><span>手机</span></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>
            </div>

             <div class="title"><span>热门推荐</span></div>
            <div class="content">
                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"><span>手机</span></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>

                <div class="commodity">
                    <div class="photo"></div>
                    <div class="thisname"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style  scoped>
    .bigbox{
        height: 100%;
        width: 100%;
        /* background-color: orangered */
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .banner{
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
       
        display: flex;
        justify-content: center;
        align-items: center;
      
        top: 0;
    }
    
    .banner>img{
        width: 89%;
        border-radius: 12px;
    }
    .main{
        flex-grow: 1;
        /* background-color: cornflowerblue; */
        /* margin-top: 115px; */
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        height: 0;
    }
    .title{
        width: 89%;
        /* background-color: crimson; */
        height: 42px;
        padding-bottom: 15px;
        padding-top: 15px;
        display: flex;
        align-items: center;
        font-size: 12px;
    }
    .content{
        width: 89%;
        background-color: darkslategrey;
        /* height: 50px; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .commodity{
        width: 63px;
        height: 81px;
        /* background-color: green; */
        margin-bottom: 20px;
    }
    .photo{
        width: 100%;
        height: 63px;
        background-color: red;
    }
    .photo>img{
        width: 100%;
        height: 100%;
    }
    .thisname{
        width: 100%;
        height: 18px;
        /* background-color: green; */
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
    }
</style>