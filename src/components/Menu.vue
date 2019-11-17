<template>
  <div>
    <div class="container-lg-screen">
      <div class="page-title">
        <div class="page-title-inner-ctn">
          <img class="website-logo" src="../website-pictures/website-logo.jpeg" alt="">
        </div>
      </div>

      <div class="horizontal-bar"></div>

      <div class="menu-outter-ctn">
        <div class="menu-inner-ctn desktop-view is-not-mobile">
          <div>
            <div class="horizontal-bar"></div>

            <el-dropdown>
              <div v-if="isEnglish" class="menu-title gallery">Gallery</div>
              <div v-else-if="isFrench" class="menu-title gallery">Galerie</div>
              <div v-else-if="isTagalog" class="menu-title gallery">Gallery</div>
              <el-dropdown-menu slot="dropdown">
                <div class="horizontal-bar"></div>
                <el-dropdown-item >
                  <div v-if="isEnglish" @click="goToPage('black-and-white')">
                    Black and white
                  </div>
                  <div v-if="isFrench" @click="goToPage('black-and-white')">
                    Noir et blanc
                  </div>
                  <div v-if="isTagalog" @click="goToPage('black-and-white')">
                    Black and white
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div v-if="isEnglish" @click="goToPage('colour')">
                    Colour
                  </div>
                  <div v-if="isFrench" @click="goToPage('colour')">
                    Couleur
                  </div>
                  <div v-if="isTagalog" @click="goToPage('colour')">
                    Kulay
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div v-if="isEnglish" @click="goToPage('street-life')">
                    Street life
                  </div>
                  <div v-if="isFrench" @click="goToPage('street-life')">
                    Scène de vie
                  </div>
                  <div v-if="isTagalog" @click="goToPage('street-life')">
                    Buhay kalsada
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                <div v-if="isEnglish" @click="goToPage('childhood')">
                  Childhood
                </div>
                <div v-if="isFrench" @click="goToPage('childhood')">
                  Enfance
                </div>
                <div v-if="isTagalog" @click="goToPage('childhood')">
                  Kabataan
                </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div v-if="isEnglish" @click="goToPage('portrait')">
                    Portrait
                  </div>
                  <div v-if="isFrench" @click="goToPage('portrait')">
                    Portrait
                  </div>
                  <div v-if="isTagalog" @click="goToPage('portrait')">
                    Larawan
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
              </el-dropdown-menu>
            </el-dropdown>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <div v-if="isEnglish" class="menu-title" @click="goToPage('bio')">About me</div>
            <div v-if="isFrench" class="menu-title" @click="goToPage('bio')">A propos</div>
            <div v-if="isTagalog" class="menu-title" @click="goToPage('bio')">About me</div>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <div v-if="isEnglish" class="menu-title" @click="goToPage('contact')">Contact</div>
            <div v-if="isFrench" class="menu-title" @click="goToPage('contact')">Contact</div>
            <div v-if="isTagalog" class="menu-title" @click="goToPage('contact')">Contact</div>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <el-dropdown>
              <div v-if="isEnglish" class="menu-title gallery">Language</div>
              <div v-else-if="isFrench" class="menu-title gallery">Langue</div>
              <div v-else-if="isTagalog" class="menu-title gallery">Language</div>
              <el-dropdown-menu slot="dropdown">
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div class="language-item-ctn" @click="changeLanguage('english')">
                    <img src="../website-pictures/united-kingdom.png" alt="uk-flag">
                    <span>English</span>
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div class="language-item-ctn" @click="changeLanguage('french')">
                    <img src="../website-pictures/france.png" alt="france-flag">
                    <span>Français</span>
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
                <el-dropdown-item>
                  <div class="language-item-ctn" @click="changeLanguage('tagalog')">
                    <img src="../website-pictures/philippines.png" alt="france-flag">
                    <span>Tagalog</span>
                  </div>
                </el-dropdown-item>
                <div class="horizontal-bar"></div>
              </el-dropdown-menu>
            </el-dropdown>

            <div class="horizontal-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-sm-screen">
      <span class="page-title" @click="openMobileMenu">C. MICHEL PHOTOGRAPHY</span>
      <div class="icon-ctn">
        <i class="el-icon-menu" @click="openMobileMenu"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

  export default {
    name: 'Menu',
    components: {
      'el-dropdown': Dropdown,
      'el-dropdown-menu': DropdownMenu,
      'el-dropdown-item': DropdownItem,
    },
    data() {
      return {
        mobileMenuIsOpened: false,
      }
    },
    props: {
      appLanguage: { type: String, default: 'english' },
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
      changeLanguage(language) {
        this.currentLanguage = language;
        this.$emit('newLanguage', language);
      },
      goToPage(page) {
        this.$router.push(page);
      },
      openMobileMenu() {
        this.$emit('openMobileMenu');
      },
    },
  }
</script>

<style scoped lang="scss">
.icon-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.test {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-sm-screen {
  display: none;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px; 
}

  .container-lg-screen {
    height: 100vh;
    position: relative;
  }

  .el-icon-menu {
    font-size: 25px !important;
  }

  .gallery {
    font-size: 24px !important;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .horizontal-bar {
    width: 100%;
    height: 8px;
    background: radial-gradient(#242424, rgb(0, 0, 0));
  }

  .menu-outter-ctn {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 123px;
    bottom: 0;
  }

  .menu-inner-ctn {
    flex-basis: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .menu-inner-ctn div {
    width: 100%;
    text-align: center;
    -webkit-transition: background-color .5s ease-out;
    -moz-transition: background-color .5s ease-out;
    -o-transition: background-color .5s ease-out;
    transition: background-color .5s ease-out;
    
    &:hover {
      cursor: pointer;
      background: radial-gradient(#292929, rgb(0, 0, 0));
      color: #f0f0f0;
      text-shadow: 3px 3px rgb(0, 0, 0);
    }
  }

  .menu-inner-ctn .menu-title {
    padding: 15px 25px;
    font-size: 1.5em;
    color: #f0f0f0;
    font-family: 'Raleway', sans-serif;
  }

  .michel {
    margin-bottom: 10px !important;
    font-weight: 900 !important;
  }

  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 23px;
    text-align: center;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  // for iPhone 5/SE
  @media screen and (width:320px) {
    .page-title {
      font-size: 19px;
    }  
  }

  .photography {
    font-size: 0.8em;
    font-style: italic;
    font-weight: 600;
  }

  @media screen and (max-width:768px) {

    .container-lg-screen {
      display: none;
    }

    .container-sm-screen {
      display: flex; 
    }

    .menu-outter-ctn {
      align-items: flex-end;
    }

    .menu-inner-ctn {
      flex-basis: 70px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 70px;
      margin-right: 25px;
    }
  }

  @media screen and (min-width:768px) {
    .container-sm-screen {
      display: none;
    } 
  }

  .bold {
    font-size: 1.2em;
  }
</style>

<style lang="scss">
  .el-dropdown {
    color: #dedede !important;
  }

  .el-dropdown-menu .horizontal-bar {
    height: 6px !important;
  }

  .el-dropdown-menu {
    border-radius: 0 !important;
    font-family: 'Raleway', sans-serif;
    background: #0b0b0b !important;
    border: unset !important;
    padding: 0 !important;
    border-left: #dedede !important;
    border-right: #dedede !important;
    z-index: 9999 !important;
  }

  .el-dropdown-menu__item {
    color: rgb(24, 24, 24) !important;
    padding: 10px 30px !important;
    font-size: 16.8px !important;
    color: #f0f0f0 !important;
  }

  .el-dropdown-menu__item:not(.is-disabled):hover {
    background: radial-gradient(#292929, rgb(0, 0, 0)) !important;
    text-shadow: 3px 3px rgb(0, 0, 0);
    color: rgb(255, 255, 255) !important;
  }

  .popper__arrow {
    display: none !important;
  }

  .el-dropdown-menu__item img {
    width: 35px;
    height: 20px;
    border-radius: 2px;
    margin-right: 15px;
  }

  .language-item-ctn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .website-logo {
    width: 200px;
  }
</style>