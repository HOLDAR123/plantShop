<template>
    <headerComp></headerComp>
    <ourPlus></ourPlus>
    <CatalogShop></CatalogShop>
    <CatalogShop></CatalogShop>
    <roomSelector></roomSelector>
    <howToCare></howToCare>
    <footerComp></footerComp>
    </template>
    
    <script>
    import ourPlus from './ourPlus.vue'
    import headerComp from './headerComp.vue'
    import CatalogShop from './CatalogShop.vue'
    import roomSelector from './roomSelector.vue'
    import howToCare from './howToCare.vue'
    import footerComp from './footerComp.vue'
    export default {
      name: 'mainComp',
      components: {
        headerComp,
        ourPlus,
        CatalogShop,
        roomSelector,
        howToCare,
        footerComp

      }
    }
    </script>
    