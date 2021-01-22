<template>
    <div class="shezhi" >
        
         <div class="sn-nav">
            <div class="sn-nav-toback iconfont" @click="toback">&#xe64c;</div>
            <div class="sn-nav-title">账户设置</div>
            <div class="sn-nav-right">
                <div class="img"></div>
            </div>
        </div>

        <div class="personMsg">
            <div class="btncontent">
                <img src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_01_240x240.jpg" alt="">
                <p>987*****321</p>
               
            </div>
        </div>
        <div class="personMsg hy ai">
            <div class="btncontent">
               <p>会员码</p>
            </div>
        </div>
        <div class="personMsg ai">
            <div class="btncontent">
               <p>我的信息</p>
            </div>
        </div>
        <div class="personMsg ai">
            <div class="btncontent">
               <p>地址管理</p>
            </div>
        </div>
         <div class="personMsg hy ai">
            <div class="btncontent">
               <p>账户安全</p>
            </div>
        </div>
        <div class="personMsg ai">
            <div class="btncontent">
               <p>增票资质</p>
            </div>
        </div>
        <div class="personMsg ai">
            <div class="btncontent">
               <p>关联账号</p>
            </div>
        </div>
        <div class="out-btn" @click="outTo">退出登录</div>
        <div class="bach" :style="'display:'+tuichu">
            <div class="tuichu" >
                <div class="alert-msg">是否退出当前登录</div>
                <div class="alert-btn">
                    <a class="cancel" @click="show">取消</a>
                    <a class="confirm" @click="out">确认</a>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            tuichu:"none"
        }
    },
    
    methods:{
    toback(){
        this.$router.go(-1)
    },
    outTo(){
        this.tuichu="block"
    },
    show(){
        this.tuichu="none"
    },
    out(){
         this.$router.go(-1)
      this.$store.state.componentName= "my-like"
         this.$store.state.login = true;
        this.$store.state.loginIn=false
    }
    }
}
</script>
<style scoped>
.bach{
    position: absolute;
    width: 414px;
    height: 800px;
    background:rgba(0, 0, 0, 0.3);
    top:0
}
.cancel{
    flex: 1;
    height: 1.68rem;
    line-height: 1.68rem;
    text-align: center;
}
.confirm{
   flex: 1;
    border-left: 1px solid #DCDCDC;
    color: #EDA200;
    height: 1.68rem;
    line-height: 1.68rem;
    text-align: center;
}
.alert-btn{
    display: flex;
     border-top: 1px solid #DCDCDC;
}
.alert-msg{
    padding: 0.4rem 0.6rem 0.6rem;
    text-align: center;
    line-height: 1.8;
    word-break: break-all;
}
.tuichu{
    position:absolute;
    width: 364px;
       left: 25px;
    top: 290px;
    border-radius: 0.2rem;
    background: #FFF;
    z-index: 100;
    font-size: 0.6rem;
}
.out-btn{
    width: 13.8rem;
    height: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    color: #fff;
    font-size: .6rem;
    background: #f60;
    margin: 1.2rem auto .8rem;
    border-radius: .16rem;
    z-index: 100000;
}
.hy{
 margin-top: 10px;
}
.personMsg.ai{
   border-bottom: 1px solid #f7f7f7;
    height: 1.8rem;
}
.btncontent>p{
    flex: 1;
    font-size: .56rem;
}
.btncontent img{
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border: 0;
    border-radius: .9rem;
    margin-right: .4rem;
}
.btncontent{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding-right: .5rem;
}
.personMsg{
    width: 100%;
    background: #fff;
    padding-left: .5rem;
    height: 2.8rem;
}
.shezhi{
    width: 100%;
  
}

/* 顶部标签 */
.sn-nav{
    position: relative;
    height: 1.76rem;
    line-height: 1.76rem;
    background:#fff;
    width: 100%;
    font-size: 0.6rem;
    border-bottom: 1px solid #f7f7f7;
}
.sn-nav-toback{
    position: absolute;
    top: .18rem;
    left: .5rem;
    width: 1.4rem;
   background-size: contain;
    height: 1.4rem;
}
.sn-nav-right>.img{
    position: absolute;
    top: 0;
    right: 0;
    width: 1.74rem;
    height: 1.76rem;
    background: url("data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcTQ8RDQ8RDQ8RDQ8RDQ8RDQ8RDQ8RAEPSCIAAAAHdFJOUwD2cEy/EYW+tvqEAAAAb0lEQVRIDe2ROw7AMAhDwy/c/8ZVOgCVKuhayUyRsSF5WQsFAiAAAl8JiBKpPN29tv2uXTO9Jk5sxuRlz6Cp85nPrrlm0MjteM0pI4M2tGNO8Q2XiEjxDU+NSPX1QCOyqq//tsy8+bKLEwiAwK8IXL+VA7VJ24A2AAAAAElFTkSuQmCC");
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
    
    text-align: center;
}

</style>