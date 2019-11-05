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
  background: rgb(110, 187, 235);
  width: 180px;
  border-radius: 50%;
  padding: 3px;
  &:hover {
    cursor: pointer;
  }
}
</style>