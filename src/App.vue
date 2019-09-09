<template>
  <div id="app">
      <div class="menu-ctn-ctn">
        <app-menu class="menu"/>
      </div>
      <router-view class="main"/>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">    
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
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
}
</script>

<style>
body {
  margin: 0;
  background: rgb(24, 24, 24);
  color: rgb(222, 222, 222);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}

.menu {
  position: fixed;
  width: 18%;
  min-width: 240px;
}

.menu-ctn-ctn {
  width: 18%;
  min-width: 240px;
  height: 100vh;
}

.main {
  width: 82%;
}

@media screen and (min-width: 769px) {
  .menu {
    height: 100vh;
  }

  .menu-ctn-ctn {
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  #app {
    flex-direction: column;
  }

  .menu {
    flex-basis: 70px;
    height: 70px;
    width: 100%;
    background: rgb(24, 24, 24);
  }

  .menu-ctn-ctn {
    width: 100%;
    height: 70px;
    background: rgb(24, 24, 24);
  }

  .main {
  width: 100%;
}
}
</style>

<style lang="scss">
@import 'src/style/main.scss';
</style>