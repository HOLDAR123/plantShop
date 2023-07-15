<template>
  <div class="wrapper">
    <div class="delivery">
        <img src="../assets/image/Group.png" alt="">
        <div class="delivery-text">
            <h1>Free Shapping</h1> <br>
            <span>No charge for each delivery</span>
        </div>
    </div>  
    <div class="payment">
        <img src="../assets/image/Vector.png" alt="">
        <div class="payment-text">
            <h1>Quick Payment</h1> <br>
            <span>100% Secure payment</span>
        </div>
    </div>   
    <div class="support">
        <img src="../assets/image/akar-icons_shipping-box-02.png" alt="">
        <div class="support-text">
            <h1>24/7 Support</h1> <br>
            <span>Quick support</span>
        </div>
    </div>   
    </div>
    <div class="catalogText">Best Seller Products:</div>
</template>
<script>
export default {
    name:'ourPlus'
}
</script>
<style>
    .wrapper{
        display: flex;
        margin: 50px;
        justify-content: space-around;
    }
    .delivery , .support , .payment{
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
    }

    .delivery-text,.payment-text,.support-text{
        padding: 10px;
    }
    .delivery-text > h1{
        margin: 0;
        font-size: 18px;
    }
    .payment-text > h1{
        margin: 0;
        font-size: 18px;
    }
    .support-text > h1{
        margin: 0;
        font-size: 18px;
    }
    .delivery-text > span{
        color: #828282;
    }
    .support-text > span{
        color: #828282;
    }
    .payment-text > span {
        color: #828282;
    }
    .v-popular-items{
        display: grid;
        grid-template-columns: auto auto auto auto;
    } 
.price__flower__flower > span{
      font-size: 20px;
}
.catalogText{
    font-size: 65px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>