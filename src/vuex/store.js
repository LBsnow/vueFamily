import Vue from 'vue'
import Vuex from 'vuex'
import data from '../../static/data/data.json'
console.log(data);
data.foodvue.foodvue.forEach(function(item) {
    item.id = Math.random();
});
data.shopboardvue.shopboardvue.forEach(function(item) {
    item.id = Math.random();
});
data.gardenvue.gardenvue.forEach(function(item) {
    item.id = Math.random();
});
data.freshvue.freshvue.forEach(function(item) {
    item.id = Math.random();
});
data.mellowvue.mellowvue.forEach(function(item) {
    item.id = Math.random();
});
data.jinvue.jinvue.forEach(function(item) {
    item.id = Math.random();
});

Vue.use(Vuex);

const state = {
    food: data.foodvue,
    shopboard: data.shopboardvue,
    garden: data.gardenvue,
    fresh: data.freshvue,
    mellow: data.mellowvue,
    jin: data.jinvue,
    countsum: 0,
    pricesum: 0,
    list: [],
    allsum: 0
}
// 点击添加商品
const mutations = {
    ADD(state, item) {
        var isSame = false;
        state.countsum++; /*总数*/
        item.count++;/*个数相加*/
        state.pricesum += item.price;
        // 判断每个item的id是否相同，使得state.list数组的item.count++
        state.list.forEach(function(value, index) {
            if (value.id === item.id) {
                value.count++;
                isSame = true;
            }
        });
        // 承接上面的foreach的循环，因为id是唯一的，就不存在重复对象的问题
        if (!isSame) {
            state.list.push({ id: item.id, name: item.name, price: item.price, itemChecked: false, count: 1 });
            isSame = false;
        }
        console.log(state.list);
    },
    // 点击删除商品
    DELETE(state, item) {
        if (state.countsum > 0 && item.count > 0) {
            state.list.splice(state.list.indexOf(item), 1);
            console.log(state.list);
            state.countsum--; //总数
            item.count--; //个别
            state.pricesum -= item.price; //总数 减去个别奶茶价格
            
        }
    },
    // 在list.vue中删除商品
    LISTDELETE(state,item){
    if (state.countsum > 0 && item.count > 0) {
    state.pricesum-=(item.count*item.price);	
    	state.countsum=state.countsum-item.count;
    	item.count=0;
    	state.list.splice(state.list.indexOf(item), 1);
    }
    },
   // 点击切换多选框
    UPDATALIST(state, item) {
        item.itemChecked = !item.itemChecked;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
