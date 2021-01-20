import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		login: true,
		loginIn: false,
		num1:0,
		componentName: "my-like",
		shopcarlist: [

		],
	},
	mutations: {
		add(state, payload) {
			state.shopcarlist.push({
				pic: payload.amount.pic,
				title: payload.amount.title,
				type: payload.amount.type,
				price: payload.amount.price,
				merchant: payload.amount.merchant,
				count: 1,
				com_flag:1
			});
		
    },
    


	}
})
