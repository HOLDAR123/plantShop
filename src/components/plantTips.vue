<template >
    <div class="v-card-tip">
        <div class="v-icons">
            <img :src="require('../assets/image/' + tips_data.icon)" alt="img">
        </div>
        <div class="v-text">
            <div class="v-main-text">
                {{ tips_data.mainText }}
                <div class="v-secondary-text">
                {{ tips_data.secondaryText }}
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'plantTips',
    props: {
    tips_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>
<style >
   .v-card-tip {
  display: flex;
  align-items: center; 
  margin-top: 50px;
}

.v-icons {
  margin-right: 10px;
}

.v-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.v-main-text {
  font-weight: 500;
  font-size: 25px;
}

.v-secondary-text {
    color: #4F4F4F;
    font-size: 15px;
    max-width: 320px;
}
</style>