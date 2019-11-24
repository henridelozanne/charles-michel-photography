<template>
  <div>
    <app-galery :imageList="imageList" @fullImgIsVisible="fullImgIsVisible" @fullImgIsNotVisible="fullImgIsNotVisible"/>
  </div>
</template>

<script>
import Galery from '../../components/Galery';

export default {
  name: 'StreetLifeBW',
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
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597194/Street%20life/Black%20and%20white/IMG_4388-1_e4jrdb.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597192/Street%20life/Black%20and%20white/IMG_3874-2_gni9jd.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597190/Street%20life/Black%20and%20white/IMG_5781-2-2_u61plp.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597173/Street%20life/Black%20and%20white/IMG_8737_ni02jf.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597156/Street%20life/Black%20and%20white/IMG_4394_vsmv42.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597153/Street%20life/Black%20and%20white/IMG_4776-2_lzofvl.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597151/Street%20life/Black%20and%20white/IMG_8988-2_t1pqsj.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597147/Street%20life/Black%20and%20white/IMG_4972_1_h19z7i.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597146/Street%20life/Black%20and%20white/CCBC_sgvolw.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597145/Street%20life/Black%20and%20white/IMG_5245-2_wvhoed.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597144/Street%20life/Black%20and%20white/IMG_8457-2_y5znw8.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597144/Street%20life/Black%20and%20white/IMG_8142-2_fh4gjl.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597144/Street%20life/Black%20and%20white/untitled-7137_uhakb1.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597143/Street%20life/Black%20and%20white/IMG_3686_ln1vrv.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597140/Street%20life/Black%20and%20white/IMG_3613-2_rlinlt.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597139/Street%20life/Black%20and%20white/IMG_3641_quejf4.jpg',
          'https://res.cloudinary.com/charlesmichel-photography/image/upload/v1574597138/Street%20life/Black%20and%20white/IMG_5770-2_1_uquuwx.jpg'
        ],
    };
  },
}
</script>
