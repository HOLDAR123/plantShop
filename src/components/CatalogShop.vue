<template lang="">
<div class='v-itemss'>
    <div class='v-container'>
        <CatalogShopItems v-for="item in items" :key="item.index"  v-bind:item_data = 'item'></CatalogShopItems>
    </div>
</div>
</template>
<script>
import CatalogShopItems from './CatalogItems.vue'
export default {
    name: 'CatalogShop',
    components:{
        CatalogShopItems
    },
    data(){
        return{
            items:[
                {   
                    index: 1,
                    image: '1.png',
                    name: 'Philodendron',
                    stars: 5,
                    price: '$65.00',
                },
                {   
                    index: 2,
                    image: '2.png',
                    name: 'Alocasia',
                    stars: 3,
                    price: '$34.00',
                },
                {
                    index: 3,
                    image: '3.png',
                    name: 'Cammile',
                    stars: 4,
                    price: '$99.00'
                },
                {
                    index: 4,
                    image: '1.png',
                    name: 'Weed',
                    stars: 1,
                    price: '$19.00'  
                }
            ]
        }
    }
}

</script>
<style>
.v-itemss{
    display: flex;
    justify-content: center;
}
.v-container {
    margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 150px;
   
}
</style>