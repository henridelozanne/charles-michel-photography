<template>
  <div id="main-app">
    <div class="menu-ctn-ctn" :class="{'no-z-index': mobileMenuIsOpened}">
      <app-menu class="menu" @openMobileMenu="openMobileMenu" :goToInstagram="goToInstagram"/>
    </div>
    <div class="menu-side-bar"><div /></div>
    <div class="horizontal-bar only-sm-screen"></div>
    <router-view class="main"/>
    <mobile-menu v-if="mobileMenuIsOpened" @closeMobileMenu="mobileMenuIsOpened = false"
                 :goToInstagram="goToInstagram" />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import MobileMenu from '../components/MobileMenu.vue';

export default {
  name: 'Home',
  components: {
    'app-menu': Menu,
    'mobile-menu': MobileMenu,
  },
  data() {
    return {
      activePortraits: false,
      activeStreetLife: false,
      activePeopleAtWork: false,
      languageMenuIsVisible: false,
      mobileMenuIsOpened: false,
    }
  },
  methods: {
    goToInstagram() {
      var win = window.open('https://www.instagram.com/charlesmichel_photography/?hl=fr', '_blank');
      win.focus();
    },
    openMobileMenu() {
      this.mobileMenuIsOpened = true;
    },
  },
};
</script>

<style lang="scss">
@import 'src/style/main.scss';
</style>

<style lang="scss">
body {
  margin: 0;
  background: rgb(11, 11, 11);
  color: rgb(222, 222, 222);
  scroll-behavior: smooth;
}

#main-app {
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
  z-index: 1000;
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
  #main-app {
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
  font-size: 1.4em !important;
  margin-left: 15px;
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
</style>