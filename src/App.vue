<template>
  <div id="app">
      <div class="menu-ctn-ctn" :class="{'no-z-index': mobileMenuIsOpened, 'display-none': !showMenu, 'display-flex': showMenu}">
        <app-menu class="menu" :appLanguage="appLanguage" @openMobileMenu="openMobileMenu"/>
      </div>
      <div class="menu-side-bar">
        <div></div>
      </div>
      <div class="horizontal-bar only-sm-screen"></div>
      <router-view class="main" @newLanguage="setNewLanguage" :appLanguage="appLanguage" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
      <div v-if="mobileMenuIsOpened" class="mobile-menu-opened">
        <i class="el-icon-close close-icon" @click="closeMobileMenu"></i>
        <ul class="mobile-menu-list">
          <li v-if="isEnglish || isTagalog" @click="goToPage('black-and-white')">Black and white</li>
          <li v-else @click="goToPage('black-and-white')">Noir et blanc</li>
          <li v-if="isEnglish" @click="goToPage('colour')">Colour</li>
          <li v-if="isFrench" @click="goToPage('colour')">Couleur</li>
          <li v-if="isTagalog" @click="goToPage('colour')">Kulay</li>
          <li v-if="isEnglish" @click="goToPage('street-life')">Street life</li>
          <li v-if="isFrench" @click="goToPage('street-life')">Scène de vie</li>
          <li v-if="isTagalog" @click="goToPage('street-life')">Buhay kalsada</li>
          <li v-if="isEnglish" @click="goToPage('childhood')">Childhood</li>
          <li v-if="isFrench" @click="goToPage('childhood')">Enfance</li>
          <li v-if="isTagalog" @click="goToPage('childhood')">Kabataan</li>
          <li v-if="isEnglish" @click="goToPage('portrait')">Portrait</li>
          <li v-if="isFrench" @click="goToPage('portrait')">Portrait</li>
          <li v-if="isTagalog" @click="goToPage('portrait')">Larawan</li>
          <li v-if="isEnglish" class="about-me" @click="goToPage('bio')">About me</li>
          <li v-if="isFrench" class="about-me" @click="goToPage('bio')">A propos</li>
          <li v-if="isTagalog" class="about-me" @click="goToPage('bio')">About me</li>
          <li @click="goToPage('contact')">Contact</li>
        </ul>
      </div>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">    
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Modak|Palanquin&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300&display=swap" rel="stylesheet">

  </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script>

import Menu from './components/Menu.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'app',
  components: {
    'app-menu': Menu,
  },
  data() {
    return {
      appLanguage: 'english',
      mobileMenuIsOpened: false,
      showMenu: true,
    }
  },
  computed: {
    isEnglish() {
      return this.appLanguage === 'english';
    },
    isFrench() {
      return this.appLanguage === 'french';
    },
    isTagalog() {
      return this.appLanguage === 'tagalog';
    },
  },
  methods: {
    closeMobileMenu() {
      this.mobileMenuIsOpened = false;
    },
    goToPage(page) {
      this.$router.push(page);
      this.mobileMenuIsOpened = false;
    },
    openMobileMenu() {
      this.mobileMenuIsOpened = true;
    },
    setNewLanguage(payload) {
      this.appLanguage = payload;
    },
    fullImgIsVisible() {
      this.showMenu = false;
    },
    fullImgIsNotVisible() {
      this.showMenu = true;
    },
  },
  created() {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: rgb(11, 11, 11);
  color: rgb(222, 222, 222);
  scroll-behavior: smooth;
}

#app {
  font-family: 'Palanquin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
}

.menu {
  min-width: 240px;
  height: 100%;
}

.menu-ctn-ctn {
  min-width: 240px;
  display: flex;
  align-items: center;
  z-index: 9998;
}

.no-z-index {
  z-index: 0;
}

.display-none {
  display: none;
}

.display-flex {
  display: flex;
}

.main {
  width: 82%;
  padding-right: 10px;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  #app {
    flex-direction: column;
  }

  .menu {
    height: 70px;
    width: 100%;
    background: rgb(11, 11, 11);
  }

  .menu-ctn-ctn {
    width: 100%;
    min-height: 70px;
    background: rgb(11, 11, 11);;
  }

  .main {
    width: 100%;
    padding-left: 10px;
    margin-top: 70px;
  }
}


  .menu-side-bar {
    height: 100%;
    margin-right: 10px;
    margin-left: 240px;
  }

  @media screen and (max-width:768px) {
    .menu-side-bar {
      display: none;
    }
  }

  .menu-side-bar div {
    height: 100%;
    width: 8px;
    background: radial-gradient(#242424, rgb(0, 0, 0));

    position: fixed;
  }

  .menu-ctn-ctn {
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #242424;
  }

  .mobile-menu-opened {
    width: 100%;
    height: 100vh;
    background: black;
    z-index: 2000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<style lang="scss">
@import 'src/style/main.scss';
</style>

<style lang="scss" scoped>
.close-icon {
  color: rgb(174, 174, 174);
  font-size: 2.5em;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 23px;

  &:hover {
    color: rgb(222, 222, 222);
  }
}

.mobile-menu-list li {
  font-size: 30px;
  cursor:pointer;
}

.about-me {
  margin-top: 35px;
}
</style>