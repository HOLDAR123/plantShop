<template >
    <div class="wrapper">
    <div class="delivery">
        <img src="../assets/Group.png" alt="">
        <div class="delivery-text">
            <h1>Free Shapping</h1> <br>
            <span>No charge for each delivery</span>
        </div>
    </div>  
    <div class="payment">
        <img src="../assets/Vector.png" alt="">
        <div class="payment-text">
            <h1>Quick Payment</h1> <br>
            <span>100% secure payment</span>
        </div>
    </div>   
    <div class="support">
        <img src="../assets/akar-icons_shipping-box-02.png" alt="">
        <div class="support-text">
            <h1>24/7 Support</h1> <br>
            <span>Quick support</span>
        </div>
    </div>   
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

    body{
        margin: 0;
        height: 0;
    }
    .wrapper{
        display: flex;
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
</style>