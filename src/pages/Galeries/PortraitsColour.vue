<template>
  <div>
    <app-galery :productList="productList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';
import { db } from '../../firebase';

export default {
  name: 'PortraitsColour',
  components: {
    'app-galery': Galery,
  },
  methods: {
    fullImgIsVisible() {
      this.$emit('fullImgIsVisible');
    },
    fullImgIsNotVisible() {
      this.$emit('fullImgIsNotVisible');
    },
  },
  mounted() {
    db.collection('portraits_colour').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.productList.push(doc.data());
      });
    });
  },
  data() {
    return {
      productList: [],
    };
  },
}
</script>