<template lang="">
<div class='v-itemss'>
    <div class='v-container'>
        <CatalogShopItems v-for="item in $store.getters.getAllProducts" :key="item.index"  v-bind:item_data = 'item'></CatalogShopItems>
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
    mounted(){
      this.$store.dispatch('fetchProducts')
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