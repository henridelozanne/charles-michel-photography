<template>
  <div class="gallery">
    <div class="gallery-nav">
      <img class="website-white-logo" src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1595342632/Website%20assets/Logo_blanc_pw4wgh.png" alt="website-logo-white">
      <router-link to="/" class="go-back-container">
        <goBackSvg />
        <h2>{{ $t('Gallery.backToMainSite')}}</h2>
      </router-link>
    </div>
    <iframe id='pixelsshoppingcartiframe' src='https://fineartamerica.com/widgetshoppingcart/artwork.html?memberidtype=artistid&memberid=929174&domainid=0&showheader=0&height=600&autoheight=true' style='display: inline-block; width: 100%; height: 100vh; border: none; overflow: hidden;'></iframe>
  </div>
</template>

<script type='text/javascript' src='https://fineartamerica.com/widgetshoppingcart/widgetscripts.php'></script>

<script>
import goBackSvg from '../components/goBackSvg';

export default {
  name: 'Gallery',
  components: {
    goBackSvg
  },
};
</script>

<style lang="scss">
.gallery {
  background: white;
  min-height: 100vh;
  color: black;

  .gallery-nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
    margin-bottom: 10px;
    box-shadow: 0 2px 10px rgba(103, 103, 103, 0.2);
    font-family: 'Raleway', sans-serif;

    .website-white-logo {
      width: 200px;
    }

    .go-back-container {
      display: flex;
      color: black;
      text-decoration: none;

      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>