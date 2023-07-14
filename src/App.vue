<template>
<headerComp></headerComp>
<sellerProduct></sellerProduct>
</template>

<script>
import headerComp from './components/headerComp.vue'
import sellerProduct from './components/sellerProduct.vue'
export default {
  name: 'App',
  components: {
    headerComp,
    sellerProduct
  }
}
</script>
