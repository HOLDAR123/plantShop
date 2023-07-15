<template >
    <div class="v-container-plants">
        <div class="v-wrapper">
        <div class="how-to-care">
            <div class="how-to-care-main-text">
                How to care for plants
            </div>
            <div class="how-to-care-secondary-text">
                Take care of plants with all your heart
            </div>
            <plantTips v-for="tip in tips" :key="tip.index"  v-bind:tips_data = 'tip'></plantTips>
        </div>
        <div class="plants-photo">
            <img src="../assets/image/plants.png" alt=""  >
        </div>
    </div>
    </div>
</template>
<script>
import plantTips from './plantTips.vue'
export default {
    name:'howToCare',
    components: {
        plantTips
    },
    data(){
        return{
            tips:[
                {
                    index:1,
                    icon:'sun.png',
                    mainText:'Adjust Lighting',
                    secondaryText:'When caring for indoor plants, make sure the room temperature is neither too cold nor too hot'
                },
                {
                    index:2,
                    icon:'water.png',
                    mainText:'Dont water too often',
                    secondaryText:'Watering ornamental plants indoors does not have to be done every day.'
                },
                {
                    index:3,
                    icon:'plant.png',
                    mainText:'Dont water too often',
                    secondaryText:'Watering ornamental plants indoors does not have to be done every day.'
                },
                {
                    index:4,
                    icon:'temp.png',
                    mainText:'Fertilize regularly',
                    secondaryText:'The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength'
                }
            ]
        }
    }
}
</script>
<style >

.v-wrapper{
    display: grid;
    grid-template-columns: auto auto;
    gap: 80px;
}
.v-container-plants{
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
.how-to-care-main-text{
    font-size: 63px;
    font-weight: 800;
}
.how-to-care-secondary-text{
    display: inherit;
    font-size: 20px;
    justify-content: center;
    color: #4F4F4F;
    margin-top: 5px;
}
</style>