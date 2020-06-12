<template>
  <div>
    <app-galery :productList="productList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';
import { db } from '../../firebase';

export default {
  name: 'PeopleAtWorkColour',
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
    db.collection('people_at_work_colour').get().then((querySnapshot) => {
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