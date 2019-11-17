<template>
  <div class="send-email-ctn">
    <div class="inner-ctn">
      <i class="el-icon-circle-check success-icon"></i>
      <p v-if="isEnglish">Your email has been sent, thank you</p>
      <p v-if="isFrench">L'email a bien été envoyé, merci</p>
      <p v-if="isTagalog">Na-send na ang email, salamat</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendEmailSuccess',
  props: {
    appLanguage: { type: String, default: 'english' },
  },
  computed: {
    isEnglish() {
      return this.appLanguage === 'english';
    },
    isFrench() {
      return this.appLanguage === 'french';
    },
    isTagalog() {
      return this.appLanguage === 'tagalog';
    },
  },
}
</script>

<style lang="scss">
.send-email-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Raleway', sans-serif;

  .success-icon {
    color: rgb(55, 198, 55);
    display: block;
    font-size: 40px;
    margin-right: 20px;
  }

  p {
    font-size: 30px;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.inner-ctn {
  background: rgb(233, 233, 233);
  color: rgb(63, 63, 63);
  padding: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 646px;
}
</style>
