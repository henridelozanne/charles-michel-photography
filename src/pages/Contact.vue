<template>
  <div class="container">
    <h1>Contact me</h1>
    <div class="horizontal-bar"></div>
    <form action="">
      <h2>Charles Michel</h2>
      <p>+63.92.60.62.65.26</p>
      <p>Manilla, The Philippines</p>
      <el-input v-model="form.name" class="black-input" placeholder="Name*"></el-input>
      <el-input v-model="form.email" class="black-input" placeholder="Email*"></el-input>
      <el-input v-model="form.phone" class="black-input" placeholder="Phone"></el-input>
      <el-input v-model="form.subject" class="black-input" placeholder="Subject"></el-input>
      <el-input v-model="form.message" type="textarea" class="black-input" placeholder="Message*"></el-input>
      <el-button type="primary" @click="sendMail">Send</el-button>
    </form>
    <h1 class="follow-me">Follow me</h1>
    <div class="horizontal-bar"></div>
    <img class="instagram-img" @click="goToInstagram()" src="http://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png" width="82" height="86" alt="instagram">
  </div>
</template>

<script>
import { Input, Button } from 'element-ui';

export default {
  name: 'Contact',
  components: {
    'el-input': Input,
    'el-button': Button,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    goToInstagram() {
      var win = window.open('https://www.instagram.com/charles___michel/?hl=fr', '_blank');
      win.focus();
    },
    sendMail() {
      console.log('sendMail called');
    },
  },
}
</script>

<style lang="scss">
input {
    color: black !important;
}

textarea {
    color: black !important;
    min-height: 200px !important;
}
</style>

<style lang="scss" scoped>
h1 {
  margin-top: 50px;
}

.horizontal-bar {
  width: 50%;
  margin: auto;
  height: 3px;
  background: radial-gradient(#242424, rgb(0, 0, 0));
}

.horizontal-bar:last-of-type {
  margin-bottom: 40px;
}

.instagram-img {
  cursor: pointer;
  width: 86px;
}

form {
  width: 50%;
  margin: 40px auto 0 auto;
  min-width: 400px;


  .el-input {
    margin-bottom: 20px;

    ::placeholder {
      color: rgb(43, 43, 43);
      opacity: 1;
    }
  }

  .el-textarea {
    margin-bottom: 20px;

    ::placeholder {
      color: rgb(43, 43, 43);
      opacity: 1;
    }
  }

  .el-button {
    float: right;
    font-family: 'caviar dreams' !important;
  }
}

.follow-me {
  clear: both;
  margin-top: 150px;
}

.container {
  text-align: center;
  font-family: 'caviar dreams' !important;
  margin-bottom: 320px;

  img {
    margin: auto;
  }
}
</style>