<template>
  <div id="app">
      <div class="menu-ctn-ctn" :class="{'no-z-index': mobileMenuIsOpened, 'display-none': !showMenu, 'display-flex': showMenu}">
        <app-menu class="menu" @openMobileMenu="openMobileMenu"
                  :goToInstagram="goToInstagram"/>
      </div>
      <div class="menu-side-bar">
        <div></div>
      </div>
      <div class="horizontal-bar only-sm-screen"></div>
      <router-view class="main" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
      <div v-if="mobileMenuIsOpened" class="mobile-menu-opened">
        <i class="el-icon-close close-icon" @click="closeMobileMenu"></i>
        <transition name="fade" mode="out-in">
          <ul class="mobile-menu-list" v-if="!languageMenuIsVisible" key="1">
            <li @click="toggleMenuActive('portraits')">{{ $t('App.portraits') }}</li>
              <ul v-show="activePortraits">
                <li class="color-submenu" @click="goToPage('portraits-bw')">{{ $t('App.blackAndWhite') }}</li>
                <li class="color-submenu" @click="goToPage('portraits-colour')">{{ $t('App.colour') }}</li>
              </ul>
            <li @click="toggleMenuActive('street-life')">{{ $t('App.streetLife') }}</li>
              <ul v-show="activeStreetLife">
                <li class="color-submenu" @click="goToPage('street-life-bw')">{{ $t('App.blackAndWhite') }}</li>
                <li class="color-submenu" @click="goToPage('street-life-colour')">{{ $t('App.colour') }}</li>
              </ul>
            <li @click="toggleMenuActive('people-at-work')">{{ $t('App.peopleAtWork') }}</li>
              <ul v-show="activePeopleAtWork">
                <li class="color-submenu" @click="goToPage('people-at-work-bw')">{{ $t('App.blackAndWhite') }}</li>
                <li class="color-submenu" @click="goToPage('people-at-work-colour')">{{ $t('App.colour') }}</li>
              </ul>
            <li class="about-me" @click="goToPage('bio')">{{ $t('App.aboutMe') }}</li>
            <li @click="goToPage('contact')">Contact</li>
            <li @click="toggleMenuLanguage">{{ $t('App.language') }}</li>
            <li @click="goToInstagram">{{ $t('App.followMe') }}</li>
          </ul>
          <ul v-if="languageMenuIsVisible" key="2" class="mobile-menu-list language-list">
            <li class="language-ctn" @click="setLocale('en')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/united-kingdom_q8nc2a.png" alt="uk-flag">
              <span>English</span>
            </li>
            <li class="language-ctn" @click="setLocale('fr')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141157/Website%20assets/france_lfxmkn.png" alt="france-flag">
              <span>Français</span>
            </li>
            <li class="language-ctn" @click="setLocale('ta')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/philippines_nwfsbu.png" alt="uk-flag">
              <span>Tagalog</span>
            </li>
            <li class="language-ctn back-ctn" @click="toggleMenuLanguage">
              <i class="el-icon-back"></i>
              <span>{{ $t('App.back') }}</span>
            </li>
          </ul>
        </transition>
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
      activePortraits: false,
      activeStreetLife: false,
      activePeopleAtWork: false,
      languageMenuIsVisible: false,
      mobileMenuIsOpened: false,
      showMenu: true,
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    closeMobileMenu() {
      this.mobileMenuIsOpened = false;
      this.languageMenuIsVisible = false;
      this.activePortraits = false;
      this.activeStreetLife = false;
      this.activePeopleAtWork = false;
    },
    goToInstagram() {
      var win = window.open('https://www.instagram.com/charlesmichel_photography/?hl=fr', '_blank');
      win.focus();
    },
    toggleMenuLanguage() {
      this.languageMenuIsVisible = !this.languageMenuIsVisible;
    },
    toggleMenuActive(clickedMenu) {
      if (clickedMenu === 'portraits') {
        this.activeStreetLife = false;
        this.activePeopleAtWork = false;
        this.activePortraits = !this.activePortraits;
      } else if (clickedMenu === 'street-life') {
        this.activePortraits = false;
        this.activePeopleAtWork = false;
        this.activeStreetLife = !this.activeStreetLife;
      } else if (clickedMenu === 'people-at-work') {
        this.activePortraits = false;
        this.activeStreetLife = false;
        this.activePeopleAtWork = !this.activePeopleAtWork;
      }
    },
    goToPage(page) {
      this.$router.push(page);
      this.mobileMenuIsOpened = false;
      this.activePortraits = false;
      this.activeStreetLife = false;
      this.activePeopleAtWork = false;
    },
    openMobileMenu() {
      this.mobileMenuIsOpened = true;
    },
    fullImgIsVisible() {
      this.showMenu = false;
    },
    fullImgIsNotVisible() {
      this.showMenu = true;
    },
  },
}
</script>

<style lang="scss">
.testing {
  display: none;
}

@media screen and (max-width: 768px) {
  .test-1 {
    display: block;
  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  .test-2 {
    display: block;
  }
}

@media screen and (min-width: 978px) and (max-width: 982px) {
  .test-980-large {
    display: block;
  }
}

@media screen and (min-width: 980px) and (max-width: 980px) {
  .test-980-pile {
    display: block;
  }
}



// @media screen and (min-width: 900px) and (max-width: 1000px) {
//   .test-3 {
//     display: block;
//   }
// }

@media screen and (min-width: 1000px) and (max-width: 1100px) {
  .test-4 {
    display: block;
  }
}

@media screen and (min-width: 1100px) and (max-width: 1200px) {
  .test-5 {
    display: block;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .test-6 {
    display: block;
  }
}

@media screen and (min-width: 1300px) and (max-width: 1400px) {
  .test-7 {
    display: block;
  }
}

@media screen and (min-width: 1400px) {
  .test-8 {
    display: block;
  }
}




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
  width: 100%;
  padding-right: 10px;
  height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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

.color-submenu {
  font-size: 25px !important;
  height: 0;
  color: black;
  animation: increaseheight .1s linear forwards;
}

@keyframes increaseheight {
  0% {
    height: 0;
  }

  100% {
    height: 40px;
    color: rgb(222, 222, 222);
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
    background: rgba(15, 15, 15, .85);
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

.language-list {
  padding-left: 0;

  img {
    width: 30px;
    height: 20px;
    border-radius: 2px;
    margin-right: 15px;
  }

  li:not(:first-child) {
    margin-top: 10px; 
  }
}

.language-ctn {
  display: flex;
  align-items: center;

  span {
    padding-bottom: 4px;
  }
}

.back-ctn {
  justify-content: center;
  font-size: 25px !important;
  margin-top: 25px !important;
  i {
    margin-right: 10px;
  }
}
</style>