<template>
    <div >
            <div class="login" v-show="login">
                <div class="navurl">
                    <a href>联系客服</a>
                    <a href >企业注册</a>
                </div>
                <!-- login界面 -->
                <div class="login-content">
                    <h2>
                        <img src="https://res.suning.cn/project/passport/login/wapV8/images/login-icon.png" alt />
                        欢迎登录苏宁易购
                    </h2>
                    <!-- 手机号 -->
                    <div class="phone">
                        <input
                            type="text"
                            v-model="phoneNum"
                        placeholder="请输入手机号/用户名/邮箱"
                            class="phone-number"
                        />
                    </div>
                    <!-- password -->
                    <div class="password">
                        <input type="password"  v-model="password" placeholder="请输入密码" class="phone-number" />

                        <div class="password-icon">
                            <img src="../images/eyeclose.png" v-if="open" @click="change"  alt />
                            <img src="../images/eyeopen.png" v-else  @click="eyeopen" alt />
                            <a href>忘记密码</a>
                        </div>
                    </div>
                    <!-- 登录 -->
                    <div class="register">
                        <a href class="register-p1"  @click.prevent="successLogin(phoneNum,password)">登录</a>
                        <a href class="register-p2">验证码登录</a>
                    </div>
                </div>
                <!-- footer -->
                <div class="footer">
                    <p class="footer-p">其他登录方式</p>
                    <div class="footer-icon">
                        <a href>
                            <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_qq.png" alt />
                        </a>
                        <a href>
                            <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png" alt />
                        </a>
                        <a href>
                            <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_k.png" alt />
                        </a>
                    </div>
                    <div class="agree-protocol">
                        <span class="agree">我同意</span>
                        <span class="protocol">《苏宁易购会员章程》</span>
                        <span class="protocol">《易付宝协议》</span>
                    </div>
                </div>
            </div>
            <div class="login-in" v-show="loginIn">
                    
                <!-- header -->
                <div class="header">
                    <div class="header-title">
                        <div class="title">我的易购</div>
                        <div class="header-icon iconfont">
                            <a href @click.prevent>&#xe705;</a>
                        </div>
                    </div>
                    <div class="information">
                        <div class="information-left">
                            <div class="one">
                                <a href class="information-left-pic">
                                    <img src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_01_240x240.jpg" alt />
                                </a>
                                <a href class="rz">去实名认证</a>
                            </div>
                            <div class="information-middle">
                                <p class="information-middle-up"></p>
                                <p class="information-middle-down">生态值557</p>
                            </div>
                        </div>

                        <div class="information-right">
                            <img src="../images/huiyuanma.png" class="member" alt="">
                            
                        </div>
                    </div>
                    <!-- 优惠券、足迹、我的关注 -->
                    <div class="header-last">
                        <div class="header-last-one">
                            <a href>
                                <p>520</p>
                                <p>优惠券</p>
                            </a>
                        </div>
                        <div class="header-last-one">
                            <a href>
                                <p>520</p>
                                <p>领云钻</p>
                            </a>
                        </div>
                        <div class="header-last-one">
                            <a href>
                                <p>13</p>
                                <p>足迹</p>
                            </a>
                        </div>
                        <div class="header-last-one">
                            <a href>
                                <p>14</p>
                                <p>我的关注</p>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- vip图片 -->
                <div class="vip">
                    <a
                        href=""
                        class="vip-a"
                    >
                        <div class="vip-left">
                            <img src="https://oss.suning.com/vss/activity/wximg/my/vip.png" alt />
                            <span>银行联名卡，办卡得Super</span>
                        </div>
                        
                    </a>
                </div>
                <!-- 我的易购 内容部分 -->
                <div class="my-content">
                    <div class="my-order">
                        <div class="my-order-title">
                            <span>我的订单</span>
                            <a href class="all iconfont">
                                <span>查看全部&nbsp;</span>
                                <span class="all-icon"></span>
                            </a>
                        </div>

                        <div class="my-order-status iconfont">
                            <a href>
                                <p class="icon">&#xe700;</p>
                                <span>待支付</span>
                            </a>
                            <a href>
                                <p class="icon">&#xe6a8;</p>
                                <span>待收货</span>
                            </a>
                            <a href>
                                <p class="icon">&#xe611;</p>
                                <span>评价有礼</span>
                            </a>
                            <a href>
                                <p class="icon">&#xe60a;</p>
                                <span>退货/售后</span>
                            </a>
                            <a href>
                                <p class="icon">&#xe643;</p>
                                <span>常购清单</span>
                            </a>
                        </div>
                    </div>

                    <!-- 必备工具 -->
                    <div class="my-order must-tool">
                        <div class="my-order-title">
                            <span>必备工具</span>
                        </div>

                        <div class="my-order-status must">
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157250874743127029.png" alt />
                                <p>红包</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157250876042530564.png" alt />
                                <p>店铺关注</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/160266084132266426.png" alt />
                                <p>足迹</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157136450994431031.png" alt />
                                <p>客户服务</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157251063564774447.png" alt />
                                <p>必抢清单</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157136454213083878.png" alt />
                                <p>拼购</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157251073785756292.png" alt />
                                <p>校园VIP</p>
                            </a>
                            <a href>
                                <img src="//image.suning.cn/uimg/cms/img/157136448419617333.png" alt />
                                <p>我的试用</p>
                            </a>
                        </div>
                    </div>
                    <!-- 好货推荐logo -->
                    <div class="logo">
                        <img src="https://res.suning.cn/project/msinode/wap/home/image/guessTitle-icon.png" alt />
                        <span>好货推荐</span>
                        <img src="https://res.suning.cn/project/msinode/wap/home/image/guessTitle-icon.png"  class="img2" alt />
                    </div>

                    <div class="like-content">
                        <div
                            v-for="(item,index) in  list"
                            class="like-item"
                            :key="index"
                        >
                            <div class="imgBox">
                                <img  :src="item.imgs" alt />
                            </div>
                            <p class="proName">{{item.proName}}</p>
                            
                            <div class="pro-price">
                                <span class="dollar">￥</span>
                                <span class="price">{{item.price}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    </div>
    
</template>
<script>
export default {
  data() {
    return {
      open: "true",

      phoneNum: "",
      password: "",
      list:[
          {
              imgs:"//imgservice.suning.cn/uimg1/b2c/image/Sc8lhYa7W0Ld9gra5lbwvA.jpg?from=mobile",
              proName:"苏鲜生【苏宁自有品牌】崇明大米5kg 崇明地理标志产品 崇明区域公共品牌产品 崇明大米产业协会推荐产品 2020秋收新米",
              price: "27.90",
          },
          {
              imgs:"//imgservice.suning.cn/uimg1/b2c/image/sspoVU8XPtM-YEEEfNza0Q.jpg?from=mobile",
              proName:"爱国者（aigo）32GB USB2.0 UDP系列 迷你金属U盘 U268 高速车载U盘 银色",
              price: "19.90",
          },
            {
              imgs:"//imgservice.suning.cn/uimg1/b2c/image/HMoy_T0JDgaXjWBKHE3TzA.jpg?from=mobile",
              proName:"LSPG 万年青制药 一次性 医用口罩 50只装（5包 每包10只）灭菌级 蓝色",
              price: "17.90",
          },
           {
              imgs:"////imgservice.suning.cn/uimg1/b2c/image/f-pxLB2qk-xxoUtmIJqFfA.jpg?from=mobile",
              proName:"恒大兴安 葵籽橄榄食用调和油5L 桶装家用 清淡不油腻 植物调和油 家庭装",
              price: "52.90",
          },
           {
              imgs:"//imgservice.suning.cn/uimg1/b2c/image/ujLJNPYMgvMImmOAibUtEw.jpg?from=mobile",
              proName:"【现捡现发】营养健康草鸡蛋 现捡现发农家草鸡蛋30枚装（破损包赔） 30枚装",
              price: "26.90",
          },
           {
              imgs:"//imgservice.suning.cn/uimg1/b2c/image/iNguMO_mD_njHN58QmPl4w.jpg?from=mobile",
              proName:"43度500ml贵州茅台酒 酱香型白酒 飞天茅台",
              price: "1049.90",
          },
      ]
    };
  },
  computed: {
    login() {
      return this.$store.state.login;
    },
    loginIn(){
        return this.$store.state.loginIn
    }
  },
  methods: {
    change() {
      this.open = false;
    },
    eyeopen() {
      this.open = true;
    },
    successLogin(phoneNum, password) {
      if (this.phoneNum == 18052440256 && this.password == "123456") {
        this.$store.state.login = false;
        this.$store.state.loginIn=true
      } else {
        alert("账号或者密码不正确");
      }
    },
  },
};
</script>
<style scoped>
.login-in{
  width:100%;overflow: hidden;
}
.logo>.img2{
    transform: rotateY(180deg);
}

.login {
  height: 100%;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.navurl {
  padding: 10px;
  text-align: right;
}
.navurl a {
  font-size: 12px;
  color: #222;
  padding: 0px 10px;
}
.navurl a:first-child {
  border-right: 1px solid #afadad;
}

/* login界面 */
.login-content {
  margin-top: 28px;
  padding: 0 37.5px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.login-content h2 img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  margin-right: 15px;
}
.login-content h2 {
  font-size: 18px;
  font-weight: 500;
  color: #222;
}
.phone {
  border-bottom: 1px solid #bbb;
  padding: 0 16px;
  margin-top: 30px;
}
.phone-number {
  width: 100%;
  outline: none;
  border: none;
  padding: 10px 0px;
  font-size: 20px;
}
::-webkit-input-placeholder {
  font-size: 14px;
  color: #afadad;
}
.password {
  padding: 0 16px;
  display: flex;
  border-bottom: 1px solid #bbb;
  margin-top: 12px;
}

.password-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.password-icon img {
  width: 1rem;
  margin-right: 10px;
}

.password-icon a {
  font-size: 12px;
  flex-shrink: 0;
  color: #222;
}
/* 登录 */
.register {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.register-p1 {
  display: block;
  font-size: 17px;
  background-color: #fc0;
  color: #222;
  border-radius: 0.5rem;
  font-weight: 700;
  text-align: center;
  padding: 12px 0px;
}
.register-p2 {
  font-size: 13px;
  text-align: center;
  color: #222;
  margin-top: 21px;
}
/* footer */
.footer {
  position: fixed;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  bottom: 5%;
}
.footer-p {
  font-size: 14px;
  text-align: center;
  margin-bottom: 9.5px;
}
.footer-p::before {
  content: "";
  display: block;
  border-bottom: 1px solid #ddd;
  position: absolute;
  width: 25%;
  left: 40px;
  top: 10px;
}
.footer-p::after {
  content: "";
  display: block;
  border-bottom: 1px solid #ddd;
  position: absolute;
  width: 25%;
  right: 40px;
  top: 10px;
}
.footer-icon {
  margin-bottom: 17.5px;
  text-align: center;
}
.footer-icon a {
  padding: 0 30px;
}
.footer-icon a img {
  width: 33px;
  height: 33px;
}
.agree-protocol {
  text-align: center;
}
.agree {
  font-size: 12px;
}
.protocol {
  font-size: 12px;
  border-bottom: 1px solid black;
}
.my-egou {
  width: 100%;
  height: 93%;
  position: relative;
}
a {
  text-decoration: none;
}
/* fix */
.egou-fix-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid #d3d2d2;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  right: 18px;
  top: 563px;
}
.egou-fix-icon a {
  font-size: 20px;
  vertical-align: middle;
  color: black;
}

/* header */
.header {
  background-color: #ffdb47;
}
.header-title {
  display: flex;
  flex-direction: row;
  padding: 10px 12px;
}
.title {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin: 0 auto;
}
.header-icon a {
  font-size: 19px;
  font-weight: bold;
  vertical-align: middle;
}
.information {
  display: flex;
  justify-content: space-between;
  padding: 18px 21px 0px 21px;
}
.information-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.information-left-pic {
  width: 55px;
  height: 55px;
}
.information-left-pic img {
  width: 55px;
  height: 55px;
  border-radius: 1.3rem;
}
.rz {
  font-size: 12px;
  padding: 0 5px;
  background-color: #ffeca3;
  color: #222;
  border-radius: 8px;
  margin-top: -9px;
  margin-left: -60px;
  flex-shrink: 0;
}
.information-middle {
  padding: 5px 10px;
}
.information-middle-up {
  font-size: 12px;
  font-weight: 700;
  padding: 0 0 6px 0;
}
.information-middle-down {
  background-color: #e1bb23;
  font-size: 12px;
  color: #fff;
  border-radius: 10px;
  padding: 0 5px;
}

.member {
  height: 2.4rem;
  width: 2.4rem;
}
.information-right p {
  font-size: 12px;
  font-weight: 550;
}

/* 优惠券、足迹、我的关注 */
.header-last {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 25px;
  text-align: center;
}

.header-last-one a p {
  font-size: 13px;
  font-weight: 600;
  color: #222;
  padding: 2px 0;
}
/* vip图片 */
.vip {
  width: 100%;
  padding: 0px 12px;
  float: left;
}
.vip-a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 7px 12px;
  margin-top: -15px;
}
.vip-left {
  width: 70%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vip-left img {
  width: 45px;
  height: 30px;
}
.vip-left span {
  font-size: 12px;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.vip-right {
  font-size: 12px;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vip-right span {
  margin-left: 5px;
  flex-shrink: 0;
}

/* 我的易购 内容部分 */
.my-content {
  background: #f2f2f2;
  padding: 43px 12px 10px 12px;
}
.my-order {
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  flex-shrink: 0;
}
.my-order-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.my-order-title span {
  font-size: 15px;
  color: #222;
  font-weight: bold;
}
.all span {
  font-size: 0.48rem;
  color: #666;
}
.all-icon {
  background-color: #e1bb23;
  border-radius: 5px;
  background-image: url(../images/r-icon.png);
}
.my-order-status {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 15px 10px;
}
.icon {
  font-size: 22px;
}
.my-order-status a {
  font-size: 25px;
  color: #222;
  margin-bottom: 8px;
}
.my-order-status a span {
  font-size: 12px;
  color: #222;
}
/* 必抢清单 */
.must-tool {
  margin-top: 10px;
}
.must {
  padding: 15px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.must a {
  width: 25%;
  margin-top: 10px;
}
.must a img {
  width: 24px;
  height: 24px;
}
.must a p {
  font-size: 12px;
  color: #222;
}
/* 好货推荐logo */
.logo {
  text-align: center;
  margin: 8px auto;
}
.logo img {
  width: 1.5rem;
  height: 0.4rem;
  vertical-align: middle;
}
.logo span {
  font-size: 14px;
  color: #222;
  font-weight: bold;
  margin: 0 12px;
}

/* 好货推荐 */
.like-content {
  width: 95%;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
}
.like-item {
  width: 49%;
  padding: 0px 5px;
  background-color: white;
  margin-top: 8px;
  padding: 0 0 5px 0;
}
.imgBox {
  width: 100%;
}
.imgBox img {
  width: 100%;
}
.proName {
  width: 100%;
  height: 34px;
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
</style>