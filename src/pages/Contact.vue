<template>
  <div>
    <h1>Contact Page</h1>
    <img class="instagram-img" @click="goToInstagram()" src="../website-pictures/instagram-picture.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    goToInstagram() {
      var win = window.open('https://www.instagram.com/myshutterbag/?hl=fr', '_blank');
      win.focus();
    },
  },
}
</script>

<style lang="scss">
.instagram-img {
  background: rgb(233, 233, 233);
  width: 140px;
  border-radius: 50%;
  padding: 3px;
  -webkit-transition: background-color .5s ease-out;
  -moz-transition: background-color .5s ease-out;
  -o-transition: background-color .5s ease-out;
  transition: background-color .5s ease-out;
  &:hover {
    cursor: pointer;
    background-color: rgb(68, 222, 176);
  }
}
</style>