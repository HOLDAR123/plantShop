<template>
    <div class="v-container-footer">
      <div class="v-content">
        <div class="v-news-latter">
          <div class="v-header-title">
            Newslatter
          </div>
          <form action="">
            <div class="input-wrapper">
              <input type="text" placeholder="Search plant" required>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div class="v-support">
          <div class="v-header-title">
            Support
          </div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="v-useful-link">
          <div class="v-header-title">
            Useful links
          </div>
          <ul>
            <li>Payment & Tax</li>
            <li>Team of service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div class="v-our-menu">
          <div class="v-header-title">
            Our menu
          </div>
          <ul>
            <li>Best Product</li>
            <li>Category</li>
          </ul>
        </div>
        <div class="v-address">
          <div class="v-header-title">
            Address
          </div>
          <ul>
            <li>JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</li>
            <li>hallo@daunku.com</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'footerComp'
  }
  </script>
  
  <style>
  .v-container-footer {
    background: linear-gradient(45deg, #7a8087, #566270);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    padding: 40px;
  }
  
  .v-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px; 
  }
  
  .v-news-latter,
  .v-support,
  .v-useful-link,
  .v-our-menu,
  .v-address {
    display: flex;
    flex-direction: column;
  }
  
  .v-header-title {
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }
  
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    color: white;
    margin-bottom: 5px;
  }
  </style>
  