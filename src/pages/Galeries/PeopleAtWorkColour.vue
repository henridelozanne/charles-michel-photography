<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

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
  data() {
    return {
      imageList: [
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597147/People%20at%20work/Colour/IMG_4388-1_2_xcssgg.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597138/People%20at%20work/Colour/IMG_7844_x32wvy.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597136/People%20at%20work/Colour/IMG_7836_wdatdr.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597136/People%20at%20work/Colour/IMG_3383_rmsjk1.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597133/People%20at%20work/Colour/IMG_3379_jmgid4.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597132/People%20at%20work/Colour/IMG_2938-2_1_aagzr3.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597130/People%20at%20work/Colour/IMG_5382-2_oa2i9z.jpg'
        ],
    };
  },
}
</script>