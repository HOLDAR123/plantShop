<template>
    <header>
      <nav>
        <ul class="list__nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li id="Cart">
            <a href="#">
                <font-awesome-icon :icon="['fas', 'bag-shopping']" size="2xl" style="color: #ffffff;" />
              <div class="amount">6</div>
            </a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <div class="text">
        <span class="title__container">
            Bring Serenity to Your Place
 With Interior Plants
        </span><br>
        <span class="p__container">
            find your dream plant for you home decoration with us, and we will make it happen.
        </span>
        <form action="">
  <div class="input-wrapper">
    <input type="text" placeholder="Search plant" required>
    <button type="submit"><font-awesome-icon :icon="['fas', 'magnifying-glass']" size="xl" style="color: #ffffff;" /></button>
  </div>
</form>

    </div>
      </div>
      <div class="goods__cursor">
        <div class="flowers">
           <button class="button_price_one" @click="show1">
            <transition name="fade-one">
              <div class="price__flower__one" v-if="visible1">$65.00 <br> <span>Chamomile</span></div>
            </transition>
            <div class="button__price__spot_one"></div>
           </button>
           <button class="button_price_two" @click="show2">
            <transition name="fade-two">
              <div class="price__flower__two" v-if="visible2">$25.00 <br> <span>Cactus</span></div>
            </transition>
            <div class="button__price__spot_two"></div>
           </button>
        </div>
        <div class="flower">
          <button class="button_price_flower" @click="show3">
            <transition name="fade-flower">
              <div class="price__flower__flower" v-if="visible3">$55.00 <br> <span>Dracena Fragnas</span></div>
            </transition>
            <div class="button__price__spot_flower"></div>
           </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  
  library.add(fas);
  
  export default {
    name: 'headerComp',
    components: {
      FontAwesomeIcon,
    },
    data(){
      return {
        visible1: false,
        visible2: false,
        visible3: false,
      }
    },
    methods: {
      show1(){
        this.visible1 = !this.visible1;
      },
      show2(){
        this.visible2 = !this.visible2;
      },
      show3(){
        this.visible3 = !this.visible3;
      }
    },
  };
  </script>
  
  <style >
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');
  :root {
    --color-primary: #2AF598;
    --color-secondary: #009EFD;
    --color-default: #F9F9F9;
    --color-cart:#2D3949;
    --color-p:#cccaca;
  }
.fade-one-enter-active,
.fade-two-enter-active,
.fade-flower-enter-active,
.fade-one-leave-active,
.fade-two-leave-active,
.fade-flower-leave-active {
  transition: opacity 0.5s ease;
}


.fade-one-enter-from,
.fade-two-enter-from,
.fade-flower-enter-from,
.fade-two-leave-to,
.fade-flower-leave-to,
.fade-one-leave-to {
  opacity: 0;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }
  
  header {
  background-image: url(../assets/image/Hero.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 1200px;
}

nav {
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: sticky;
  top: 0;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.001); 
  z-index: 1; 
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin: 20px;
  font-size: 20px;
}

li:nth-child(1) {
  font-weight: 700;
  background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
a{
    text-decoration: none;
    color: white;
}
  .list__cart{
    display: flex;
    text-align: center;
    width: 50%;
  }
  .list__nav{
    display: flex;
    justify-content: center;
    width:100%;
    margin-left: -10px;
    text-align: center;
  }
  #Cart{
    justify-content: flex-end;
    position: absolute;
    top: 2px;
    width: 75%;
    display: flex; 
  }
  .amount {
  position: absolute;
  top: 7px;
  height: 15px;
  width: 8px;
  right: 0px;
  background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 50%;
  font-size: 13px;
  color: var(--color-cart);
  font-weight: 700;
}
.container{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 240px;
}
.text{
    display: grid;
    grid-template-columns: auto;
}
.title__container{
    color: var(--color-default);
    font-size: 80px;
    max-width: 1200px;
    font-weight: 800;
}
.p__container {
  color: var(--color-p);
  font-size: 20px;
  max-width: 500px;
  font-weight: 100;
  margin: 0 auto; 
  text-align: center; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.input-wrapper {
  display: flex;
  justify-content: center;
  text-align: center; 
  margin: 50px;
}

input[type="text"] {
  padding-right: 36px; 
  width: 360px;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  color: var(--color-default);
  padding: 10px;
  border-radius: 30px;
  margin-right: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border:1px solid white;
  
}
input[type="text"]::placeholder {
    font-weight: 500;
  font-size: 20px;
  padding: 3px;
color: #FFFFFF;
font-family: 'Work Sans', sans-serif;
}
button[type="submit"] {
  margin-left: -52px; 
  height: 35px;
  cursor: pointer;
  border:1px solid transparent;
  border-radius: 100px;
  align-self: center;
  background: -webkit-linear-gradient(45deg, var(--color-primary), var(--color-secondary));
}
.goods__cursor{
  display: grid;
  grid-template-columns: auto auto;
}
.button_price_one , .button_price_two , .button_price_flower{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border:1px solid white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
}
.button__price__spot_one , .button__price__spot_two , .button__price__spot_flower{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}
.button_price_one{
  position: absolute;
  margin-top: -480px;
  left: 130px;
}
.button_price_two{
  position: absolute;
  left: 220px;
  margin-top: -280px;
}

.button_price_flower{
  margin-top: -200px;
  margin-right: 150px;
  float: right;
}
.price__flower__one{
  position: absolute;
  border: 1px solid white; 
  color: var(--color-default);
  font-weight: 700;
  width: 200px;
  font-size: 45px;
  cursor: default;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px;
  border-radius: 18px;
  margin-top: -210px;
}
.price__flower__one > span{
      font-size: 20px;
}

.price__flower__two{
  position: absolute;
  border: 1px solid white; 
  color: var(--color-default);
  font-weight: 700;
  cursor: default;
  width: 200px;
  font-size: 45px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px;
  border-radius: 18px;
  margin-top: -210px;
}
.price__flower__two > span{
      font-size: 20px;
}
.price__flower__flower{
  position: absolute;
  border: 1px solid white; 
  color: var(--color-default);
  font-weight: 700;
  width: 200px;
  font-size: 45px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px;
  border-radius: 18px;
  cursor: default;
  margin-top: -210px;
}

  </style>
  