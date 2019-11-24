<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

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
  data() {
    return {
      imageList: [
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595722/Portraits/couleur/IMG_9872-1WEB2_wb5i12.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595719/Portraits/couleur/IMG_9636-2_ih9aix.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595714/Portraits/couleur/IMG_9275-2_hsbydb.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574595712/Portraits/couleur/IMG_6702-2_fzvgxb.jpg'
        ],
    };
  },
}
</script>