<template>
  <div id="app" oncontextmenu="return false;">
      <div class="menu-ctn-ctn" :class="{'no-z-index': mobileMenuIsOpened, 'display-none': !showMenu, 'display-flex': showMenu}">
        <app-menu class="menu" :appLanguage="appLanguage" @openMobileMenu="openMobileMenu"
                  @newLanguage="setNewLanguage" :goToInstagram="goToInstagram"/>
      </div>
      <div class="menu-side-bar">
        <div></div>
      </div>
      <div class="horizontal-bar only-sm-screen"></div>
      <router-view class="main" :appLanguage="appLanguage" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
      <div v-if="mobileMenuIsOpened" class="mobile-menu-opened">
        <i class="el-icon-close close-icon" @click="closeMobileMenu"></i>
        <transition name="fade" mode="out-in">
          <ul class="mobile-menu-list" v-if="!languageMenuIsVisible" key="1">
            <li @click="toggleMenuActive('portraits')">Portraits</li>
              <ul v-show="activePortraits">
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('portraits-bw')">Black and white</li>
                <li v-else class="color-submenu" @click="goToPage('portraits-bw')">Noir et blanc</li>
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('portraits-colour')">Colour</li>
                <li v-else class="color-submenu" @click="goToPage('portraits-colour')">Couleur</li>
              </ul>

            <li v-if="isFrench" @click="toggleMenuActive('street-life')">Scène de vie</li>
            <li v-if="isEnglish" @click="toggleMenuActive('street-life')">Street life</li>
            <li v-if="isTagalog" @click="toggleMenuActive('street-life')">Kulay</li>
              <ul v-show="activeStreetLife">
                <li v-if="isFrench" class="color-submenu" @click="goToPage('street-life-bw')">Noir et blanc</li>
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('street-life-bw')">Black and white</li>
                <li v-if="isFrench" class="color-submenu" @click="goToPage('street-life-colour')">Couleur</li>
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('street-life-colour')">Colour</li>
              </ul>

            <li v-if="isFrench" @click="toggleMenuActive('people-at-work')">Métiers</li>
            <li v-if="isEnglish" @click="toggleMenuActive('people-at-work')">People at work</li>
            <li v-if="isTagalog" @click="toggleMenuActive('people-at-work')">People at work</li>
              <ul v-show="activePeopleAtWork">
                <li v-if="isFrench" class="color-submenu" @click="goToPage('people-at-work-bw')">Noir et blanc</li>
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('people-at-work-bw')">Black and white</li>
                <li v-if="isFrench" class="color-submenu" @click="goToPage('people-at-work-colour')">Couleur</li>
                <li v-if="isEnglish || isTagalog" class="color-submenu" @click="goToPage('people-at-work-colour')">Colour</li>
              </ul>


            <li v-if="isEnglish" class="about-me" @click="goToPage('bio')">About me</li>
            <li v-if="isFrench" class="about-me" @click="goToPage('bio')">A propos</li>
            <li v-if="isTagalog" class="about-me" @click="goToPage('bio')">About me</li>
            <li @click="goToPage('contact')">Contact</li>
            <li v-if="isEnglish || isTagalog" @click="toggleMenuLanguage">Language</li>
            <li v-else @click="toggleMenuLanguage">Langue</li>
            <li v-if="isEnglish || isTagalog" @click="goToInstagram">Follow me</li>
            <li v-else @click="goToInstagram">Me suivre</li>
          </ul>
        
          <ul v-if="languageMenuIsVisible" key="2" class="mobile-menu-list language-list">
            <li class="language-ctn" @click="setNewLanguage('english')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/united-kingdom_q8nc2a.png" alt="uk-flag">
              <span>English</span>
            </li>
            <li class="language-ctn" @click="setNewLanguage('french')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141157/Website%20assets/france_lfxmkn.png" alt="france-flag">
              <span>Français</span>
            </li>
            <li class="language-ctn" @click="setNewLanguage('tagalog')">
              <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/philippines_nwfsbu.png" alt="uk-flag">
              <span>Tagalog</span>
            </li>
            <li class="language-ctn back-ctn" @click="toggleMenuLanguage">
              <i class="el-icon-back"></i>
              <span v-if="isFrench">Retour</span>
              <span v-else>Back</span>
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
      appLanguage: 'english',
      activePortraits: false,
      activeStreetLife: false,
      activePeopleAtWork: false,
      languageMenuIsVisible: false,
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
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
    });
    
    window.addEventListener("contextmenu", 
      function(e) {
        e.stopPropagation();
    }, true);
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