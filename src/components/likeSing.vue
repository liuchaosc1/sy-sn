<template>
  <!-- 猜你喜欢页面 -->
  <div id="all">
    <!-- 轮播图上方内容 -->
    <div class="sn-nav-wrapper">
      <!-- 遮罩层 -->
      <div class="hidden-container" :style="'opacity:' + num1">
        <div class="hidden-wrapper">
          <a href="" @click.prevent="toClassf">
            <img
              src="https://image1.suning.cn/uimg/cms/img/157199320847433454.png"
              alt=""
            />
          </a>
          <div class="wrapper-middel-style">
            <a href="https://cuxiao.m.suning.com/scms/ndxdhc.html">
              <input type="text" placeholder="年货礼盒200减210" />
            </a>
          </div>
          <a @click.prevent="toLogin">
            <img
              v-if="login"
              src="https://image2.suning.cn/uimg/cms/img/157199321817918653.png"
              alt=""
            />
            <img
              v-else
              src="https://image1.suning.cn/uimg/cms/img/157199322108277118.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="index-nav">
        <div class="index-nav-tag">
          <img
            src="https://image2.suning.cn/uimg/cms/img/160942088959193711.png"
            alt=""
          />
        </div>
        <div class="type top-type">
          <!-- 最上方广告 -->
          <div class="content-wrap-one">
            <a href="" @click.prevent="toClassf">
              <img
                src="https://image1.suning.cn/uimg/cms/img/157199320847433454.png"
                alt=""
              />
            </a>
            <div class="top-wrapper middel-style">
              <a href="https://cuxiao.m.suning.com/scms/ndxdhc.html">
                <img
                  src="https://image2.suning.cn/uimg/cms/img/161043379076653672.gif"
                  alt=""
                />
              </a>
            </div>
            <a @click.prevent="toLogin">
              <img
                v-if="login"
                src="https://image2.suning.cn/uimg/cms/img/157199321817918653.png"
                alt=""
              />
              <img
                v-else
                src="https://image1.suning.cn/uimg/cms/img/157199322108277118.png"
                alt=""
              />
            </a>
          </div>
          <!-- 搜索框 -->
          <div class="content-wrap-two">
            <div class="search-bar">
              <a
                href="https://m.suning.com/search.html?defaultWord=%E5%B9%B4%E8%B4%A7%E7%A4%BC%E7%9B%92299%E5%87%8F210"
              ></a>
              <i class="searchIcont"></i>
            </div>
            <form>
              <a
                href="https://m.suning.com/search.html?defaultWord=%E5%B9%B4%E8%B4%A7%E8%B1%AA%E7%A4%BC%E7%81%AB%E7%88%86%E9%A2%84%E5%94%AE%E4%B8%AD"
              >
                <input
                  type="text"
                  placeholder="年货礼盒200减210"
                  class="searchInput"
                />
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="index-wrap">
      <!-- 轮播图内容 -->
      <div class="v7-banner">
        <img
          src="https://image1.suning.cn/uimg/cms/img/160942141893352387.png"
          alt=""
        />
        <div class="swiper-wrapper">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="my-swiper">
              <img
                src="//image2.suning.cn/uimg/cms/img/161093566454621578.jpg?format=_is_1242w_610h"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="my-swiper">
              <img
                src="https://image2.suning.cn/uimg/cms/img/161063014071946534.jpg?format=_is_1242w_610h"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="my-swiper">
              <img
                src="https://oss.suning.com/adpp/creative_kit/material/picture/20210108-0fe9725eab1c4f1c9fb54fd03f08791eaa22d7565d9b4354.jpg?format=_is_1242w_610h"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="my-swiper">
              <img
                src="//oss.suning.com/aps/aps_learning/iwogh/2021/01/18/11/iwoghBannerPicture/80b1071e6ea44b93a62b26ae59304506.png?format=_is_1242w_610h"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="my-swiper">
              <img
                src="//oss.suning.com/aps/aps_learning/iwogh/2021/01/18/11/iwoghBannerPicture/dd651b301e354ebdb181031cf594d69f.png?format=_is_1242w_610h"
                alt=""
              />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <!-- 中间图片广告 -->
      <div class="v7-zdy">
        <a
          href="https://cuxiao.m.suning.com/scms/m0622coapp.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fm0622coapp.js%3FpageCode%3Dm0622coapp"
        >
          <img
            src="https://image1.suning.cn/uimg/cms/img/161043680987272694.jpg?from=mobile"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://image2.suning.cn/uimg/cms/img/161043777586941531.jpg?from=mobile"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://image2.suning.cn/uimg/cms/img/161043779656738453.jpg?from=mobile"
            alt=""
          />
        </a>
      </div>
      <!-- 更多频道 -->
      <div class="enter-list">
        <div class="enter-wrapper">
          <a href="">
            <div class="enter-img">
              <img
                src="https://image3.suning.cn/uimg/cms/img/160518006726907674.png?from=mobile"
                alt=""
              />
              <div class="title">苏宁秒杀</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image1.suning.cn/uimg/cms/img/158225094251284751.png?from=mobile"
                alt=""
              />
              <div class="title">苏宁超市</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image1.suning.cn/uimg/cms/img/158225098618947382.png?from=mobile"
                alt=""
              />
              <div class="title">苏宁拼购</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image1.suning.cn/uimg/cms/img/159919108574328432.png?from=mobile"
                alt=""
              />
              <div class="title">手机数码</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image2.suning.cn/uimg/cms/img/158225106790473382.png?from=mobile"
                alt=""
              />
              <div class="title">苏宁家电</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image2.suning.cn/uimg/cms/img/158225110605546246.png?from=mobile"
                alt=""
              />
              <div class="title">免费水果</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image2.suning.cn/uimg/cms/img/158225119197911173.png?from=mobile"
                alt=""
              />
              <div class="title">赚钱消消乐</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image3.suning.cn/uimg/cms/img/158225123358512204.png?from=mobile"
                alt=""
              />
              <div class="title">签到有礼</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image3.suning.cn/uimg/cms/img/158225129991255185.png?from=mobile"
                alt=""
              />
              <div class="title">领劵中心</div>
            </div>
          </a>
          <a href="">
            <div class="enter-img">
              <img
                src="https://image3.suning.cn/uimg/cms/img/158225135374622745.png?from=mobile"
                alt=""
              />
              <div class="title">更多频道</div>
            </div>
          </a>
        </div>
      </div>

      <!-- 新人礼广告 -->
      <div class="newImgFloor">
        <div class="newImgFloor-content">
          <a href="" class="content-item1">
            <img
              src="https://image1.suning.cn/uimg/cms/img/160415964665844208.png"
              alt=""
            />
          </a>
          <a href="" class="content-item">
            <img
              src="https://image3.suning.cn/uimg/cms/img/160415965447533335.gif"
              alt=""
            />
          </a>
          <a href="" class="content-item">
            <img
              src="https://image3.suning.cn/uimg/cms/img/160415966314573447.gif"
              alt=""
            />
          </a>
        </div>
      </div>
      <!-- 秒杀 -->
      <div class="hor-view kw">
        <div class="lazyimg">
          <div class="title-wrapper">
            <div class="title">天天低价</div>
            <div class="count">
              <span class="hour-node">0{{ hour }}</span
              >：<span class="minute-node">{{ minute }}</span
              >：<span class="second-node">{{ second }}</span>
            </div>
          </div>
          <p class="desc">人气好货限时抢</p>
          <div class="shop-items">
            <div class="shop-item-left">
              <img
                src="//image3.suning.cn/uimg/nmps/MBLSPZT/100781396124231474picH_1_370x370.jpg"
                alt=""
              />
              <p class="tag-price">￥29.9</p>
            </div>
            <div class="shop-item-right">
              <img
                src="//image3.suning.cn/uimg/nmps/MBLSPZT/10078080710568628847picH_1_370x370.jpg"
                alt=""
              />
              <p class="tag-price">￥1.1</p>
            </div>
          </div>
        </div>
        <div class="hor-gap"></div>
        <div class="lazyimg img">
          <div class="title-wrapper">
            <div class="title">苏宁秒杀</div>
          </div>
          <p class="desc">品质好货天天秒</p>
          <div class="shop-items">
            <div class="shop-item-left">
              <img
                src="//imgservice.suning.cn/uimg1/b2c/image/T6vpfeqQrWr-K0SHoVL-2w.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="img-desc">想念</p>
            </div>

            <div class="shop-item-right">
              <img
                src="//imgservice.suning.cn/uimg1/b2c/image/W03NnFCWlrhlH0_5FsGiDQ.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="img-desc right">界面</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hor-view kw">
        <div class="lazyimg img">
          <div class="title-wrapper">
            <div class="title">新品首发</div>
          </div>
          <p class="desc">iQ007享24期免息</p>
          <div class="shop-items">
            <div class="shop-item-left">
              <img
                src="https://image3.suning.cn/uimg/cms/img/161033601399897577.png?format=_is_200w_200h.webp"
                alt=""
              />
              <p class="img-desc">大牌上新</p>
            </div>

            <div class="shop-item-right">
              <img
                src="https://image1.suning.cn/uimg/cms/img/161050662557423877.png?format=_is_200w_200h.webp"
                alt=""
              />
              <p class="img-desc right">免费试用</p>
            </div>
          </div>
        </div>
        <div class="hor-gap"></div>
        <div class="lazyimg img">
          <div class="title-wrapper">
            <div class="title">苏宁拼购</div>
          </div>
          <p class="desc">2人拼更实惠 全场包邮</p>
          <div class="shop-items">
            <div class="shop-item-left">
              <img
                src="//image.suning.cn/uimg/b2c/qrqm/0000000000000000010721947155.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="img-desc">2人拼49</p>
            </div>

            <div class="shop-item-right">
              <img
                src="//image.suning.cn/uimg/b2c/qrqm/0000000000000000000126525311.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="img-desc right">2人拼18.5</p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-px"></div>
      <!-- 为您推荐 -->
      <div class="title-four">
        <div class="left-title">
          <a href="">
            <p class="title line-clamp1">为您推荐</p>
            <p class="desc line-clamp1">精选频道</p>
          </a>
        </div>
        <div class="four-space">
          <div class="four-item">
            <a href="" class="click-area">
              <p>苏宁国际</p>
            </a>
            <a href="" class="img-wrapper">
              <img
                src="https://image3.suning.cn/uimg/b2c/qrqm/0070208536000000012009352165_200x200.jpg?format=_is_200w_200h_4e.webp"
                alt=""
                class="pro-img opal"
              />
            </a>
          </div>
        </div>

        <div class="four-space">
          <div class="four-item">
            <a href="" class="click-area">
              <p>苏宁Outlets</p>
            </a>
            <a href="" class="img-wrapper">
              <img
                src="https://image2.suning.cn/uimg/cms/img/157164834630654824.png?from=mobile"
                alt=""
                class="pro-img opal"
              />
            </a>
          </div>
        </div>
        <div class="four-space">
          <div class="four-item">
            <a href="" class="click-area">
              <p>会员抢购</p>
            </a>
            <a href="" class="img-wrapper">
              <img
                src="https://image1.suning.cn/uimg/cms/img/160941888895990187.png?from=mobile"
                alt=""
                class="pro-img opal"
              />
            </a>
          </div>
        </div>
        <div class="four-space">
          <div class="four-item">
            <a href="" class="click-area">
              <p>Super会员</p>
            </a>
            <a href="" class="img-wrapper">
              <img
                src="https://image1.suning.cn/uimg/cms/img/160941866483066340.png?from=mobile"
                alt=""
                class="pro-img opal"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="new-bd">
        <div class="title-image">
          <img
            src="https://image2.suning.cn/uimg/cms/img/157793125530122894.png?from=mobile"
            alt=""
          />
        </div>
        <div class="newbd-list">
          <div class="bd-three">
            <div class="bd-one-item new">
              <img
                class="one"
                src="https://image3.suning.cn/uimg/cms/img/156929156220838915.png?from=mobile"
                alt=""
              />
              <img
                class="two"
                src="//imgservice.suning.cn/uimg1/sniss/improve/3iExSJHl0Xy7u92YiZkG1w.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="three-name">
                <span>人气榜</span>
              </p>
              <p class="three-title">营养滋补榜</p>
              <p class="three-desc">卖爆10.5万件</p>
            </div>
            <div class="bd-one-item swiper">
              <ul :style="'margin-top:' + num + 'rem'" class="tran-top">
                <li>
                  <img
                    class="one"
                    src="https://image2.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile"
                    alt=""
                  />
                  <img
                    class="two"
                    src="//imgservice.suning.cn/uimg1/sniss/improve/vHcS87PoovgCiyD6R1QOXA.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                  <p class="three-name">
                    <span>人气榜</span>
                  </p>
                  <p class="three-title">营养滋补榜</p>
                  <p class="three-desc">卖爆10.5万件</p>
                </li>
                <li>
                  <img
                    class="one"
                    src="https://image2.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile"
                    alt=""
                  />
                  <img
                    class="two"
                    src="//imgservice.suning.cn/uimg1/sniss/improve/vHcS87PoovgCiyD6R1QOXA.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                  <p class="three-name">
                    <span>人气榜</span>
                  </p>
                  <p class="three-title">营养滋补榜</p>
                  <p class="three-desc">卖爆10.5万件</p>
                </li>
                <li>
                  <img
                    class="one"
                    src="https://image2.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile"
                    alt=""
                  />
                  <img
                    class="two"
                    src="//imgservice.suning.cn/uimg1/sniss/improve/vHcS87PoovgCiyD6R1QOXA.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                  <p class="three-name">
                    <span>人气榜</span>
                  </p>
                  <p class="three-title">营养滋补榜</p>
                  <p class="three-desc">卖爆10.5万件</p>
                </li>
              </ul>
            </div>
            <div class="bd-one-item new">
              <img
                class="one"
                src="https://image3.suning.cn/uimg/cms/img/156929156220838915.png?from=mobile"
                alt=""
              />
              <img
                class="two"
                src="//imgservice.suning.cn/uimg1/sniss/improve/73hUAyZI1T2yp6NrMH4ICg.jpg?format=_is_200w_200h_4e.webp"
                alt=""
              />
              <p class="three-name">
                <span>趋势榜</span>
              </p>
              <p class="three-title">高性能洗衣机榜</p>
              <p class="three-desc">本月趋势上升121%</p>
            </div>
          </div>
          <div class="bd-two">
            <!-- 人气热销手机、多功能榨汁机 -->
            <div class="two-hang">
              <div class="two-item bew-bd-item">
                <div class="first-text">
                  <span class="one">人气热销手机榜</span>
                  <span class="two">人气榜</span>
                </div>
                <p>卖爆6.0万件</p>
                <a href="" class="img-wrapper">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/15szoDUyqbuLGQxt-gJ_lA.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
                <a href="" class="img-wrapper right">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/cuU8pRh5fElLgyd7pIhAgw.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
              </div>

              <div class="two-item bew-bd-item">
                <div class="first-text">
                  <span class="one">多功能榨汁榜</span>
                  <span class="two">人气榜</span>
                </div>
                <p>卖爆2521件</p>
                <a href="" class="img-wrapper">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/io0C4jR2Rn5aZRF9T4YLQw.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
                <a href="" class="img-wrapper right">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/TiyzO9vxOT_3P_ZaT4Yycw.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="two-hang">
              <div class="two-item bew-bd-item">
                <div class="first-text">
                  <span class="one">电热水龙头榜</span>
                  <span class="two">趋势榜</span>
                </div>
                <p>本周趋势上升63%</p>
                <a href="" class="img-wrapper">
                  <img
                    src="https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000692790356.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
                <a href="" class="img-wrapper right">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/S-8wAlhC1_U7tWFa8f1zJQ.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
              </div>

              <div class="two-item bew-bd-item">
                <div class="first-text">
                  <span class="one">便携鼻毛修剪器榜</span>
                  <span class="two">人气榜</span>
                </div>
                <p>卖爆8937件</p>
                <a href="" class="img-wrapper">
                  <img
                    src="//imgservice.suning.cn/uimg1/sniss/improve/Uyu6FGBT3Z81PAbWeXzasw.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
                <a href="" class="img-wrapper right">
                  <img
                    src="https://image.suning.cn/uimg/b2c/qrqm/0070145118000000000170132959.jpg?format=_is_200w_200h_4e.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 猜你喜欢商品列表 -->
      <div class="guessUlike">
        <a href="" class="v7-title">
          <img
            src="https://image1.suning.cn/uimg/cms/img/157793128909842388.png?format=_is_1242w_100h.webp"
            alt=""
          />
        </a>
        <div class="pro-list-wrapper">
          <div class="pro-list">
            <div class="left-list">
              <div
                class="kw-wrapper"
                v-for="(item, index) in list"
                :key="index"
                @click="toshopItem(item)"
              >
                <div class="pro-image-wrapper">
                  <img class="pro-img" :src="item.pic" alt="" />
                </div>
                <p class="shangpin-tag">{{ item.title }}</p>
                <div class="pro-price">
                  <div class="real-price">
                    <span class="flag">{{ item.price }}</span>
                    <span class="price-commnets">{{ item.comments }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-list">
              <div
                class="kw-wrapper"
                v-for="(item, index) in list"
                :key="index"
                @click="toshopItem(item)"
              >
                <div class="pro-image-wrapper">
                  <img class="pro-img" :src="item.pic" alt="" />
                </div>
                <p class="shangpin-tag">{{ item.title }}</p>
                <div class="pro-price">
                  <div class="real-price">
                    <span class="flag">{{ item.price }}</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ToLogin" v-show="login" @click="toLogin">
      <img
        src="https://image3.suning.cn/uimg/cms/img/157588645542963955.png"
        alt=""
      />
    </div>
    <a href="#all">
      <div id="top" :style="'opacity:' + num1"></div>
    </a>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Swiper2, { Navigation, Autoplay, Pagination } from "swiper";
Swiper2.use([Navigation, Autoplay, Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      login: this.$store.state.login,
      num: 0,
      hour: 5,
      minute: 20,
      second: 60,

      swiperOption: {
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
        },
      },
      list: [

      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true, //自动轮播
      },

      swiperOptionsVer: {
        loop: true,
        autoplay: true, //自动轮播
        // direction: 'vertical',
        direction: "vertical",
      },
    };
  },
  computed: {
    num1() {
      return this.$store.state.num1;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.num > -11) {
        this.num -= 5.5;
      } else if (this.num <= -11) {
        this.num = 0;
      }
    }, 2500);
    setInterval(() => {
      if (this.second > 0) {
        this.second -= 1;
      } else if (this.second <= 0) {
        this.second = 59;
      }
    }, 1000);
    let that = this;
  },
  created() {
			let url = "http://localhost:8080/json/cainixihuan.json";
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.send();
			let that = this;
			xhr.onload = function(key) {
				that.list = JSON.parse(xhr.response)
				
			};
		

		},
  methods: {
    toshopItem(item) {
      this.$router.push({path:'/shopitem',query:{
					described:item.described,
					detailPage:item.detailPage,
					evaluate:item.evaluate,
					headPhoto:item.headPhoto,
					merchant:item.merchant,
					pic:item.pic,
					price:item.price,
					select:item.select,
					title:item.title,
					type:item.type,
					}})
    },

    toLogin() {
      this.$store.state.componentName = "my-mine";
    },
    toClassf() {
      this.$store.state.componentName = "my-class";
    },
  },
};
</script>
<style scoped>
/* 跳转 */
#top {
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 3.7rem;
  right: 0.3rem;
  border-radius: 50%;
  background-image: url("https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/top.png");
  background-size: 2rem 2rem;
}
.sn-nav-wrapper {
  width: 100%;
  overflow: hidden;
}
.index-wrap {
  width: 100%;
  overflow: hidden;
}
/* 去登录 */
.ToLogin {
  height: 1.8rem;
  width: 100%;
  position: fixed;
  bottom: 2rem;
}
.ToLogin > img {
  height: 2rem;
  width: 100%;
}
.hidden-container {
  width: 100%;
  height: 1.76rem;
  background: #ffdb47;

  position: fixed;
  z-index: 222;
}
.hidden-wrapper {
  width: 95%;
  height: 1.76rem;
  margin: 0 auto;
  display: -webkit-flex;
  justify-content: space-between;
}
.hidden-wrapper img {
  width: 0.72rem;
  height: 1.2rem;
}
.wrapper-middel-style input {
  border: none;
  border-radius: 0.6rem;
  padding: 0.06rem 0.4rem 0 1.3rem;
  width: 90%;
  height: 1.28rem;
  line-height: 1.28rem;
  background: #fff;
  font-size: 0.56rem;
  color: #999999;
}
/* 商品列表 */
.price-commnets {
  color: #999999;
  margin-left: 0.26rem;
  font-weight: normal;
  font-size: 0.4rem;
}
.real-price > .flag {
  line-height: 0.56rem;
}
.real-price {
  display: flex;
  height: 0.76rem;
  font-size: 0.48rem;
  color: #ff4422;
  font-weight: bold;
  align-items: flex-end;
}
.pro-price {
  height: 0.76rem;
  margin-left: 0.24rem;
  line-height: 0.76rem;
}
.shangpin-tag {
  margin: 0.36rem auto 0;
  width: 6.36rem;
  height: 1.34rem;
  font-size: 0.52rem;
  line-height: 0.68rem;
  font-weight: bold;
  overflow: hidden;
}
.pro-img {
  width: 100%;
  height: 6.84rem;
  border-radius: 0.24rem 0.24rem 0 0;
}
.pro-image-wrapper {
  position: relative;
  width: 100%;
  height: 6.84rem;
}
.kw-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 95%;
  overflow: hidden;
  border-radius: 0.24rem;
  margin-bottom: 0.36rem;
  background-color: #fff;
}
.right-list {
  width: 50%;
}
.left-list {
  width: 50%;
}
.pro-list {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.v7-title > img {
  height: 1.2rem;
}
.v7-title {
  display: block;
  width: 94%;
  height: 1.2rem;
  margin: 0 auto;
}
.guessUlike {
  width: 100%;
}
.two-item > .img-wrapper.right {
  left: 3.72rem;
}
.two-item > .img-wrapper > img {
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  background: none;
}
.two-item > .img-wrapper {
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  top: 1.86rem;
  left: 0.48rem;
  overflow: hidden;
}
.two-item > p {
  display: block;
  width: 6.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.48rem;
  margin-top: 0.12rem;
  color: #999;
}
.first-text > .two {
  position: relative;
  top: 0.02rem;
  display: block;
  background: #f9f5ee;
  border-radius: 0.56rem;
  height: 0.56rem;
  line-height: 0.56rem;
  font-size: 0.44rem;
  color: #ab813a;
  margin-left: 0.24rem;
  padding: 0 0.24rem;
}
.first-text > .one {
  display: block;
  max-width: 4.2rem;
  height: 0.64rem;
  line-height: 0.64rem;
  font-size: 0.52rem;
  font-weight: bold;
}
.first-text {
  display: flex;
  height: 0.64rem;
}
.two-item {
  position: relative;
  box-sizing: border-box;
  width: 50%;
  height: 4.8rem;
  background: #fff;
  overflow: hidden;
  padding: 0.42rem 0 0.32rem 0.36rem;
}
.two-hang {
  display: flex;
  width: 94%;
  margin: 0 auto;
}
.tran-top {
  transition: margin-top 0.5s linear 0s;
}
/* 滚动广告 */

.bd-one-item.swiper {
  width: 4.52rem;
  height: 5.32rem;
  background: #fff;
  overflow: hidden;
}
.three-desc {
  position: relative;
  width: 4rem;
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.44rem;
  margin: 0 auto;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  overflow: hidden;
}
.three-title {
  position: relative;
  width: 4.4rem;
  height: 0.64rem;
  font-size: 0.52rem;
  line-height: 0.64rem;
  margin: 0.62rem auto 0.06rem;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
}
.three-name > span {
  display: block;
  height: 0.68rem;
  font-size: 0.44rem;
  line-height: 0.6rem;
  background: #fff;
  color: #d9a87a;
  border: 0.04rem solid #d9a87a;
  border-radius: 0.34rem;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
}
.three-name {
  position: absolute;
  width: 100%;
  height: 0.68rem;
  top: 3rem;
  left: 0;
  display: flex;
  justify-content: space-between;
}
.bd-one-item > .two {
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  margin: 0.3rem auto 0;
}
.bd-one-item > .one {
  position: absolute;
  width: 4.52rem;
  height: 1.86rem;
  left: 0;
  bottom: 0;
  border-radius: 0 0 0.24rem 0.24rem;
}
.bd-one-item li > .one {
  position: absolute;
  width: 4.52rem;
  height: 1.86rem;
  left: 0;
  bottom: 0.4rem;
  border-radius: 0 0 0.24rem 0.24rem;
}
.bd-one-item li > .two {
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  margin: 0.3rem auto 0;
}
.bd-one-item li {
  position: relative;
  width: 4.52rem;
  height: 5.32rem;
  border-radius: 0.24rem;
  background: #fff;
  list-style: none;
}
.bd-one-item.new {
  position: relative;
  width: 4.52rem;
  height: 5.32rem;
  border-radius: 0.24rem;
  background: #fff;
}
.bd-three {
  width: 94%;
  margin: 0 auto 0.26rem;
  display: flex;
  justify-content: space-between;
}
/* 推荐榜单 */
.new-bd > .title-image {
  width: 94%;
  height: 1.2rem;
  margin: 0 auto;
}
.new-bd img {
  display: block;
  width: 100%;
  height: 100%;
}
/* 为您推荐四个商品 */
.img-wrapper > img {
  width: 2rem;
  height: 2rem;
}

.img-wrapper {
  position: absolute;
  display: block;
  width: 2rem;
  height: 2rem;
  top: 0.36rem;
  left: 0.2rem;
}
.click-area > p {
  position: absolute;
  top: 2.48rem;
  left: 0;
  width: 2.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.44rem;
  text-align: center;
  color: #333;
  overflow: hidden;
}
.click-area {
  display: block;
  width: 100%;
  height: 100%;
}
.four-item {
  position: relative;
  box-sizing: border-box;
  width: 2.4rem;
  height: 3.44rem;
}
.four-space {
  display: flex;
  width: 10.16rem;
  height: 3.44rem;
  justify-content: space-between;
}

/* 为您推荐上面的线 */
.space-px {
  width: 94%;
  height: 1px;
  margin: 0 auto;
  background: #f2f2f2;
}
/* 为您推荐 */
a {
  text-decoration: none;
}
.title-four {
  display: flex;
  width: 94%;
  height: 3.44rem;
  background: #fff;
  overflow: hidden;
  margin: 0 auto;
}
.left-title {
  width: 3.46rem;
  height: 3.44rem;
  padding: 0.94rem 0.36rem 0 0.36rem;
}
.left-title p.title {
  width: 2.74rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.64rem;
  color: #444;
  font-weight: bold;
}
.left-title p.desc {
  width: 2.74rem;
  height: 0.64rem;
  line-height: 0.64rem;
  font-size: 0.48rem;
  color: #999;
}
/* 苏宁秒杀 */
.lazyimg.img {
  position: relative;
}
.img-desc {
  position: absolute;
  bottom: -0.3rem;
  left: 0.2rem;
  background-size: 3rem 1.08rem;
  width: 3rem;
  height: 1.08rem;
  padding-top: 0.44rem;
  line-height: 0.64rem;
  overflow: hidden;
  font-size: 0.4rem;
  text-align: center;
  background-image: url(../images/img-desc.png);
}
.img-desc.right {
  bottom: -0.3rem;
  left: 3.7rem;
}
.hor-gap {
  width: 1px;
  height: 100%;
  line-height: 0;
  background: #f2f2f2;
}

.index-nav {
  position: relative;
  width: 100%;
  height: 3.6rem;
}
.index-nav-tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.6rem;
}
.index-nav-tag img {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 132.2rem;
}
.type.top-type {
  position: relative;
  width: 100%;
}
.content-wrap-one {
  width: 90%;
  height: 1.76rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.content-wrap-one img {
  width: 0.72rem;
  height: 1.2rem;
}
.top-wrapper.middel-style {
  display: flex;
  height: 1.76rem;
  align-items: center;
}
.middel-style img {
  width: 7.8rem;
  height: 1.52rem;
}
.content-wrap-two {
  width: 100%;
  height: 1.84rem;
  box-sizing: border-box;
  padding: 0 0.48rem;
}
/* 搜索 */
.search-bar {
  position: relative;
}
.searchInput {
  border: none;
  border-radius: 0.6rem;
  padding: 0.06rem 0.4rem 0 1.3rem;
  width: 90%;
  height: 1.28rem;
  line-height: 1.28rem;
  background: #fff;
  font-size: 0.56rem;
  color: #999999;
}
.searchIcont {
  position: absolute;
  width: 0.72rem;
  height: 0.72rem;
  top: 0.45rem;
  left: 0.4rem;
  background-image: url(../images/searchI.png);
  background-size: 0.72rem 0.72rem;
}
/* 轮播图 */
.index-wrap {
  position: relative;
}
.v7-banner {
  height: 4.58rem;
}
.v7-banner > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.58rem;
}
.swiper-wrapper {
  width: 95%;
  height: 5.2rem;
  top: 0;
  left: 4.5%;
}
.my-swiper {
  width: 100%;
  height: 100%;
}

.my-swiper img {
  width: 95%;
  height: 100%;
  border-radius: 5%;
}
.v7-zdy {
  width: 100%;
  height: 5.615rem;
  margin-top: 20px;
}
.v7-zdy img {
  width: 33.33%;
}
.enter-list {
  width: 100%;
  height: 6.4rem;
  margin-top: 20px;
}
.enter-wrapper {
  width: 100%;
  height: 6.4rem;
}
.enter-wrapper > a {
  width: 20%;
  float: left;
  height: 50%;
  text-decoration: none;
  /* text-align: center; */
}
.enter-img {
  width: 1.68rem;
  height: 1.68rem;
  margin: 0.48rem auto 0;
}
.enter-img > img {
  width: 1.68rem;
  height: 1.68rem;
}
.enter-img > .title {
  line-height: 0.56rem;
  width: 3rem;
  height: 0.56rem;
  font-size: 0.44rem;
  margin-top: 0.1rem;
  color: #666;
}
.newImgFloor {
  width: 100%;
  height: 4.68rem;
  margin-top: 1rem;
}

.content-item1 > img {
  width: 50%;
  height: 4.68rem;
}

.content-item > img {
  width: 25%;
  height: 4.68rem;
}
.hor-view.kw {
  width: 94%;
  height: 5.16rem;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: row;
}
.lazyimg {
  width: 50%;
  height: 5.16rem;
  overflow: hidden;
}
.title-wrapper {
  width: 7rem;
  height: 1.16rem;
  justify-content: start;
  align-items: flex-end;
}
.title-wrapper > .title {
  font-weight: 700;
  font-size: 0.56rem;
  width: 40%;
  height: 0.8rem;
  margin: 0.36rem 0.16rem 0 0.48rem;
  color: #333;
  display: inline-block;
}
.count {
  height: 0.8rem;
  font-size: 0.05rem;
  display: inline-block;
}
.count > span {
  height: 0.68rem;
  width: 0.68rem;
  border-radius: 30%;
  background-color: #ffcc00;
}
.desc {
  font-size: 0.48rem;
  color: #999;
  margin: 0.08rem 0 0 0.48rem;
  width: 6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.08rem;
}
.shop-items {
  width: 7rem;
  padding-left: 0.56rem;
  margin: 0.1rem 0 0 0;
}
.shop-item-left {
  margin-right: 1.1rem;
  display: inline-block;
}
.shop-item-right {
  width: 2.4rem;
  display: inline-block;
}
.shop-item-left > img {
  width: 2.4rem;
  height: 2.4rem;
}
.shop-item-right > img {
  width: 2.4rem;
  height: 2.4rem;
}
.tag-price {
  text-align: center;
  color: #f50;
  font-size: 0.44rem;
  line-height: 0.56rem;
  height: 0.56rem;
  margin-top: 0.02rem;
}
</style>