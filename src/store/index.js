import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proLists: [],
    isLogin: false,
    username: '',
    uid: '',
    tk: ''
},
mutations: {
    addCart(state, proList) {
        for (let i = 0; i < state.proLists.length; i++) {
            if (state.proLists[i].proName == proList.proName) {
                state.proLists[i].proNum++;
                return
            }
        }

        state.proLists.push(proList);
        console.log(state.proLists)
    },
    enter(state) {
        state.isLogin = true;
    },
    minusStore(state, index) {
        state.proLists[index].proNum--;

        state.proLists[index].totalPrice =
            parseFloat(
                state.proLists[index].price[0] + state.proLists[index].price[1]
            ) * state.proLists[index].proNum;

        if (state.proLists[index].proNum < 1) {
            state.proLists.splice(index, 1);
        }

    },
    addStore(state, index) {
        state.proLists[index].proNum++;
        state.proLists[index].totalPrice =
            parseFloat(
                state.proLists[index].price[0] + state.proLists[index].price[1]
            ) * state.proLists[index].proNum;
    }
}
})
