<template>
  <div class="mobile-menu-opened">
    <i class="el-icon-close close-icon" @click="closeMobileMenu"></i>
    <transition name="fade" mode="out-in">
      <ul class="mobile-menu-list" v-if="!languageMenuIsVisible" key="1">
        <li @click="goToPage('/')">Home</li>
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
        <li @click="goToPage('basket')">{{ $t('App.basket') }}</li>
        <li @click="toggleMenuLanguage">{{ $t('App.language') }}</li>
        <li @click="goToInstagram">{{ $t('App.followMe') }}</li>
      </ul>
      <ul v-else key="2" class="mobile-menu-list language-list">
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
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    return {
      languageMenuIsVisible: false,
      activePortraits: false,
      activeStreetLife: false,
      activePeopleAtWork: false,
    };
  },
  props: {
    goToInstagram: { type: Function, default: () => {} },
  },
  methods: {
    closeMobileMenu() {
      this.$emit('closeMobileMenu');
      this.languageMenuIsVisible = false;
      this.activePortraits = false;
      this.activeStreetLife = false;
      this.activePeopleAtWork = false;
    },
    goToPage(page) {
      this.$router.push(page).catch(() => {});
      this.closeMobileMenu();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
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
    toggleMenuLanguage() {
      this.languageMenuIsVisible = !this.languageMenuIsVisible;
    },
  }
};
</script>

<style lang="scss" scoped>
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
  font-size: 1.7em;
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