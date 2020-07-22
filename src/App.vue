<template>
  <div id="app">
    <router-view />
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link href="https://fonts.googleapis.com/css?family=Palanquin|Raleway:300&display=swap" rel="stylesheet">
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'app',
}
</script>

