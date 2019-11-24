<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

export default {
  name: 'PeopleAtWorkBW',
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
  data() {
    return {
      imageList: [
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597136/People%20at%20work/Black%20and%20white/IMG_7844-4_rttmqr.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597132/People%20at%20work/Black%20and%20white/IMG_2938_1_orpfvw.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597129/People%20at%20work/Black%20and%20white/IMG_2476-1_1_hswp8v.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597128/People%20at%20work/Black%20and%20white/IMG_5382_yvoftv.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597126/People%20at%20work/Black%20and%20white/IMG_7836-2_jpghnp.jpg'
        ],
    };
  },
}
</script>