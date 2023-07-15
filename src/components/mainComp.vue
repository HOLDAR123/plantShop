<template>
    <headerComp></headerComp>
    <ourPlus></ourPlus>
    <CatalogShop></CatalogShop>
    <roomSelector></roomSelector>
    </template>
    
    <script>
    import ourPlus from './ourPlus.vue'
    import headerComp from './headerComp.vue'
    import CatalogShop from './CatalogShop.vue'
    import roomSelector from './roomSelector.vue'
    export default {
      name: 'mainComp',
      components: {
        headerComp,
        ourPlus,
        CatalogShop,
        roomSelector

      }
    }
    </script>
    