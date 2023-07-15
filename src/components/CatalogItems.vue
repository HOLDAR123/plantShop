<template>
  <div class="v-card">
    <div class="v-img">
      <img :src="require('../assets/image/' + item_data.image)" alt="img">
      <div class="v-description">
        <span class="ss"> {{ item_data.name }}</span><br>
        <div class="v-stars">
          <font-awesome-icon
            v-for="star in item_data.stars"
            :key="star"
            :icon="['fas', 'star']" size="2xl"
            style="color: #f2c94c;"
          /> <br>
          <span class="ss">{{ item_data.price }} <button class="button-add"><font-awesome-icon :icon="['fas', 'plus']" size="xl" style="color: #ffffff;" @click="addInfo()"/></button></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItems',
  props: {
    item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addInfo() {
        this.$emit('addInfo',this.item_data.index);
        console.log(this.item_data.index);
    }
  }
}
</script>

<style>
.button-add {
  width: 45px;
  margin-left: 50px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid transparent;
  background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  transition: width 0.1s, height 0.1s;
}

.button-add:active {
  width: 40px;
  height: 40px;
}

.ss{
    font-size: 30px;
    font-weight: 500;
}
    body {
        margin: 0;
        padding: 0;
    }
    .v-description{
      width: 210px;
      height:100px;
      padding: 20px;
      border-radius: 20px;
      background-color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }
    .v-img > img{
      width: 250px;
      height: 250px;
      margin-top: -130px;
    }
    .v-img{
        background-color:#C1D0E4;
        border-radius: 20px;
        height: 250px;
        width: 250px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }
    .v-card {
      width: 250px;
      height: 350px;
    }

    .v-card h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .v-card p {
      font-size: 14px;
    }
</style>
