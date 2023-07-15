<template>
    <div class="v-container">
      <div class="v-container-text">
        <div class="v-container-text-main-title">
          Interior Plant Reference
        </div>
        <div class="v-container-text-secondary-title">
          Make your home so comfortable with refreshing plants
        </div>
      </div>
    </div>
    <div class="v-container-rooms">
      <div class="v-wrapper-blocks">
        <div class="v-wrapper-share">
          <div class="v-block-living-room">
            <img src="../assets/image/livingroom.png" alt="">
            <div class="v-block-overlay">
              <span class="v-block-overlay-text">Living Room</span>
            </div>
          </div>
          <div class="v-block-desktop">
            <img src="../assets/image/desktop.png" alt="">
            <div class="v-block-overlay">
              <span class="v-block-overlay-text">Desktop</span>
            </div>
          </div>
        </div>
        <div class="v-block-bed-room">
          <img src="../assets/image/bedroom.png" alt="">
          <div class="v-block-overlay">
            <span class="v-block-overlay-text">Bedroom</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
    name:'roomSelector'
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }

  .v-container-rooms {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-wrapper-blocks {
    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;
  }

  .v-block-desktop {
    margin-top: 30px;
    position: relative;
    display: inline-block;
  }

  .v-block-bed-room {
    position: relative;
    display: inline-block;
  }

  .v-container {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-container-text {
    display: grid;
    grid-template-columns: auto;
  }

  .v-container-text-main-title {
    font-size: 65px;
    font-weight: 700;
  }

  .v-container-text-secondary-title {
    display: inherit;
    font-size: 20px;
    justify-content: center;
    color: #4F4F4F;
  }

  .v-block-living-room,
  .v-block-desktop,
  .v-block-bed-room {
    position: relative;
  }

  .v-block-living-room:hover .v-block-overlay,
  .v-block-desktop:hover .v-block-overlay,
  .v-block-bed-room:hover .v-block-overlay {
    opacity: 1;
  }

  .v-block-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: 50px;
    transition: opacity 0.3s ease;
  }

  .v-block-overlay-text {
    color: #fff;
    font-size: 65px;
    font-weight: bold;
  }
</style>
