<template>
  <div class="gallery">
    <div class="gallery-nav">
      <div class="container">
        <img class="website-white-logo" src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1595342632/Website%20assets/Logo_blanc_pw4wgh.png" alt="website-logo-white">
        <router-link to="/" class="go-back-container">
          <goBackSvg />
          <h2>{{ $t('Gallery.backToMainSite')}}</h2>
        </router-link>
      </div>
    </div>
    <iframe id='pixelsshoppingcartiframe'
            src='https://fineartamerica.com/widgetshoppingcart/artwork.html?memberidtype=artistid&memberid=929174&domainid=0&showheader=0&height=600&autoheight=true'
            class="container"
            style='display: inline-block; width: 100%; height: 100vh; border: none; overflow: hidden;'></iframe>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .gallery-nav {
    margin-bottom: 10px;
    box-shadow: 0 2px 10px rgba(103, 103, 103, 0.2);
    font-family: 'Raleway', sans-serif;
    align-self: stretch;

    .container {
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 50px;

      .website-white-logo {
        width: 200px;
      }

      .go-back-container {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;

        svg {
          margin-right: 10px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .container {
        padding: 20px 0;

        .go-back-container {
          font-size: 10px;

          svg {
            margin-right: 5px;
            width: 17px;
          }
        }
      }
    }
  }

  .container {
    max-width: 1224px;
    width: 92%;
    margin: 0 auto;
  }
}
</style>