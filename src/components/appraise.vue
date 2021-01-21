<template>
    <div class="appraise-container">
        <div class="sn-nav">
            <div class="sn-nav-toback" @click="toback"></div>
            <div class="sn-nav-title">商品评价</div>
            <div class="sn-nav-right">
                <div class="img"></div>
            </div>
        </div>
        <div class="review-header">
            <header class="header-nav">
                <div class="head-line">好评率99%</div>
                <ul class="remark">
                    <li style="background-color: #F50;color:#fff">全部(343846)</li>
                    <li>最新</li>
                    <li>有图（44245）</li>
                    <li>好评（342650）</li>
                    <li>中评</li>
                    <li>差评（564）</li>
                    <li>追评（1825）</li>
                    <li>视频（1095）</li>
                </ul>
            </header>
        </div>
        <!-- 评价详情 -->
        <div class="rec-panel">
            <div class="sn-comment-box">
                <div class="comment-li">
                    <div class="fix">
                        <div class="personal">
                            <img src="https://image.suning.cn/uimg/cmf/cust_headpic/0000000000_33_60x60.jpg" alt="">
                            <div class="personalText">
                                <div>
                                    <span>用户名</span>
                                </div>
                                <div>2020-11-13</div>
                            </div>
                        </div>

                        <div class="pr">
                            <div class="starbar">
                                <div class="starbarmask"></div>
                            </div>
                            <div class="starbarText">推荐级别</div>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="spec">
                        <span>商品名称</span>
                    </div>
                    
                    <div class="evalCon">
                        <div>这里面放的评论</div>
                    </div>
                    <!-- 图片 -->
                    <div class="show">
                        <div class="show-item">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.show-item>img{
    width: 4.4rem;
    height: 4.4rem;
}
.show-item{
    float: left;
    margin: 0 .3rem .32rem 0;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5px;
    overflow: hidden;
}
.show{
    max-height: 9.2rem;
    margin: .5rem -.3rem .3rem 0;
    overflow: hidden;
}
.evalCon{
    color: #222;
    line-height: .92rem;
    margin: .3rem 0 .2rem;
    font-size: .56rem;
    text-align: justify;
    overflow: hidden;
    box-sizing: border-box;
}

.spec{
    color: #909090;
    margin-top: .3rem;
    font-size: .48rem;
}
.clear{
    clear:both
}
.starbarText{
    position: absolute;
    left: 0;
    top: .8rem;
    text-align: right;
    color: #999;
    font-size: .36rem;
}
.pr{
    position: relative;
    float:right;
}
.starbarmask{
    background-image: url("https://res.suning.cn/public/v5/common/2.0.0/images/star.png");
    background-size: 3.2rem .48rem;
    height: .48rem;
    width: 3.2rem;
}
.personal>img{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    margin-right: .4rem;
}
.personal{
    font-size: .52rem;
    color: #909090;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
}
/* 评价详情 */
.comment-li{
    background: #fff;
    padding: .5rem;
    margin-bottom: .36rem;
}
.sn-comment-box{
    width: 100%;
    padding-top: .5rem;
}
/* 评价标签 */
.remark{
    height: 111.529px;
}
.remark>li{
    display: inline-block;
    font-size: .48rem;
    color: #666;
    letter-spacing: 0;
    background-color: #FFF5EF;
    border-radius: .61rem;
    padding: .16rem .64rem;
    margin: .24rem .25rem;
    box-sizing: border-box;
}
/* 好评率 */
.head-line{
    height: 1.3rem;
    line-height: .8rem;
    padding: 0 0 .4rem .2rem;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: .2rem;
    color: #222;
    font-size: .48rem;
}

.header-nav{
    background-color:#fff;
    padding: .68rem .48rem .58rem;
}
/* 商品评价 */
.sn-nav-right>.img{
    position: absolute;
    top: 0;
    right: 0;
    width: 1.76rem;
    height: 1.76rem;
    background: url("https://res.suning.cn/project/reviewnode/review/dist/m/index/img/more.png");
    background-size: contain;
}
.sn-nav-right{
    position: absolute;
    top: 0;
    right: 0;
    height: 1.8rem;
    width: 19%;
    margin: 0 .56rem;
}
.sn-nav-title{
    width: 60%;
    margin: 0 auto;
    color: #fff;
    text-align: center;
}
*{
    margin: 0;
    padding: 0;
}
/* 顶部标签 */
.sn-nav{
    position: relative;
    height: 1.76rem;
    line-height: 1.76rem;
    background:linear-gradient(to right,#FFB300,#FF8000);
    width: 100%;
    font-size: 0.6rem;
}
.sn-nav-toback{
    position: absolute;
    top: .18rem;
    left: .5rem;
    width: 1.4rem;
    background: url("https://res.suning.cn/project/reviewnode/review/dist/m/index/img/back.png");
    background-size: contain;
    height: 1.4rem;
}
</style>