<template>
  <div class="container">
    <div class="page-title">
      <div><p class="bold michel">CHARLES MICHEL</p><p class="photography">PHOTOGRAPHY</p></div>
    </div>
    <div class="horizontal-bar"></div>
    <div class="menu-outter-ctn">
      <div class="menu-inner-ctn desktop-view">
        <div>
          <div class="horizontal-bar"></div>
          
          <el-dropdown trigger="click">
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
      </div>
      <div class="menu-inner-ctn smartphone-view">
        <i class="el-icon-menu"></i>
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
      goToPage(page) {
        this.$router.push(page);
      },
    },
  }
</script>

<style scoped lang="scss">
  .gallery {
    font-size: 24px !important;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .page-title {
    flex-basis: 180px;
    text-align: center;
    color: rgb(255, 255, 255);
  }

  .horizontal-bar {
    width: 100%;
    height: 8px;
    background: radial-gradient(#242424, rgb(0, 0, 0));
  }

  .menu-outter-ctn {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .smartphone-view {
    display: none;
  }


  /* Trouver une meilleure façon de centrer */
  i {
    font-size: 1.7em;
    margin-top: 22px;
    margin-left: 22px;
  }

  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 1.4em;
  }

  .photography {
    font-size: 0.8em;
    font-style: italic;
    font-weight: 600;
  }

  @media screen and (max-width:768px) {
    .container {
      flex-direction: row;
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

    .smartphone-view {
      display: block;
    }

    .desktop-view {
      display: none;
    }

    .page-title {
      font-size: 0.7em;
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
    // font-family: Palanquin, sans-serif;
    font-family: 'Raleway', sans-serif;
    background: #0b0b0b !important;
    border: unset !important;
    padding: 0 !important;
    border-left: #dedede !important;
    border-right: #dedede !important;
  }

  .el-dropdown-menu__item {
    color: rgb(24, 24, 24) !important;
    padding: 10px 30px !important;
    font-size: 16.8px !important;
    // border-bottom: 1px solid rgb(228, 229, 231);
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
</style>