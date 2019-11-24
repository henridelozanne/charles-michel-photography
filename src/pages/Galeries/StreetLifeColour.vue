<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

export default {
  name: 'StreetLifeColour',
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
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597214/Street%20life/Colours/IMG_4394-2_e9sw6u.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597211/Street%20life/Colours/IMG_8457_mo5aj0.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597207/Street%20life/Colours/IMG_8988_dmm9nr.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597202/Street%20life/Colours/E_adp4pw.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597201/Street%20life/Colours/IMG_5405_tuiz56.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597200/Street%20life/Colours/IMG_3641-2_cw1mle.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597198/Street%20life/Colours/IMG_5781-2_cqlyrr.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597197/Street%20life/Colours/IMG_5771_vv8dal.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597197/Street%20life/Colours/IMG_9956-1_prbqk0.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597194/Street%20life/Colours/IMG_8142_cjwjnf.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597193/Street%20life/Colours/IMG_3686-2_ghrrlu.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597192/Street%20life/Colours/IMG_8737-2_rwejrc.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597191/Street%20life/Colours/IMG_3613_ow9yy3.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597188/Street%20life/Colours/IMG_4776_nkmw90.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597183/Street%20life/Colours/IMG_5245_ktenfe.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597168/Street%20life/Colours/IMG_2918-1_uqnmk1.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597161/Street%20life/Colours/IMG_4738_fh4ndl.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597161/Street%20life/Colours/IMG_3240_cj1p4c.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597157/Street%20life/Colours/IMG_4972-2_1_uo3lgt.jpg'
        ],
    };
  },
}
</script>
