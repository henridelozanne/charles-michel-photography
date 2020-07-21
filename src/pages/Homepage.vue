<template>
  <div class="homepage">
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'Homepage',
  data() {
    return {
      itemList: [],
    };
  },
  // mounted() {
  //   db.collection('homepage_pictures').get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       const element = doc.data();
  //     });
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100%;
  width: 100%;
}
</style>