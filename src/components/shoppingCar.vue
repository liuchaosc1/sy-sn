<template>
    <div class="shoppingCar">
        <div class="main">
            <div class="topAndAdress">
                    <p>
                        <span>购物车</span>
                        <span class="iconfont">&#58927;</span>
                        <span>吴中区</span>
                    </p>
            </div>
            <div class="content">
<!-- --------------------------------------------------------------------------------- -->
                <div class="not-log-in">
                    <div class="logBox">
                        <span>登录后同步电脑与手机购物车的商品</span>
                        <div><span>去登录</span></div>
                    </div>
                    <div>
                        <div class="log-photo">
                            <img src="../../public/shoppingCar/sn-cart-empty.png" />
                        </div>
                        <p>购物车还是空的，快来挑选好货吧</p>
                        <button>去逛逛</button>
                    </div>

                </div>

<!-- ----------------------------------------------------------------------------------------- -->
                <div class="special-offer" v-if="1 == 2">
                    <div class="thisTop">
                        <img src="../../public/shoppingCar/empty-coupon-title.png" alt="">
                    </div>
                    <div class="theMain">
                        <div>
							<img src="../../public/shoppingCar/coupon-bg.png" />
                             <div class="bottomBox">
                                <div>
                                    <div><img src="../../public/shoppingCar/2lHYg2DX39Ff7S68ctEkJA.jpg" alt=""></div>
                                    <div><img src="../../public/shoppingCar/8AXbWZDmqJrU8hnwD0yUMg.jpg" alt=""></div>
                                    <div><img src="../../public/shoppingCar/N1EHIE1tkpYJRyNH7mDxaw.jpg" alt=""></div>

                                </div>
                            </div>
                            <div class="quan">
                                <div class="content-left">
                                    <p><span>￥</span><span>10.00</span></p>
                                    <p><span>满10用10</span></p>
                                </div>
                                <div class="content-right">
                                    <div class="content-right-main">
                                        <p><span>【易券】</span><span>限平台粮油干调</span></p>
                                        <p>品类部分商品使用</p>
                                        <p><span>2020.12.28</span><span>~</span><span>2021.01.31</span></p>
                                    </div>
                                    <div class="content-right-main-button">
                                        <span>立即领取</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                    <div class="other">
                        <p>购物车还是空的，快来挑选好货吧</p>
                        <button>去逛逛</button>
                    </div>
                    
                </div>

                <div class="product-list">
                    <div class="thisTop">
                        <img src="../../public/shoppingCar/cnxh-title.png" alt="">
                    </div>
                    <div class="product-list-main">
                        <div class="product">
                            <div class="pic"><img src="../../public/shoppingCar/Mqg_Jk43Hj5KoMNEkXq5Fg.jpg" alt=""></div>
                            <div class="text"><p>界面一次性医用口罩三层含医用熔喷布防飞沫防护口罩50只/袋</p></div>
                            <div class="state">
                                <div><img src="../../public/shoppingCar/sn-ziying.png" alt=""></div>
                                <div><img src="../../public/shoppingCar/miaosha.png" alt=""></div>

                            </div>
                            <div class="price">
                                <p><span>￥</span><span>9</span><span>.09</span></p>
								<div><img src="../../public/shoppingCar/cart.png" alt=""></div>
                            </div>
                        </div>
                        <div class="product"></div>
                        <div class="product"></div>
                        <div class="product"></div>
                        <div class="product"></div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .shoppingCar{
        height: 100%;
    }
    .main{
        display: flex;
        flex-direction: column;
    }
    .topAndAdress{
        height: 42px;
        /* background-color: goldenrod; */
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: #e7e4e4 1px solid;
        background-color: white;
    }
    .topAndAdress>p{
        font-size: 0.67rem;
        line-height: 42px;
    }
    .topAndAdress>p>span:first-child{
        margin-right: 5px;
    }
    .topAndAdress>p>span:nth-child(2){
        font-size: 0.5rem;
        color: #fc0;
    }
    .topAndAdress>p>span:last-child{
        font-size: 0.58rem;
    }
    .content{
        background-color: #f5f5f9;
        flex-grow: 1;
		/* height: 50%; */
    }
    .special-offer{
       display: flex; 
       flex-direction: column;
       /* justify-content: flex-end; */
       align-items: center;
       padding: 10px;
    }
    .thisTop{
        width: 100%;
        /* height: 22px; */
        /* background-color: #fc0; */
        display: flex; 
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    .thisTop>img{
        /* margin: 0 auto; */
        width: 50%;
        /* height: 80%; */
    }
    .theMain{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
		/* background-color: #0077AA; */
    }
    .theMain>div{
        width: 100%;
        
        /* height: 97px; */
        /* background-color: green; */
        /* background-size: contain;
        background-repeat: no-repeat; */
        /* background-image: url(../../public/shoppingCar/coupon-bg.png); */
        /* background-position-x: center; */
        position: relative;
        display: flex;
        justify-content: center;
        
    }
    .theMain>div>img{
        width: 100%;
         z-index: 2;
    }
    .content-left{
        width: 29%;
        /* background-color: #fc0; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f42;
        font-size: 100%;
        
    }
    .content-left>p:first-child{
        margin-bottom: 3px;
    }
     .content-left>p:first-child>span:nth-child(1){
        font-size: 0.7rem;
        /* margin-bottom: 10px; */
    }
    .content-left>p:first-child>span:nth-child(2){
        font-size: 0.86rem;
    }
    .content-left>p:nth-child(2){
        font-size: 0.52rem;
        margin-bottom: 3px
    }
    .content-right{
        width: 71%;
        /* background-color: blue; */
        /* height: 50px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .theMain>div>div{
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        /* z-index: 2; */
        
        /* background-color: brown; */
    }
    
    .content-right-main{
        width: 72%;
        height: 100%;
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content-right-main-button{
        width: 26%;
        height: 35%;
        background-color: #fc0;
        border-radius: 4px;
        font-size: .43rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-left: ; */
    }
    .content-right-main>p{
        font-size: 0.4rem;
    }
    .content-right-main>p:first-child>span:first-child{
        color: red;
    }
    .content-right-main>p:nth-child(2){
        margin-left: 5px;
         margin-bottom: 8px;
    }
     .content-right-main>p:nth-child(3){
        margin-left: 3px;
       color: #999;
    }
    .bottomBox{
        /* width: 100%;
        height: 100%;
        position: absolute; */
        top: 85%;
        background-color: #f9ece7;
        z-index: 1;
       
    }
    .quan{
        z-index: 3;
    }
    .bottomBox>div{
        padding-left: 15px;
        padding-right: 15px;
        width: 100%;
        display: flex;
        justify-content: flex-start
    }
    .bottomBox>div>div{
        width: 17%;
        height: 57%;
        /* background-color: purple; */
        margin-top: 9%;
        margin-right: 3%;
    }
	.bottomBox>div>div>img{
		width: 100%;
		height: 100%;
	}
    .other{
        margin-top: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 150%;
    }
    .other>p{
        font-size: 0.56rem;
        margin-bottom: 8%;
        color: #666;
    }
    .other>button{
        color: #666;
        outline: none;
        font-size: 0.4rem;
        border: 1px solid rgb(227, 219, 219);
        width: 15%;
        /* height: 200%; */
		line-height: 200%;
		border-radius: 5px;
        /* height: 5%; */
    }
    .product-list{
         display: flex; 
       flex-direction: column;
       /* justify-content: flex-end; */
       align-items: center;
       padding: 10px;
       margin-top: 28px;
    }
    .product-list-main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
    }
    .product{
        width: 49%;
        /* height: 270px; */
        background-color: white;
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .pic{
        width: 80%;
        margin-top: 15px;
        /* height: 100px; */
        /* background-color: green; */
    }
    .pic>img{
        width: 100%;
    }
    .text{
        width: 82%;
        font: 0.4em sans-serif;
        /* display: flex; */
        justify-content: center;
        margin-top: 10px;
        /* background-color: orangered; */
        height: 34px;
        word-break: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical
    }
    .state{
        width: 82%;
        display: flex;
        /* margin-top: 5px; */
        align-items: flex-start;
    }
    .state>div{
        margin-right: 5px;
        width: 16%;
    }
    .state>div>img{
        width: 100%;
    }
    .price{
        width: 82%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .price>div>img{
        width: 100%;
    }
    .price>div{
        width: 12%;
    }
    .price>p{
        color: red;
    }
    .price>p>span:nth-child(1){
        font-size: .48rem;
    }
    .price>p>span:nth-child(2){
        font-size: .65rem;
    }
    .price>p>span:nth-child(3){
        font-size: .48rem;
    }
    .not-log-in{
         display: flex; 
       flex-direction: column;
       /* justify-content: flex-end; */
       align-items: center;
       padding: 10px;
    }
    .logBox{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #ffe37e;
        align-items: center;
         /* padding-left: 10px;
        padding-right: 10px; */
     }
    .logBox>span{
        font-size: .48rem;
        margin-left: 10px;
        line-height: 300%;
    }
    .logBox>div{
        width: 12%;
        height: 24px;
        background-color: black;
        margin-right: 10px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logBox>div>span{
        font-size: .12rem;
        color: #ffe37e;
    }
    .log-photo{
        display: flex;
        justify-content: center;
        width: 25%;
        margin-top: 75px;
    }
    .log-photo>img{
        width: 100%;
    }
    .not-log-in>div:nth-child(2){
        width: 100%;
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        align-items: center;
    }
    .not-log-in>div:nth-child(2)>p{
        font-size: .56rem;
        margin-bottom: 20px;
        margin-top: 20px;
        color: #666;
    }
    .not-log-in>div:nth-child(2)>button{
         color: #666;
        outline: none;
        font-size: 0.4rem;
        border: 1px solid rgb(227, 219, 219);
        width: 15%;
        /* height: 200%; */
		line-height: 200%;
		border-radius: 5px;
    }
</style>
