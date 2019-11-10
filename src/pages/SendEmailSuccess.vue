<template>
  <div class="send-email-ctn">
    <div class="inner-ctn">
      <i class="el-icon-circle-check success-icon"></i>
      <p>L'email a bien été envoyé, merci</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendEmailSuccess',
}
</script>

<style lang="scss">
.send-email-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

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
}
</style>
