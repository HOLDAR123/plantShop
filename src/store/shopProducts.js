import axios from 'axios'

export default {
    state:{
        products:[]
    },
    mutations:{
        setProducts(state, payload) {
            state.products = payload
        }
     },
    getters:{
        getAllProducts(state){
            return state.products;
        }
    },
    actions:{
        async fetchProducts(context){
            const res = await axios.get('http://localhost:3000/items');
           const itemData = res.data;
           context.commit('setProducts', itemData)
        }
    }
}