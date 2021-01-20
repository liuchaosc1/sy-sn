<template>

    <div class="prodetail iconfont" ref="scrollDiv">
        <div class="top-menu" v-show="topshow">
            <div @click="goBack">&#xe6ec;</div>
            <div @click="clickScroll('proScroll')" :class="{activeTop:topMenuName=='product'}">商品</div>
            <div @click="clickScroll('evaScroll')" :class="{activeTop:topMenuName=='evalute'}">评价</div>
            <div @click="clickScroll('detailScroll')" :class="{activeTop:topMenuName=='detail'}">详情</div>
            <div
                @click="clickScroll('recommScroll')"
                :class="{activeTop:topMenuName=='recommend'}"
            >推荐</div>
        </div>

        <!-- 轮播部分 -->
        <div class="proimg" ref="proScroll">
            <div class="nav-goback" @click="goBack">
                <span>&#xe612;</span>
            </div>
            <div class="proimg-lunbo" v-if="proInfo">
               <swiper :options="swiperOption" ref="mySwiper">
                   <swiper-slide v-for="(item,index) in this.$route.query.headPhoto" :key="index">
                       <img :src="item" alt="">
                       
                   </swiper-slide>
                   <!-- <swiper-slide>
                       <img src="//imgservice.suning.cn/uimg1/b2c/image/8FZclwidYEqoQs7kvmKmtA.jpg_800w_800h_4e_100Q_is" alt="">
                   </swiper-slide>
                   <swiper-slide>
                       <img src="//imgservice.suning.cn/uimg1/b2c/image/iAN66HoUY75adhMJ3bwQyg.jpg_800w_800h_4e_100Q_is" alt="">
                   </swiper-slide>
                   <swiper-slide>
                       <img src="//imgservice.suning.cn/uimg1/b2c/image/gFKsAZybg7twomMYuwJ--A.jpg_800w_800h_4e_100Q_is" alt="">
                   </swiper-slide> -->

                </swiper> 
            </div>
        </div>

        <!-- 价格 -->
        <div class="pro-price" >
            <span class="money">¥</span>
            <span class="yuan">{{Math.floor(this.$route.query.price)}}</span>
            <span>.</span>
            <span class="mao">{{Math.floor((this.$route.query.price-Math.floor(this.$route.query.price))*100)}}</span>
        </div>
        <div class="pro-title">
            <p>{{this.$route.query.title}}</p>

            <!-- 关注图标 -->
            <div>
                <img src="../../assets/prodetail/collect.png" alt />
            </div>
        </div>
        <div class="pro-introduce">
            <p>{{this.$route.query.described}}</p>
        </div>
        <div class="co-branded">
            <img src="../../assets/prodetail/coBranded.png" alt />
            <p>办苏宁联名卡，周周满100减50</p>
            <div>
                查看详情
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="installment">
            <div>分期</div>
            <p>开通任性付享购物免息</p>
            <div>
                <span>立刻激活</span>
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="example">
            <div>榜单</div>
            <p>此商品已入选</p>
            <div>
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="special-offer">
            <img src="../../assets/prodetail/special-offer.png" alt />

            <p>可参加以下优惠活动</p>
            <div>
                领劵
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="discount">
            <div>优惠</div>
            <div class="pri">￥3.00</div>
            <div class="dis">满59用3</div>
        </div>
        <div class="promption">
            <div>促销</div>
            <div>
                <div>
                    <p>云钻促销</p>
                    <p>普通会员预计返1云钻</p>
                </div>
               
            </div>
        </div>
        <div class="pro-selected">
            <div>已选</div>
            <div>1件 可选增值服务</div>
            <span>&#xe631;</span>
        </div>

        <div class="address" @click="areaClick">
            <div>送至</div>
            <div>
                <span>&#xe630;</span>
                <p>江苏 苏州 吴中区 全区</p>
                <span>&#xe631;</span>
            </div>
        </div>

        <div class="payment">
            <div>付款</div>
            <div>
                <p>支付 苏宁支付 支付宝</p>
            </div>
        </div>
        <div class="freight">
            <div>运费</div>
            <div>
                <p>免运费</p>
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="service">
            <div>服务</div>
            <div>
                <span>&#xe613;</span>
                <p>店铺发货&售后</p>
                <span>&#xe613;</span>
                <p>7天无理由退货</p>
                <span>&#xe631;</span>
            </div>
        </div>

        <div class="eva-title" ref="evaScroll">
            <p>评价({{this.$route.query.evaluate.length}})</p>
            <p>
                99%好评率
                <span>&#xe631;</span>
            </p>
        </div>
        <div class="eva-main">
            <div class="user-name">
                <div>
                    <img src="../../assets/prodetail/userImg.jpg" alt />
                    <p class="user-phone">{{this.$route.query.evaluate[0].username}}</p>
                </div>

                <div class="eva-star">
                    <img src="../../assets/prodetail/star.png" alt />
                    <img src="../../assets/prodetail/star.png" alt />
                    <img src="../../assets/prodetail/star.png" alt />
                    <img src="../../assets/prodetail/star.png" alt />
                    <img src="../../assets/prodetail/star.png" alt />
                </div>
            </div>
            <div class="user-eva">
                <p>{{this.$route.query.evaluate[0].say}}</p>
                <img v-for="(item,index) in this.$route.query.evaluate[0].photo" :src="item" alt  :key="index"/>

                <!-- <img src="//image3.suning.cn/uimg/ZR/share_order/160801883639271649.jpg?format=400w_400h_1e_1c" alt />
                 <img src="//image3.suning.cn/uimg/ZR/share_order/160801883639271649.jpg?format=400w_400h_1e_1c" alt />
                  <img src="//image3.suning.cn/uimg/ZR/share_order/160801883639271649.jpg?format=400w_400h_1e_1c" alt /> -->
            </div>
        </div>
        <div class="eva-bottom">
            <p>查看全部评价</p>
        </div>
        <div class="question">
            <p>问问已购用户</p>
            <p>商品好不好？问问买过的人</p>
            <p>
                去提问
                <span>&#xe631;</span>
            </p>
        </div>
        <div class="store-detail">
            <div class="store-title">
                <img
                    src="https://image.suning.cn/uimg/cshop/logo/000000000070061119.jpg?1541142351917"
                    alt
                />
                <div>
                    <p class="store-name">{{proList.shopName}}</p>
                    <p class="store-service">
                        服务体验
                        <img src="../../assets/prodetail/fivestar.png" alt />
                    </p>
                </div>
                <div>进店享好礼</div>
            </div>
            <div class="store-eva">
                <p>
                    评价:
                    <span>9.60 高</span>
                </p>
                <p>
                    物流:
                    <span>9.60 高</span>
                </p>
                <p>
                    售后:
                    <span>9.60 高</span>
                </p>
            </div>
        </div>
        <div class="store-exclu">
            <div>店铺专享</div>
            <div>
                <p>店铺易劵(30元)</p>
                <p>店铺易劵(10元)</p>
            </div>
            <div class="more-right">
                更多权益
                <span>&#xe631;</span>
            </div>
        </div>
        <div class="recom-guess" ref="recommScroll">
            <div>
                <p @click="recomGuess('recom')" :class="{activeP:recomLunbo==recom}">
                    <span>店铺推荐</span>
                </p>
                <p @click="recomGuess('guess')" :class="{activeP:recomLunbo==guess}">
                    <span>猜你喜欢</span>
                </p>
            </div>
        </div>
        <div class="storerecom-guess" v-if="recomLunbo==recom">
           
               
                    <div class="store-recom">
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/CabISKWO5nV2tT9i9ArYtQ.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子零食 【手撕面包】 1050gx1箱装 蛋糕饼干早餐糕点原味办公室休闲零食整箱</p>
                            <p class="recom-price">¥32.90</p>
                        </div>
                    </div>
               
                
              
                <div class="swiper-pagination" slot="pagination"></div>
           
        </div>
        <div class="storerecom-guess" v-if="recomLunbo==guess">
           
                    <div class="store-recom">
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                        <div>
                            <img
                                src="//imgservice.suning.cn/uimg1/b2c/image/I4SZcpbzNgfB_qeQZ9oi0A.jpg_200w_200h_4e_100Q_is"
                                alt
                            />
                            <p class="recom-name">良品铺子迷你烤香肠 炭烤味145gx2袋 小香肠肉肠熟食肉类零食猪肉小吃袋装</p>
                            <p class="recom-price">¥49.90</p>
                        </div>
                    </div>
             
                    
     
        </div>

        <div class="detail-specifi-package" ref="detailScroll">
            <div>
                <p @click="detailSpecifi('detail')" :class="{activeP:detailSpecifis=='detail'}">
                    <span>图文详情</span>
                </p>
                <p @click="detailSpecifi('specifi')" :class="{activeP:detailSpecifis=='specifi'}">
                    <span>规格参数</span>
                </p>
                <p @click="detailSpecifi('packages')" :class="{activeP:detailSpecifis=='packages'}">
                    <span>包装售后</span>
                </p>
            </div>
        </div>
        <div class="picture-detail" v-if="detailSpecifis==detail" v-html="proInfo.descript">
            <div v-for="(item,index) in proList" :key="index">
                <img :src="item.img" alt />
            </div>
        </div>
        <div class="specifi-detail" v-if="detailSpecifis==specifi">
            <div>
                <span>主体</span>
            </div>
            <div>
                <ul>
                    <li>
                        <div>品牌</div>
                        <div>良品铺子</div>
                    </li>
                    <li>
                        <div>类别</div>
                        <div>鸡爪</div>
                    </li>
                    <li>
                        <div>国产/进口</div>
                        <div>国产</div>
                    </li>

                    <li>
                        <div>包装</div>
                        <div>袋装</div>
                    </li>
                    <li>
                        <div>净含量</div>
                        <div>100克</div>
                    </li>

                    <li>
                        <div>保质期</div>
                        <div>180天</div>
                    </li>
                    <li>
                        <div>生产日期</div>
                        <div>2020年</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="package-sale" v-if="detailSpecifis==packages">
            <div>包装清单</div>
            <p>袋装×1</p>
            <div>售后服务</div>
            <p>不影响2次销售</p>
            <div>价格说明</div>
            <p>
                划线价：商品展示的划线价，可能是品牌专柜标价、品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                折扣：如无特殊说明，折扣指销售商在划线价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
                异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
            </p>
        </div>

        <!-- <div class="look">
            <span>看了又看</span>
        </div>
        <div class="like-content">
            <div
                v-for="(item,index) in list"
                :key="index"
                class="like-item"
                @click="proDetaTo(index)"
            >
                <div class="imgBox">
                    <img :src="item.images[0]" alt />
                </div>
                <p class="proName">{{item.proName}}</p>
                <p class="shopName">{{item.shopName}}</p>
                <div class="pro-price">
                    <span class="dollar">￥</span>
                    <span class="price">{{item.price[0]}}{{item.price[1]}}</span>
                    <span class="evaluateNum">{{item.evaluateNum}}</span>
                </div>
            </div>
        </div> -->

        <!-- 底部导航栏 -->
        <div class="prodetail-bottom">
            <div class="buy-img">
                <div class="kefu">
                    <img src="../../assets/prodetail/sn-custom.png" alt />
                </div>
                <div class="dianpu">
                    <img src="../../assets/prodetail/store.png" alt />
                </div>
                <div class="gouwu" @click="gouClick()">
                    <img src="../../assets/prodetail/sn-cart.png" alt />
                </div>
            </div>
            <div class="buy-add">
                <div class="buy">
                    <span class="buy1">立即购买</span>
                </div>
                <div  class="buy2">
                    <el-button :plain="true" @click="open2" class="add-cart">加入购物车</el-button>
                </div>
            </div>
        </div>

       <!--加入购物车 -->
            <div class="toShopCar" :style="'display:'+disapper">
                <header>
                    <div class="cover-header">
                        <div class="img-box">
                            <img :src="this.$route.query.pic" alt="">
                        </div>
                        <div class="product">
                            <div class="price">
                                <div class="price-type">
                                    <p class="choose-price">￥{{this.$route.query.price}}</p>
                                </div>
                                <p class="bianma">商品编码:11083216388</p>
                                <div class="display-product-name">{{this.$route.query.title}}</div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="cover-close" @click="disapper='none'"></div>
                <div class="cover-body">
                        <div class="btmfloat">
                            <div class="slider">
                                <div class="select-content" v-for="(item,index) in lists" :key="index">
                                    <h2>{{item.title}}</h2>
                                    <div class="select-item" @click="changeBackground" ref="change">{{item.pro[index]}}</div>
                                    
                                </div>
                                <div class="limit-num">
                                    <h2 class="flexhd">购买数量</h2>
                                    <div class="items">
                                        <span>-</span>
                                        <input type="number" value="1">
                                        <span>+</span>
                                    </div>
                                </div>  
                            </div>
                            <div class="cluster-footer">
                                <div class="cartbuy">
                                    <div class="cart-buy">
                                        <button class="btn-left">马上抢</button>
                                        <button class="btn-right">加入购物车</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Swiper2, { Navigation,Autoplay, Pagination} from 'swiper';
Swiper2.use([Navigation,Autoplay,Pagination]);
export default {
   
   components: {
    Swiper,
    SwiperSlide,
  },
  created(){
      console.log(this.$route.query)

  },
    data() {
        return {
            lists:[
                {
                    title:"颜色",
                    pro:[
                       "一条装",
                       "一条装"
                    ]
                },
                {
                    title:"尺寸",
                    pro:[
                       "30*60cm",
                       "30*60cm"
                    ]
                }
            ],
            list: [], //看了又看
            proLists: [],
            proList: [],
            mask: false,
            recomLunbo: "recom",
            recom: "recom",
            guess: "guess",
            detailSpecifis: "detail",
            detail: "detail",
            specifi: "specifi",
            packages: "packages",
            topshow: false,
            topMenuName: "product",
            proInfo: {},
            disapper:"none",
             swiperOption: {
        loop: true,
        observer:true,
        observeParents:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            disableOnInteraction: false,
            delay:3000
        }
      },
        };
    },
    beforeRouteLeave(to, from, next) {
        this.$destroy("prodetail");
        next();
    },
    mounted() {
        this.$refs.scrollDiv.addEventListener("scroll", this.scrollEvent, true);
    },
    beforeDestroy() {
        this.$refs.scrollDiv.addEventListener("scroll", this.scrollEvent, true);
    },
  
    methods: {
        recomGuess(name) {
            this.recomLunbo = name;
        },
        detailSpecifi(name) {
            this.detailSpecifis = name;
        },
        goBack() {
            this.$router.go(-1);
        },
        scrollEvent() {
            // console.log(this.$refs.scrollDiv.scrollTop)
            if (this.$refs.scrollDiv.scrollTop > 200) {
                this.topshow = true;
            } else {
                this.topshow = false;
            }
            // console.log(this.$refs.proScroll.getBoundingClientRect().top);
            if (this.$refs.proScroll.getBoundingClientRect().top < 60) {
                this.topMenuName = "product";
            }
            if (this.$refs.evaScroll.getBoundingClientRect().top < 60) {
                this.topMenuName = "evalute";
            }
            if (this.$refs.recommScroll.getBoundingClientRect().top < 60) {
                this.topMenuName = "recommend";
            }
            if (this.$refs.detailScroll.getBoundingClientRect().top < 60) {
                this.topMenuName = "detail";
            }
        },
        clickScroll(name) {
            let page = this.$refs[name].offsetTop;
            this.$refs.scrollDiv.scrollTo({
                top: page - 50,
                behavior: "smooth",
            });
        },
        
        open2() {
           this.disapper="block"

        },

        // 详情跳转
        // proDetaTo(index) {
        //     this.proList = this.proLists[index];
        // },
        areaClick() {
            this.mask = true;
        },
        close() {
            this.mask = false;
        },

        // 区域选择
        provinceChange() {
            this.cityList = this.selectProvince.cityList;
            this.selectCity = this.cityList[0];

            this.areaList = this.selectCity.areaList;
            this.selectArea = this.areaList[0];
        },
        cityChange() {
            this.areaList = this.selectCity.areaList;
            this.selectArea = this.areaList[0];
        },
        gouClick() {
             this.$router.go(-1);
           this.$store.state.componentName="shopping-car"
        },
        changeBackground(){
            this.$refs.change.style="background:#ffeda2;border: .02rem solid #fc0"
        }
    },
};
</script>
<style scoped>
/* 加入购物车底部 */
.btn-right{
    border-radius: .06rem .24rem .24rem .06rem;
    background: linear-gradient(90deg,#f60,#f60);
    flex-grow: 1;
    height: 1.32rem;
}
.btn-left{
    margin-right: .12rem;
    border-radius: .24rem .06rem .06rem .24rem;
    background: linear-gradient(90deg,#fc0,#fc0);
    flex-grow: 1;
     height: 1.32rem;
}
.cart-buy{
    padding: 0 .48rem;
    background: #fff;
    display: flex;
    align-items: center;
}
.cartbuy{
    width: 100%;
}
.cluster-footer{
    width: 100%;
    padding-bottom: .4rem;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 111;
}
/* 关闭键 */
.cover-close{
    position: absolute;
    right: 0;
    top: 0;
    width: 1.6rem;
    height: 1.6rem;
    background: url(../../images/cover-close.png) no-repeat 50%;
    background-size: .6rem .6rem;
}

/* 购买数量 */
.limit-num>.items input{
    height: .96rem;
    line-height: .96rem;
    min-width: .7rem;
    max-width: 1.1rem;
    box-sizing: border-box;
    padding: 0 .04rem;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    font-size: .48rem;
    color: inherit;
    vertical-align: top;
    text-align: center;
    appearance: none;
    margin: .1rem .3rem 0;

}
.limit-num>.items span{
    display: inline-block;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    background-color: #f4f4f4;
    border-radius: 50%;
    margin-top: .16rem;
}
.limit-num>.items{
    width: 4rem;
    height: 1.12rem;
    border: 1px solid #ddd;
    border-radius: .56rem;
    font-size: .48rem;
    text-align: center;
}
.flexhd{
    flex: 1;
    color: #222;
    font-size: .52rem;
}
.limit-num{
    display: flex;
    align-items: center;
}
/* 加入购物车弹框 */
.select-item{
    display: inline-block;
    background: #f6f6f6;
    margin: .24rem .24rem 0 0;
    padding: .2rem 1em;
    text-align: center;
    border-radius: .24rem;
    box-sizing: border-box;
    border: .04rem solid #f6f6f6;
}
.select-content{
 border-bottom: .04rem solid #f6f6f6;
 padding-bottom: 5px;
}
.select-content>h2{
    font-size:0.52rem;
    color: #222;
}
.slider{
    padding: 0 .48rem;
}
.cover-body{
    width: 100%;
    overflow-x: hidden;
    overflow-y:auto ;
}
.display-product-name{
    font-size: .52rem;
    color: #222;
    margin-top: .36rem;

}
.bianma{
    font-size:0.4rem;
    color: rgb(153, 153, 153)
}
.price-type{
    display: flex;
    align-items: baseline;
    height: .64rem;
    margin: 1rem 0 .32rem;
}
.price{
    text-align: left;
    margin-left: .4rem;
    font-size: .56rem;
    margin-top: .3rem;
}
.product{
    padding-right: 10px;
    margin-left: 4.8rem;
}
 .img-box>img{
    width: 4.56rem;
    height: 4.56rem;
}
.img-box{
    position: absolute;
    top: -.74rem;
    left: .48rem;
    width: 4.2rem;
    height: 4.2rem;
    overflow: hidden;
    border: 1px solid #eee;
    border-radius: .48rem;
}
.toShopCar {
    background:#fff;
    height: 70%;
    z-index: 5555;
    position: fixed;
    bottom: .12rem;
    left: .12rem;
    right: .12rem;
    border-radius: .48rem;
}
html,
body,
.prodetail {
    height: 100%;
    background-color: #f2f2f2;
    overflow: auto;
    padding-bottom: 14%;
}
a {
    text-decoration: none;
    color: #222;
}
.top-menu .activeTop {
    position: relative;
}
.proimg-lunbo{
    width:100%;
    height: 100%;
}
.proimg-lunbo img{
    width:100%;
    height: 100%;
}
.top-menu .activeTop::after {
    content: "";
    display: block;
    width: 15%;
    height: 4px;
    border-radius: 2px;
    background-color: #fc0;
    position: absolute;
    left: 45%;
    bottom: -50%;
}
.top-menu {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    z-index: 9;
}
.top-menu > div {
    width: 16%;
    text-align: center;
    color: #222;
}
.top-menu > div:first-child {
    font-size: 22px;
}
.proimg {
    position: relative;
    width: 100%;
    background-color: #fff;
}
.proimg > .nav-goback {
    position: absolute;
    left: 3%;
    top: 1%;
    width: 4%;
    color: rgba(127, 127, 127, 0.9);
    z-index: 2;
    font-size: 32px;
}
.my-swiper img {
    width: 100%;
}
.proimg .swiper-pagination {
    width: 8%;
    height: 5%;
    line-height: 200%;
    border-radius: 4px;
    color: #fff;
    background-color: #7a7a7a;
    position: absolute;
    left: 90%;
    bottom: 2%;
    font-size: 10px;
}
.pro-price {
    height: 6%;
    padding-left: 3%;
    padding-top: 1%;
    background-color: #fff;
}
.pro-price > span {
    color: #ff4422;
    font-size: 18px;
    font-weight: bolder;
}
.pro-price > .yuan {
    font-size: 25px;
}
.pro-title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
}
.pro-title > p {
    width: 87%;
    padding: 1% 0 1% 3%;
    color: #222;
    font-size: 16px;
    font-weight: 600;
}
.pro-title > div {
    width: 13%;
    padding-top: 1%;
}
.pro-title > div > img {
    width: 80%;
}
.pro-introduce {
    height: 6%;
    padding-left: 3%;
    padding-top: 2%;
    background-color: #fff;
}
.pro-introduce > p {
    color: rgb(153, 153, 153);
    font-size: 15px;
}
.co-branded {
    display: flex;
    width: 100%;
    height: 7%;
    flex-wrap: nowrap;
    background-color: #fff;
    margin-top: 2%;
    padding-left: 3%;
    flex-direction: row;
    align-items: center;
}
.co-branded > img {
    height: 35%;
}
.co-branded > p {
    width: 65%;
    padding-left: 2%;
    color: #222;
    font-size: 12px;
}
.co-branded > div {
    width: 20%;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    font-weight: 400;
    color: #999;
}
.co-branded > div > span {
    /* font-size: 14px; */
    vertical-align: middle;
}
.installment {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 7%;
    background-color: #fff;
    margin-top: 2%;
    padding-left: 3%;
    flex-direction: row;
    align-items: center;
}
.installment > div:first-child {
    color: #999;
    font-size: 13px;
}
.installment > p {
    font-size: 13px;
    color: #222;
    width: 72%;
    padding-left: 2%;
}
.installment > div:last-child {
    font-size: 12px;
    font-weight: 400;
    color: #999;
}
.installment > div:last-child > span {
    font-size: 12px;
    vertical-align: middle;
}
.example {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 7%;
    background-color: #fff;
    margin-top: 2%;
    padding-left: 3%;
    flex-direction: row;
    align-items: center;
}
.example > div:first-child {
    color: #999;
    font-size: 13px;
  
}
.example > p {
    font-size: 13px;
    color: #222;
    width: 86%;
    padding-left: 2%;
}
.example > div:last-child > span {
    font-size: 15px;
    vertical-align: middle;
    color: #999;
    margin-right: 0.8rem;
}
.special-offer {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 7%;
    background-color: #fff;
    padding-left: 3%;
    flex-direction: row;
    align-items: center;
}
.special-offer > img {
    height: 35%;
}
.special-offer > p {
    font-size: 13px;
    color: #222;
    width: 79%;
    padding-left: 2%;
}
.special-offer > div {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    margin-left: -10px;
}
.special-offer > div > span {
    font-size: 15px;
    vertical-align: middle;
}
.discount {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.discount > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
}
.discount > .pri {
    height: 35%;
    width: 14%;
    text-align: center;
    background-color: #ffcc00;
    font-size: 10px;
    /* padding-top: 0.5%; */
    position: relative;
}
.discount > .pri::after {
    content: "";
    height: 50%;
    width: 20%;
    background-color: #ffcc00;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -9%;
}
.discount > .pri::before {
    content: "";
    height: 50%;
    width: 20%;
    background-color: #ffcc00;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: -9%;
}
.discount > .dis {
    height: 36%;
    width: 18%;
    text-align: center;
    border: 1px solid #ffcc00;
    border-right: 1px solid transparent;
    font-size: 10px;
    position: relative;
    background-color: #fff;
}
.discount > .dis::after {
    content: "";
    height: 50%;
    width: 20%;
    border-top: 1px solid #ffcc00;
    border-right: 1px solid #ffcc00;
    border-bottom: 1px solid #ffcc00;
    border-radius: 50%;
    position: absolute;
    top: -9%;
    right: -12%;
}
.discount > .dis::before {
    content: "";
    height: 50%;
    width: 20%;
    border-bottom: 1px solid #ffcc00;
    border-right: 1px solid #ffcc00;
    border-radius: 50%;
    position: absolute;
    bottom: -9%;
    right: -12%;
}
.promption {
    background-color: #fff;
    display: flex;
    height: 5%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.promption > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
}
.promption > div:last-child {
    height: 100%;
    width: 60%;
    padding: 3% 0;
}
.promption > div:last-child > div {
    display: flex;
    height: 100%;
    align-items: center;
}
.promption > div:last-child > div > p:first-child {
    border: 1px solid #ffcc00;
    font-size: 10px;
    height: 50%;
    width: 44%;
    text-align: center;
    border-radius: 3px;
}
.promption > div:last-child > div > p:last-child {
    font-size: 12px;
    width: 90%;
    padding-left: 3%;
}
.pro-selected {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    margin-top: 2%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.pro-selected > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
}
.pro-selected > div:nth-child(2) {
    font-size: 13px;
    font-weight: bold;
    width: 83%;
}
.pro-selected > span {
    color: #999;
}
.address {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.address > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
    flex-shrink: 0;
}
.address > div:last-child {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 13px;
}
.address > div:last-child > span {
    color: #ff5806;
    font-size: 12px;
    margin-right: 1%;
}
.address > div:last-child > p {
    width: 86%;
}
.address > div:last-child > span:last-child {
    color: #999;
    font-size: 16px;
}
.payment {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.payment > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
}
.payment > div:last-child {
    display: flex;
    width: 70%;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 13px;
}
.freight {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.freight > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
    flex-shrink: 0;
}
.freight > div:last-child {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 13px;
}
.freight > div:last-child > p {
    width: 90%;
}
.freight > div:last-child > span {
    color: #999;
    font-size: 16px;
}
.service {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    padding-left: 3%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.service > div:first-child {
    color: #999;
    font-size: 13px;
    margin-right: 2%;
    flex-shrink: 0;
}
.service > div:last-child {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 13px;
}

.service > div:last-child > span {
    color: #ffcf14;
    margin-right: 1%;
    flex-shrink: 0;
}
.service > div:last-child > p {
    margin-right: 5%;
    font-size: 12px;
    flex-shrink: 0;
}
.service > div:last-child > p:nth-child(4) {
    margin-right: 26%;
}
.service > div:last-child > span:last-child {
    color: #999;
    font-size: 16px;
}

/* 底部导航栏 */
.prodetail-bottom {
    background-color: #fff;
    display: flex;
    height: 8%;
    width: 100%;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    z-index: 9;
}

.prodetail-bottom .buy-img {
    display: flex;
    flex-direction: row;
    width: 40%;
}

.prodetail-bottom .buy-add {
    display: flex;
    flex-direction: row;
    width: 60%;
}

.prodetail-bottom .buy-img .kefu,
.prodetail-bottom .buy-img .dianpu,
.prodetail-bottom .buy-img .gouwu {
    width: 33%;
}

.prodetail-bottom .buy-img img {
    width: 100%;
}
.prodetail-bottom .buy-add .buy {
    display: flex;
    flex-direction: row;
    width: 45%;
    background-color: #ffcc00;
    border-radius: 10px 0 0 10px;
    align-items: center;
    justify-content: center;
}

.prodetail-bottom .buy-add .buy2 .add-cart {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 0 10px 10px 0;
    align-items: center;
    justify-content: center;
    background-color: #ff6600 !important;
    color: #fff !important;
    outline: none !important;
}

.eva-title {
    margin-top: 2%;
    padding: 3%;
    height: 7%;
    display: flex;
    background-color: #fff;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    justify-content: space-between;
}
.eva-title > p:last-child {
    color: #999;
    font-weight: normal;
    font-size: 12px;
    margin-right: 2%;
}
.eva-title > p:last-child > span {
    font-size: 16px;
    vertical-align: middle;
}
.eva-main {
    height: 30%;
    background-color: #fff;
    padding: 3%;
}
.user-name {
    height: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #222;
    font-size: 10px;
    align-items: center;
    justify-content: space-between;
}
.eva-main > .user-name > div {
    height: 100%;
    /* width: 18%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.eva-main > .user-name > div > img {
    height: 90%;
    border-radius: 50%;
}
.eva-main > .user-name > .eva-star {
    height: 100%;
    width: 25%;
}
.eva-main > .user-name > .eva-star > img {
    height: 50%;
}
.user-eva {
    height: 50%;
    padding: 24px 8px;
}
.user-phone {
    margin-left: 6px;
}
.user-eva > p {
    font-size: 14px;
}
.user-eva > img {
    height: 70%;
    
    margin-left: 16px;
}
.eva-bottom {
    display: flex;
    height: 6%;
    font-size: 14px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
}
.eva-bottom > p {
    border: 1px solid #ccc;
    width: 33%;
    border-radius: 5px;
    text-align: center;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.question {
    display: flex;
    height: 10%;
    background-color: #fff;
    align-items: center;
    padding-left: 3%;
    margin-top: 2%;
}
.question > p:first-child {
    font-size: 14px;
    font-weight: bold;
    margin-right: 2%;
}
.question > p:nth-child(2) {
    color: #999;
    font-size: 13px;
    margin-right: 10%;
}
.question > p:last-child {
    color: #999;
    font-size: 13px;
}
.question > p:last-child > span {
    font-size: 16px;
    vertical-align: middle;
}
.store-detail {
    height: 25%;
    background-color: #fff;
    padding-left: 3%;
    margin-top: 2%;
}
.store-detail > .store-title {
    display: flex;
    height: 70%;
    align-items: center;
}
.store-detail > .store-title > img {
    height: 60%;
    margin-right: 2%;
}
.store-detail > .store-title > div:first-child {
    height: 70%;
    width: 50%;
    flex-shrink: 0;
}
.store-detail > .store-title .store-name {
    font-size: 15px;
    font-weight: bold;
}
.store-detail > .store-title .store-service {
    font-size: 12px;
    color: #999;
    margin-top: 2%;
}
.store-detail > .store-title .store-service img {
    width: 35%;
}
.store-detail > .store-title > div:last-child {
    flex-shrink: 0;
    height: 30%;
    line-height: 2;
    width: 28%;
    margin-right: 4%;
    background-color: #fc0;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
}
.store-detail > .store-eva {
    display: flex;
}
.store-detail > .store-eva > p {
    width: 33%;
    text-align: center;
    font-size: 12px;
}
.store-detail > .store-eva > p > span {
    color: red;
}
.store-exclu {
    display: flex;
    height: 7%;
    background-color: #fff;
    align-items: center;
    padding-left: 3%;
    margin-top: 2%;
}
.store-exclu > div:first-child {
    color: #222;
    font-size: 13px;
}
.store-exclu > div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 10px;
    height: 100%;
    width: 57%;
}
.store-exclu > div:nth-child(2) > p {
    background-color: #f42;
    height: 35%;
    width: 38%;
    text-align: center;
    border-radius: 5px;
    margin: 0 2%;
    position: relative;
    color: #fff;
}
.store-exclu > div:nth-child(2) > p::after {
    content: "";
    display: block;
    width: 11%;
    height: 50%;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 25%;
    left: -6%;
}
.store-exclu > div:nth-child(2) > p::before {
    content: "";
    display: block;
    width: 11%;
    height: 50%;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 25%;
    right: -6%;
}
.store-exclu > .more-right {
    font-size: 12px;
    color: #999;
    margin-left: 4%;
}
.store-exclu > .more-right > span {
    font-size: 16px;
    vertical-align: middle;
}
.recom-guess {
    display: flex;
    height: 7%;
    background-color: #fff;
    align-items: center;
    padding-left: 3%;
    margin-top: 2%;
    justify-content: center;
}
.recom-guess > div {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    height: 100%;
}
.recom-guess > div > p {
    margin-right: 6%;
    height: 100%;
    display: flex;
    align-items: center;
}
.recom-guess .activeP {
    border-bottom: 3px solid #ffc001;
    padding-top: 3px;
    font-weight: bold;
}
.detail-specifi-package .activeP {
    border-bottom: 3px solid #ffc001;
    padding-top: 3px;
    font-weight: bold;
}
.storerecom-guess {
    height: 55%;
    padding: 3%;
    background-color: #fff;
}
.recom-swiper {
    height: 100%;
    background-color: #fff;
}
.store-recom {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}
.store-recom > div {
    width: 33%;
    /* height: 7rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.store-recom > div > img {
    width: 90%;
}
.store-recom > div > .recom-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    text-align: left;
    font-size: 14px;
    padding: 0 1%;
}
.store-recom > div > .recom-price {
    margin-top: 10%;
    color: #f42;
    font-size: 15px;
}
.detail-specifi-package {
    display: flex;
    height: 7%;
    background-color: #fff;
    align-items: center;
    padding-left: 3%;
    margin-top: 2%;
    justify-content: center;
}
.detail-specifi-package > div {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    height: 100%;
}
.detail-specifi-package > div > p {
    margin-right: 6%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1%;
}
.picture-detail {
    background-color: #fff;
    width: 100%;
}
.picture-detail /deep/ * {
    /* 深度选择器 */
    width: 100%;
}
.specifi-detail {
    background-color: #fff;
    padding: 3%;
}
.specifi-detail > div > span {
    font-size: 12px;
    color: #222;
}
.specifi-detail > div li {
    list-style: none;
    display: flex;
    font-size: 12px;
    color: #999;
    margin-top: 4%;
}
.specifi-detail > div li > div {
    width: 50%;
}
.package-sale {
    padding: 3%;
    background-color: #fff;
}
.package-sale > div {
    height: 25px;
    font-size: 12px;
}
.package-sale > p {
    min-height: 25px;
    color: #999;
    font-size: 12px;
}
/* 看了又看 */
.look {
    text-align: center;
    padding: 12px 0px;
    position: relative;
}
.look span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #222;
}
.look span::before {
    content: "";
    display: block;
    position: absolute;
    width: 25%;
    left: 52px;
    top: 20px;
    border-top: 2px solid #ddd;
}
.look span::after {
    content: "";
    display: block;
    position: absolute;
    width: 25%;
    right: 53px;
    top: 20px;
    border-top: 2px solid #ddd;
}

/* 看了又看 */
.like-content {
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.like-item {
    width: 49%;
    padding: 0px 5px;
    background-color: white;
    margin-top: 8px;
}
.imgBox {
    width: 100%;
}
.imgBox img {
    width: 100%;
}
.proName {
    width: 100%;
    height: 43px;
    font-size: 13px;
    font-weight: bold;
    padding: 6px 4px 0px 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.shopName {
    display: inline-block;
    font-size: 10px;
    padding: 0 4px;
    color: white;
    background: #7a51fa;
    border-radius: 5px;
}
.pro-price {
    flex-shrink: 0;
    padding: 5px 0 10px 0;
}
.dollar {
    font-size: 14px;
    color: #ff4422;
}
.price {
    font-size: 16px;
    font-weight: bold;
    color: #ff4422;
}
.evaluateNum {
    font-size: 12px;
    color: #999999;
    margin-left: 10px;
}

/* 区域 */
.mask {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}
.area {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 60%;
    background-color: #fff;
    border-radius: 5%;
    text-align: center;
    /* transform: translateY(-100%);
  transition: 2s; */
}
.nav {
    padding: 10px 0px;
    border-bottom: 1px solid #eee;
}
.nav-icon {
    float: right;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
}
.sele {
    font-size: 14px;
    padding: 10px;
    width: 30%;
    height: 10%;
    background-color: white;
    outline: none;
    border: none;
    border-bottom: 1px solid #f2f2f2;
}
.pro-price {
    padding-left: 3%;
}
</style>