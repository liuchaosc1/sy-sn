<template>
	<div class="shoppingCar" ref="shopcar">
		<div class="main">
			<div class="topAndAdress">
				<p>
					<span>购物车</span>
					<span class="iconfont">&#58927;</span>
					<span>吴中区</span>
				</p>
				<div class="bianji" @click="bianji1()" v-if="this.$store.state.shopcarlist.length != 0">
					<span v-if="bianji == false">编辑</span>
					<span v-if="bianji == true">完成</span>
				</div>
			</div>
			<div class="content">
				<div class="not-log-in" >
					<div class="logBox" v-show="login">
						<span>登录后同步电脑与手机购物车的商品</span>
						<div @click="btn()"><span>去登录</span></div>
					</div>
					<div v-if="this.$store.state.shopcarlist.length == 0" v-show="login">
						<div class="log-photo">
							<img src="../../public/shoppingCar/sn-cart-empty.png" />
						</div>
						<p>购物车还是空的，快来挑选好货吧</p>
						<button @click="quguangg()">去逛逛</button>
					</div>
					<div class="carList" v-for="(item, index) in a" :key="index">
						<div class="type">
							<div>
								<div>
									<input type="checkbox" :checked="item[item.length-1]" @click="shop_checked(item,index)" />
								</div>
								<img src="../../public/shoppingCar/9f2b8f76dc248e980810bed46d286e73.png" alt="" />
								<span>{{item[0].merchant}}</span>
							</div>
							<span v-if="item[0].merchant == '苏宁自营'">以免运费</span>
						</div>
						<div class="carMain" v-for="(item1, index1) in item" :key="index1">
							<div v-if="item1%1 != 0">
								<div><input type="checkbox" :checked="item1.com_flag" @click="com_checked(item1)" /></div>
								<div>
									<div @click="goto(item1)">
										<img :src="item1.pic" alt="" />
									</div>
									<div class="more">
										<p>{{ item1.title }}</p>
										<p class="poo" @click="www(item1)">{{item1.selectName}}</p>
										<div class="theprice">
											<p>
												<span>￥</span><span>{{item1.selectPrice}}</span>
											</p>
											<div class="quantity">
												<div @click="add(item1)">
													<img src="../../public/shoppingCar/jia-black.png" alt="" />
												</div>
												<input type="text" v-model="item1.count" @blur="shuru(item1)" />
												<div @click="sub(item1)" v-if="item1.count != 1">
													<img src="../../public/shoppingCar/jian-black.png" alt="" />
												</div>
												<div v-if="item1.count == 1">
													<img src="../../public/shoppingCar/jian-gary.png" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- -------------------------------------------- -->

						<!-- --------------------------------------------------- -->
					</div>
					<!-- ---------------------------------------------------------------------------- -->

					<!-- --------------------------------------------------------------------------------- -->
				</div>

				<!-- ----------------------------------------------------------------------------------------- -->
				<div class="special-offer" v-show="loginIn" v-if="this.$store.state.shopcarlist.length == 0">
					<div class="thisTop">
						<img src="../../public/shoppingCar/empty-coupon-title.png" alt="" />
					</div>
					<div class="theMain">
						<div>
							<img src="../../public/shoppingCar/coupon-bg.png" />
							<div class="bottomBox">
								<div>
									<div>
										<img src="../../public/shoppingCar/2lHYg2DX39Ff7S68ctEkJA.jpg" alt="" />
									</div>
									<div>
										<img src="../../public/shoppingCar/8AXbWZDmqJrU8hnwD0yUMg.jpg" alt="" />
									</div>
									<div>
										<img src="../../public/shoppingCar/N1EHIE1tkpYJRyNH7mDxaw.jpg" alt="" />
									</div>
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
										<p>
											<span>2020.12.28</span><span>~</span><span>2021.01.31</span>
										</p>
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
						<button @click="quguangg()">去逛逛</button>
					</div>
				</div>

				<div class="product-list">
					<div class="thisTop">
						<img src="../../public/shoppingCar/cnxh-title.png" alt="" />
					</div>
					<div class="product-list-main">
						<div class="product" v-for="(item1, index) in likeList" :key="index">
							<div class="pic"><img :src="item1.pic" alt="" @click="goRegister(item1)" /></div>
							<div class="text">
								<p>{{item1.title}}</p>
							</div>
							<div class="state">
								<div><img :src="item1.type" alt="" /></div>
								<!-- <div><img src="../../public/shoppingCar/miaosha.png" alt=""></div> -->
							</div>
							<div class="price">
								<p>
									<span>￥</span><span>{{ Math.floor(item1.price - 0) }}</span><span>.{{
                      Math.round(
                        (item1.price - Math.floor(item1.price - 0)) * 100
                      )
                    }}</span>
								</p>
								<div @click="add(item1)">
									<img src="../../public/shoppingCar/cart.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="thisTop">
					<img src="../../public/shoppingCar/reach-bottom.png" alt="" />
				</div>
			</div>
		</div>

		<div class="calculate" v-if="this.$store.state.shopcarlist.length != 0 ">
			<div>
				<input type="checkbox" :checked="all_flag" @click="all_checked()" />
				<span>全部</span>
			</div>
			<div>
				<span v-show="!bianji">合计</span>
				<div class="heji" v-show="!bianji">
					<p><span>￥</span><span>{{totalPrice}}</span></p>
					<div><span>免运费</span></div>
				</div>
				<div class="jiesuan" v-show="!bianji">
					<span>去结算</span>
					<span>({{gross}})</span>
				</div>
				<div class="jiesuan" v-show="bianji" style="padding-left: 20px;padding-right: 20px;" @click="del1">
					<span>删除</span>

				</div>
			</div>

		</div>
		<div class="tishi" v-show="show">
			<div class="tishi2">
				<span>您还没有选择商品</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		created() {
			let url = "http://localhost:8080/json/cainixihuan.json";
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.send();
			let that = this;
			xhr.onload = function(key) {
				that.likeList = JSON.parse(xhr.response);
				that.fenlei()
				that.jiancha()
				
			};
			// this.total()
			that.jisuan()
			this.$emit("my-add",this.gross)

		},
		mounted() {
			this.jiancha()
		},
		data() {
			return {
				likeList: [],
				totalPrice: 0,
				gross: 0,
				a: [],
				all_flag: 1,
				bianji: false,
				show:0,
				shuoming:'',
				num3:1
			};
		},
		computed: {
			login() {
				return this.$store.state.login;
			},
			loginIn() {
				return this.$store.state.loginIn;
			},
		},
		methods: {
			btn() {
				this.$store.state.componentName = "my-mine";
				console.log(this.componentName);
			},
			quguangg(){
				this.$store.state.componentName = "my-like";
			},
			//接收调用者传来的id
			add(item1) {
				let that = this
				// console.log(typeof(item1.selectName) == 'string');
				if (typeof(item1.selectName) != 'string') {
				let index = that.panduan(item1.select[0].mian[0].name);
					// console.log('111');
				// console.log(index);
					if (index > -1) {
					//就让这个元素的（个数）count值++
					this.$store.state.shopcarlist[index].count++;

				} else {

					that.$store.commit({
						type: "add",
						amount: item1,
						selectName:item1.select[0].mian[0].name,
						selectPrice:item1.select[0].mian[0].price,
						count:(this.num3-0)
					});
					
					this.fenlei()
					this.www(item1)
				}

				} else if (typeof(item1.selectName) == 'string') {
					let index = that.panduan(item1.selectName);
					// console.log('221');
					// console.log(index);
				if (index > -1) {
					//就让这个元素的（个数）count值++
					this.$store.state.shopcarlist[index].count++;
					// console.log(this.$store.state.shopcarlist[index]);
					

				} else {

					that.$store.commit({
						type: "add",
						amount: item1,
						selectName:item1.select[0].mian[0].name,
						selectPrice:item1.select[0].mian[0].price,
						count:(this.num3-0)
					});
					
					this.fenlei()
					this.www(item1)
				}
				}
				

				// 
				this.jiancha()
				that.jisuan()
				this.$emit("my-add",this.gross)
			},
			sub(item) {
				// console.log(item);
				let that = this
				let index = this.panduan(item.selectName);
				// console.log(item);
				if (this.$store.state.shopcarlist[index].count > 1) {
					this.$store.state.shopcarlist[index].count--;
					// this.total();
					that.jisuan()
					this.$emit("my-add",this.gross)
				}
				
			},

			panduan(item) {
				//遍历shopList中的所有对象++
				let that = this
					

				for (let i = 0; i < this.$store.state.shopcarlist.length; i++) {
					if (that.$store.state.shopcarlist[i].selectName == item ){
						//返回这个对象的索引
						return i;
						// console.log(i);
					}
				}
				//如果没有则返回-1
				return -1;
			},
			fenlei() {
				let that = this;
				let b = [];
				for (let i = 0; i < that.$store.state.shopcarlist.length; i++) {
					var flag = true;
					for (let j = 0; j < b.length; j++) {
						if (that.$store.state.shopcarlist[i].merchant == b[j].merchant) {
							flag = false;
							break
						};
					};
					if (flag) {
						b.push(that.$store.state.shopcarlist[i])
					};
				};
				that.a = [];
				for (let i = 0; i < b.length; i++) {
					let c = [];
					for (let k = 0; k < that.$store.state.shopcarlist.length; k++) {
						if (b[i].merchant == that.$store.state.shopcarlist[k].merchant) {
							c.push(that.$store.state.shopcarlist[k])
						}
					}
					c.push(1)
					that.a.push(c);
				}
				// console.log(this.a)
			},
			shuru(item) {
				let that = this
				let index = this.panduan(item.selectName);
				// console.log(this.$store.state.shopcarlist);
				// console.log(item);
				let c = this.$store.state.shopcarlist[index].count;
				c = parseInt(c)
				if (c < 1) {
					c = 1;
				}
				if (c % 1 != 0) {
					c = parseInt(c);
					if (parseInt(c) % 1 != 0) {
						c = 1;
						c = c / 1;
					}
				}
				this.$store.state.shopcarlist[index].count = c;
				// this.total();
				that.jisuan()
			},
			com_checked(item) {
				// console.log(item.selectName);
				let index = this.panduan(item.selectName);
				this.$store.state.shopcarlist[index].com_flag--;
				if (this.$store.state.shopcarlist[index].com_flag < 0) {
					this.$store.state.shopcarlist[index].com_flag = 1
				}
				let that = this;
			
				this.jiancha()
				this.jisuan()
				this.shop_checked(item)
			},
			shop_checked(item, index) {
				// console.log(item);
				// console.log(index);
				let that = this;
				item[item.length - 1]--;
				if (item[item.length - 1] < 0) {
					item[item.length - 1] = 1
				}
				// console.log(this.a[index][this.a[index].length-1]);
				for (let i = 0; i < item.length - 1; i++) {
					if (item[item.length - 1] == 0) {
						item[i].com_flag = 0;
					} else if (item[item.length - 1] == 1) {
						item[i].com_flag = 1;
					}

				}
				let a = 0;
				for (let j = 0; j < that.a.length; j++) {
					// console.log(that.a[j][that.a[j].length-1]);
					a += that.a[j][that.a[j].length - 1]

				}
				if (a == that.a.length) {
					this.all_flag = 1
				} else if (a < that.a.length) {
					this.all_flag = 0

				}
				this.jisuan()
				
			},
			all_checked() {
				this.all_flag--
				let that = this;
				if (this.all_flag < 0) {
					that.all_flag = 1;
				}
				for (let j = 0; j < that.a.length; j++) {

					for (let i = 0; i < that.a[j].length - 1; i++) {
						// console.log(that.a[j][i]);
						if (that.all_flag == 0) {
							that.a[j][that.a[j].length - 1] = 0
							that.a[j][i].com_flag = 0
						} else if (that.all_flag == 1) {
							that.a[j][that.a[j].length - 1] = 1
							that.a[j][i].com_flag = 1
						}

					}
				}
				this.jisuan()
			},
			bianji1() {
				this.bianji = !this.bianji
				// console.log(this.bianji);
			},
			del() {
				let that = this

				for (let i = 0; i < this.$store.state.shopcarlist.length; i++) {

					if (that.$store.state.shopcarlist[i].com_flag == 1) {
						// console.log(that.$store.state.shopcarlist[i]);
						that.$store.state.shopcarlist.splice(i, 1)
						i = i - 1

					}
					
				}
				
				this.fenlei()
				this.jiancha()
				this.jisuan()
				this.$emit("my-add",this.gross)
			},
			jiancha() {
				let that = this
				for (let i = 0; i < this.a.length; i++) {
					let a = 0
					for (let j = 0; j < that.a[i].length - 1; j++) {
						a = a + that.a[i][j].com_flag
					}
					if (a == that.a[i].length - 1) {
						that.a[i][that.a[i].length - 1] = 1
					} else {
						that.a[i][that.a[i].length - 1] = 0
					}
				}
				
			},
			del1() {

				let that = this
				let a = 0
				for (let i = 0; i < this.$store.state.shopcarlist.length; i++) {
					a = a + that.$store.state.shopcarlist[i].com_flag;


				}
				// console.log(a);
				if (a != 0) {
					this.$emit("my-del")

				} else if (a == 0) {
					this.show = 1
					setTimeout(() => {
						this.show = 0
					}, 1500);
					
				}
				this.jisuan()
			},
			jisuan(){
				let that = this;
				let a = 0;
				let b = 0;
				for (let i = 0; i < this.$store.state.shopcarlist.length; i++) {
					a = a + that.$store.state.shopcarlist[i].count*that.$store.state.shopcarlist[i].com_flag
					// console.log(that.$store.state.shopcarlist.count);
					b = b + that.$store.state.shopcarlist[i].count*that.$store.state.shopcarlist[i].selectPrice*that.$store.state.shopcarlist[i].com_flag
				}
				this.gross = a;
				this.totalPrice = b.toFixed(2)
				this.$emit("my-add",this.gross)

			},
			goRegister(item){
				// console.log(item);
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
					selectName:item.select[0].mian[0].name,
					selectPrice:item.select[0].mian[0].price

					}})
			},
			www(item1){
			// console.log(item1.select[0].mian[0].name);
			this.shuoming = item1.select[0].mian[0].name
			// console.log(this.$store.state.shopcarlist);
			// console.log(this.shuoming);
		},
		puanduan2(item){
			// this.goRegister(item)
			// console.log(this.likeList);
			let that = this
			for (let i = 0; i < this.likeList.length; i++) {
					if (that.likeList[i].title == item ){
						//返回这个对象的索引
						return i;
						// console.log(i);
					}
					
				}
			return -1;
		},
		goto(item){
			let index = this.puanduan2(item.title);
			// console.log(this.likeList[index]);
			this.goRegister(this.likeList[index])
		}
		},
		
	};
</script>


<style scoped>
.poo{
	word-break: normal;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	font-size: 0.05rem;
	color: rgb(109, 131, 109);
	text-overflow: ellipsis;
	height: 13px;
	line-height: 13px;
	width: 60%;
	overflow-x: hidden;
}
	.shoppingCar {
		height: 100%;
		position: relative;
	}

	.main {
		display: flex;
		flex-direction: column;
	}

	.topAndAdress {
		height: 42px;
		/* background-color: goldenrod; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: #e7e4e4 1px solid;
		background-color: white;
		position: relative;
	}

	.bianji {
		position: absolute;
		height: 100%;
		/* background-color: red; */
		/* width: 20px; */
		right: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .56rem;
		color: #37f;
	}

	.topAndAdress>p {
		font-size: 0.67rem;
		line-height: 42px;
	}

	.topAndAdress>p>span:first-child {
		margin-right: 5px;
	}

	.topAndAdress>p>span:nth-child(2) {
		font-size: 0.5rem;
		color: #fc0;
	}

	.topAndAdress>p>span:last-child {
		font-size: 0.58rem;
	}

	.content {
		background-color: #f5f5f9;
		flex-grow: 1;
		/* height: 50%; */
	}

	.special-offer {
		display: flex;
		flex-direction: column;
		/* justify-content: flex-end; */
		align-items: center;
		padding: 10px;
	}

	.thisTop {
		width: 100%;
		/* height: 22px; */
		/* background-color: #fc0; */
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin-bottom: 10px;
	}

	.thisTop>img {
		/* margin: 0 auto; */
		width: 50%;
		/* height: 80%; */
	}

	.theMain {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #0077AA; */
	}

	.theMain>div {
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

	.theMain>div>img {
		width: 100%;
		z-index: 2;
	}

	.content-left {
		width: 29%;
		/* background-color: #fc0; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #f42;
		font-size: 100%;
	}

	.content-left>p:first-child {
		margin-bottom: 3px;
	}

	.content-left>p:first-child>span:nth-child(1) {
		font-size: 0.7rem;
		/* margin-bottom: 10px; */
	}

	.content-left>p:first-child>span:nth-child(2) {
		font-size: 0.86rem;
	}

	.content-left>p:nth-child(2) {
		font-size: 0.52rem;
		margin-bottom: 3px;
	}

	.content-right {
		width: 71%;
		/* background-color: blue; */
		/* height: 50px; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	.theMain>div>div {
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		/* z-index: 2; */

		/* background-color: brown; */
	}

	.content-right-main {
		width: 72%;
		height: 100%;
		/* background-color: red; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.content-right-main-button {
		width: 26%;
		height: 35%;
		background-color: #fc0;
		border-radius: 4px;
		font-size: 0.43rem;
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-left: ; */
	}

	.content-right-main>p {
		font-size: 0.4rem;
	}

	.content-right-main>p:first-child>span:first-child {
		color: red;
	}

	.content-right-main>p:nth-child(2) {
		margin-left: 5px;
		margin-bottom: 8px;
	}

	.content-right-main>p:nth-child(3) {
		margin-left: 3px;
		color: #999;
	}

	.bottomBox {
		/* width: 100%;
        height: 100%;
        position: absolute; */
		top: 85%;
		background-color: #f9ece7;
		z-index: 1;
	}

	.quan {
		z-index: 3;
	}

	.bottomBox>div {
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.bottomBox>div>div {
		width: 17%;
		height: 57%;
		/* background-color: purple; */
		margin-top: 9%;
		margin-right: 3%;
	}

	.bottomBox>div>div>img {
		width: 100%;
		height: 100%;
	}

	.other {
		margin-top: 35%;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 150%;
	}

	.other>p {
		font-size: 0.56rem;
		margin-bottom: 8%;
		color: #666;
	}

	.other>button {
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

	.product-list {
		display: flex;
		flex-direction: column;
		/* justify-content: flex-end; */
		align-items: center;
		padding: 10px;
		margin-top: 28px;
	}

	.product-list-main {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.product {
		width: 49%;
		/* height: 270px; */
		background-color: white;
		margin-bottom: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* margin-top: 20px; */
	}

	.pic {
		width: 80%;
		margin-top: 15px;
		/* height: 100px; */
		/* background-color: green; */
	}

	.pic>img {
		width: 100%;
	}

	.text {
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
		-webkit-box-orient: vertical;
	}

	.state {
		width: 82%;
		display: flex;
		/* margin-top: 5px; */
		align-items: flex-start;
	}

	.state>div {
		margin-right: 5px;
		width: 16%;
	}

	.state>div>img {
		width: 100%;
	}

	.price {
		width: 82%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.price>div>img {
		width: 100%;
	}

	.price>div {
		width: 12%;
	}

	.price>p {
		color: red;
	}

	.price>p>span:nth-child(1) {
		font-size: 0.48rem;
	}

	.price>p>span:nth-child(2) {
		font-size: 0.65rem;
	}

	.price>p>span:nth-child(3) {
		font-size: 0.48rem;
	}

	.not-log-in {
		display: flex;
		flex-direction: column;
		/* justify-content: flex-end; */
		align-items: center;
		padding: 10px;
	}

	.logBox {
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: #ffe37e;
		align-items: center;
		margin-bottom: 15px;
		/* padding-left: 10px;
        padding-right: 10px; */
	}

	.logBox>span {
		font-size: 0.48rem;
		margin-left: 10px;
		line-height: 300%;
	}

	.logBox>div {
		width: 12%;
		height: 24px;
		background-color: black;
		margin-right: 10px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logBox>div>span {
		font-size: 0.12rem;
		color: #ffe37e;
	}

	.log-photo {
		display: flex;
		justify-content: center;
		width: 25%;
		margin-top: 75px;
	}

	.log-photo>img {
		width: 100%;
	}

	.not-log-in>div:nth-child(2) {
		width: 100%;
		display: flex;
		/* justify-content: center; */
		flex-direction: column;
		align-items: center;
	}

	.not-log-in>div:nth-child(2)>p {
		font-size: 0.56rem;
		margin-bottom: 20px;
		margin-top: 20px;
		color: #666;
	}

	.not-log-in>div:nth-child(2)>button {
		color: #666;
		outline: none;
		font-size: 0.4rem;
		border: 1px solid rgb(227, 219, 219);
		width: 15%;
		/* height: 200%; */
		line-height: 200%;
		border-radius: 5px;
	}

	.bottom>.thisTop {
		margin-bottom: 30px;
	}

	.carList {
		display: flex;
		flex-direction: column;
		/* justify-content: flex-end; */
		align-items: center;
		/* padding-right: 10px; */
		/* height: 50px; */
		width: 100%;
		background-color: white;
		margin-bottom: 10px;
	}

	.type {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.type>div>div {
		/* margin-bottom: 3px; */
		margin-right: 1%;
		width: 15px;
		height: 15px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: #175094; */
		/* overflow: hidden; */
	}
	
	input {
		 /* -webkit-appearance：none; */
		border: none;
		outline: none;
		width: 15px;
		height: 15px;
	}

	.type>div>img {
		width: 25px;
	}

	.type>div {
		display: flex;
		align-items: center;
		margin-left: 5px;
		justify-content: flex-start;
		/* width: 20%; */
		flex-grow: 1;
	}

	.type>div>span {
		font-size: 0.48rem;
		line-height: 40px;
	}

	.type>span {
		font-size: 0.48rem;
		margin-right: 10px;
		color: red;
	}

	.carMain {
		width: 100%;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
	}

	.carMain>div {
		width: 100%;
		margin-left: 10px;
		display: flex;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 19px;
	}

	.carMain>div>div:nth-child(2)>div:nth-child(1) {
		width: 20%;
		/* position: relative; */
	}

	.carMain>div>div:nth-child(2) {
		width: 100%;
		margin-left: 10px;
		position: relative;
	}

	.carMain>div>div:nth-child(2)>div>img {
		width: 100%;
	}

	.carMain>div>div:nth-child(3) {
		flex-grow: 1;
		background-color: green;
		height: 100%;
		display: flex;
		flex-direction: column;

		margin-left: 15px;
		margin-right: 20px;
	}

	.more {
		position: absolute;
		height: 121%;
		/* background-color: hotpink; */
		width: 73%;
		left: 23%;
		top: 0;
		/* z-index: 23; */
		margin-right: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 0.52rem;
	}

	.theprice>p {
		color: red;
	}

	.theprice {
		display: flex;
		justify-content: space-between;
	}

	.theprice>div {
		/* height: 25px; */
		width: 34%;
		/* background-color: yellow; */
	}

	.quantity {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 50px;
		border: 1px solid #a9a9a9a6;

		padding: 1%;
	}

	.quantity>div>img {
		width: 100%;
	}

	.quantity>div {
		width: 20%;
		/* background-color: brown; */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.quantity>input {
		width: 40%;
		height: 100%;
		text-align: center;
	}

	.calculate {
		position: fixed;
		width: 100%;
		height: 8%;
		background: white;
		bottom: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #f1ecec6e;
		border-top: 1px solid #f1ecec6e;
		/* padding-left: 10px;
        padding-right: 10px; */
	}

	.calculate>div:first-child {
		margin-left: 10px;
		display: flex;
		align-items: center;
	}

	.calculate>div:last-child {
		margin-right: 10px;
	}

	.heji {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 100%;
	}

	.calculate>div:nth-child(2) {
		display: flex;
		align-items: center;
	}

	.calculate>div:first-child>span {
		font-size: 0.48rem;
		margin-left: 5px;
	}

	.calculate>div:nth-child(2)>span {
		font-size: 0.44rem;
		margin-bottom: 15%;
		margin-right: 6px;
	}

	.heji>p>span:first-child {
		font-size: 0.4rem;
	}

	.heji>div {
		height: 15px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid gold;
		border-radius: 5px;
	}

	.heji>p {
		color: red;
	}

	.heji>p>span:nth-child(2) {
		font-size: 0.6rem;
	}

	.heji>div>span {
		font-size: 0.35rem;
	}

	.jiesuan>span {
		font-size: 0.6px;
	}

	.jiesuan {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		background-color: gold;
		height: 50%;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}

	.tishi {
		position: fixed;
		height: 100%;
		width: 100%;
		/* background-color: royalblue; */
		top: 0%;
		display: flex;
		justify-content: center;
		align-items: center
	}

	.tishi2 {
		/* width:45%; */
		height: 8%;
		background-color: #666;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 10%;
		padding-right: 10%;
		font-size: .6rem;
		color: white;
	}
</style>
