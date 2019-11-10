<template>
  <div class="container">
    <h1 class="contact-me">Contact me</h1>
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
    <div class="follow-me-container" @click="goToInstagram()" >
      <h1 class="follow-me">Follow me</h1>
      <div class="horizontal-bar"></div>
      <img class="instagram-img" src="http://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png" alt="instagram">
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
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
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.subject = '';
      this.form.message = '';
    },
    sendMail() {
      var templateParams = {
          message_html: `subject: ${this.form.subject} | message: ${this.form.message}`,
          from_name: this.form.name,
          reply_to: `email: ${this.form.email}, phone: ${this.form.phone}`,
      };
      const that = this;
      emailjs.send('gmail', 'template_TctJmAgp', templateParams, 'user_budaC2tozA2cUUxQ2SI7M')
             .then(function() {
               that.resetForm();
               that.$router.push('send-email-success');
             }, function() {
               that.resetForm();
               that.$router.push('send-email-error');
             });
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
.contact-me {
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

form {
  width: 50%;
  margin: 40px auto 0 auto;
  min-width: 400px;
  margin-bottom: 150px;


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

.follow-me-container {
  background: radial-gradient(#eeeeee, rgb(198, 198, 198));
  margin-bottom: 150px !important;
  border-radius: 50%;
  border: 4px solid rgb(79, 72, 211);
  width: 300px;
  height: 300px;
  position: relative;
  margin:auto;
  clear: both;
  cursor: pointer;

  .follow-me {
    position: absolute;
    top: 63px;
    left: 79px;
    color: rgb(40, 40, 40);
    font-family: Palanquin, sans-serif;
  }

  .horizontal-bar {
    margin: unset !important;
    width: 250px !important;
    position: absolute;
    top: 150px;
    left: 25px;
    height: 4px;
    background: rgb(62, 62, 62);
  }

  .instagram-img {
    position: absolute;
    bottom: 47px;
    left: 113px;
    cursor: pointer;
    width: 75px;
  }

  &:hover {
    border: 4px solid rgb(211, 104, 72);
  }
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