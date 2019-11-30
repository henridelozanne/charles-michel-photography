<template>
  <div>
    <div class="container-lg-screen">
      <div class="page-title">
        <div class="page-title-inner-ctn">
          <img class="website-logo" src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/website-logo_p2d3nb.png" alt="">
        </div>
      </div>

      <div class="horizontal-bar"></div>

      <div class="menu-outter-ctn">
        <div class="menu-inner-ctn desktop-view is-not-mobile">
          <div>
            <div class="horizontal-bar"></div>

            <bp-dropdown :trigger="'hover'" align="right" :close-on-click="false" :x="-30" :y="0">
              <template v-if="isEnglish || isTagalog" slot="btn">Gallery</template>
              <template v-else-if="isFrench" slot="btn">Galerie</template>
              <template slot="body">
                <ul>                  
                  <div class="horizontal-bar"></div>
                  <li>
                    <bp-dropdown :trigger="'hover'" :role="'sublist'" :align="'right'" :x="-30" :y="0" class="bp-dropdown-second">
                      <template v-if="isEnglish" slot="btn">Street life</template>
                      <template v-else-if="isFrench" slot="btn">Scène de vie</template>
                      <template v-else slot="btn">Kulay</template>
                      <template slot="body">
                        <ul v-if="isEnglish || isTagalog">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('street-life-bw')">Black and white</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('street-life-colour')">Colour</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                        <ul v-else-if="isFrench">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('street-life-bw')">Noir et blanc</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('street-life-colour')">Couleur</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                      </template>
                    </bp-dropdown>
                  </li>
                  <div class="horizontal-bar"></div>
                  <li>
                    <bp-dropdown :trigger="'hover'" :role="'sublist'" :align="'right'" :x="-30" :y="0" class="bp-dropdown-second">
                      <template slot="btn">Portraits</template>
                      <template slot="body">
                        <ul v-if="isEnglish || isTagalog">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('portraits-bw')">Black and white</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('portraits-colour')">Colour</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                        <ul v-else-if="isFrench">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('portraits-bw')">Noir et blanc</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('portraits-colour')">Couleur</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                      </template>
                    </bp-dropdown>
                  </li>
                  <div class="horizontal-bar"></div>
                  <li>
                    <bp-dropdown :trigger="'hover'" :role="'sublist'" :align="'right'" :x="-30" :y="0" class="bp-dropdown-second">
                      <template v-if="isEnglish || isTagalog" slot="btn">People at work</template>
                      <template v-else slot="btn">Métiers</template>
                      <template slot="body">
                        <ul v-if="isEnglish || isTagalog">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('people-at-work-bw')">Black and white</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('people-at-work-colour')">Colour</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                        <ul v-else-if="isFrench">
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('people-at-work-bw')">Noir et blanc</li>
                          <div class="horizontal-bar"></div>
                          <li class="colour-dd-item smaller-padding" @click="goToPage('people-at-work-colour')">Couleur</li>
                          <div class="horizontal-bar"></div>
                        </ul>
                      </template>
                    </bp-dropdown>
                  </li>
                  <div class="horizontal-bar"></div>
                </ul>
              </template>
            </bp-dropdown>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <div v-if="isEnglish" class="menu-title special-highlight" @click="goToPage('bio')">About me</div>
            <div v-if="isFrench" class="menu-title special-highlight" @click="goToPage('bio')">A propos</div>
            <div v-if="isTagalog" class="menu-title special-highlight" @click="goToPage('bio')">About me</div>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <div v-if="isEnglish" class="menu-title special-highlight" @click="goToPage('contact')">Contact</div>
            <div v-if="isFrench" class="menu-title special-highlight" @click="goToPage('contact')">Contact</div>
            <div v-if="isTagalog" class="menu-title special-highlight" @click="goToPage('contact')">Contact</div>

            <div class="horizontal-bar"></div>
          </div>
          <div>
            <div class="horizontal-bar"></div>

            <bp-dropdown :trigger="'hover'" align="right" :close-on-click="false" :x="-30" :y="0">
              <template v-if="isEnglish || isTagalog" slot="btn">Language</template>
              <template v-else-if="isFrench" slot="btn">Langue</template>
              <template slot="body">
                <ul>
                  <div class="horizontal-bar"></div>
                  <li>
                    <div class="language-item-ctn" @click="changeLanguage('english')">
                      <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/united-kingdom_q8nc2a.png" alt="uk-flag">
                      <span>English</span>
                    </div>
                  </li>
                  <div class="horizontal-bar"></div>
                  <li>
                    <div class="language-item-ctn" @click="changeLanguage('french')">
                      <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141157/Website%20assets/france_lfxmkn.png" alt="france-flag">
                      <span>Français</span>
                    </div>
                  </li>
                  <div class="horizontal-bar"></div>
                  <li>
                    <div class="language-item-ctn" @click="changeLanguage('tagalog')">
                      <img src="https://res.cloudinary.com/charlesmichel-photography/image/upload/v1575141158/Website%20assets/philippines_nwfsbu.png" alt="philippines-flag">
                      <span>Tagalog</span>
                    </div>
                  </li>
                  <div class="horizontal-bar"></div>
                </ul>
              </template>
            </bp-dropdown>

            <div class="horizontal-bar"></div>
          </div>

          <div>
            <div class="horizontal-bar"></div>

            <div v-if="isEnglish || isTagalog" class="menu-title special-highlight" @click="goToInstagram">Follow me</div>
            <div v-if="isFrench" class="menu-title special-highlight" @click="goToInstagram">Me suivre</div>

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

  import Vue from 'vue';
  import Dropdown from 'bp-vuejs-dropdown';
  Vue.use(Dropdown)

  export default {
    name: 'Menu',
    components: {
      'bp-dropdown': Dropdown,
    },
    data() {
      return {
        mobileMenuIsOpened: false,
      }
    },
    props: {
      appLanguage: { type: String, default: 'english' },
      goToInstagram: { type: Function, default: () => {} },
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

  .desktop-view {
    min-height: 450px;
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
      color: #f0f0f0;
      text-shadow: 3px 3px rgb(0, 0, 0);
    }
  }

  .menu-inner-ctn .menu-title {
    padding: 15px 25px;
    font-size: 22px !important;
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
  .bp-dropdown-second span {
    padding: 15px 45px;
  }

  .colour-dd-item {
    padding: 15px 45px;
  }

  .bp-dropdown__btn {
    border: unset;
    height: 56px;
    font-size: 22px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: Raleway, sans-serif;

    svg {
      display: none;
    }
  }

  .bp-dropdown__btn--active {
    background: radial-gradient(#292929, rgb(0, 0, 0)) !important;
    text-shadow: 3px 3px rgb(0, 0, 0);
    color: rgb(255, 255, 255) !important;
  }

  .bp-dropdown__body {
    background: #0b0b0b;
    padding: 0;
    min-width: 0 !important;

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      font-family: Raleway, sans-serif;
      color: rgb(255, 255, 255);

      &:hover {
        background: radial-gradient(#292929, rgb(0, 0, 0)) !important;
        text-shadow: 3px 3px rgb(0, 0, 0);
        color: rgb(255, 255, 255) !important;
      }
    }

    svg {
      display: none;
    }
  }

  .special-highlight:hover {
    background: radial-gradient(#292929, rgb(0, 0, 0)) !important;
    text-shadow: 3px 3px rgb(0, 0, 0);
    color: rgb(255, 255, 255) !important;
  }

  .bp-dropdown__sub--active:hover {
    background: unset !important;
  }

  .smaller-padding {
    padding-left: 10px;
    padding-right: 10px;
  }

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
    padding: 15px 25px;

    img {
      width: 35px;
      height: 20px;
      border-radius: 2px;
      margin-right: 15px;
    }
  }

  .website-logo {
    width: 200px;
  }
</style>