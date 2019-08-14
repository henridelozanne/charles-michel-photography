<template>
  <div id="app">
      <div class="menu-ctn-ctn">
        <app-menu class="menu"/>
      </div>
      <app-main class="main"/>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">    
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
  </div>
</template>

<script>

import Menu from './components/Menu.vue';
import Main from './components/Main.vue';

export default {
  name: 'app',
  components: {
    'app-menu': Menu,
    'app-main': Main,
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