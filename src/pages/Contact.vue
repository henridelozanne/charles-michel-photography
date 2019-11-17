<template>
  <div class="container">
    <h1 v-if="isEnglish || isTagalog" class="contact-me">Contact me</h1>
    <h1 v-if="isFrench" class="contact-me">Me contacter</h1>
    <div class="horizontal-bar"></div>
    <form action="">
      <h2>Charles Michel</h2>
      <p>+63.92.60.62.65.26</p>
      <p v-if="isEnglish" class="manila">Manila, The Philippines</p>
      <p v-if="isFrench" class="manila">Manille, Philippines</p>
      <p v-if="isTagalog" class="manila">Manilla, Pilipinas</p>
      <el-input v-model="form.name" class="black-input" :placeholder="namePlaceholder"></el-input>
      <el-input v-model="form.email" class="black-input" placeholder="Email*"></el-input>
      <el-input v-model="form.phone" class="black-input" :placeholder="phonePlaceholder"></el-input>
      <el-input v-model="form.subject" class="black-input" :placeholder="subjectPlaceholder"></el-input>
      <el-input v-model="form.message" type="textarea" class="black-input form-textarea" :placeholder="messagePlaceholder"></el-input>
      <div class="send-btn-ctn">
        <el-button v-if="isEnglish" class="send-form" @click="sendMail">Send</el-button>
        <el-button v-if="isFrench" class="send-form" @click="sendMail">Envoyer</el-button>
        <el-button v-if="isTagalog" class="send-form" @click="sendMail">Send</el-button>
      </div>
    </form>
    <div class="follow-me-container" @click="goToInstagram()" >
      <h1 v-if="isEnglish" class="follow-me">Follow me</h1>
      <h1 v-if="isFrench" class="follow-me">Me suivre</h1>
      <h1 v-if="isTagalog" class="follow-me">Follow me</h1>
      <div class="horizontal-bar"></div>
      <img class="instagram-img" src="http://www.procop.com/web/wp-content/uploads/2015/07/instagram-glyph-1-png-transparent-logo-2.png" alt="instagram">
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
    namePlaceholder() {
      if (this.isEnglish) {
        return 'Name*';
      } else if (this.isFrench) {
        return 'Nom*';
      } else return 'Pangalan*';
    },
    phonePlaceholder() {
      if (this.isEnglish) {
        return 'Phone';
      } else if (this.isFrench) {
        return 'Téléphone';
      } else return 'Telepono';
    },
    subjectPlaceholder() {
      if (this.isEnglish) {
        return 'Subject';
      } else if (this.isFrench) {
        return 'Objet';
      } else return 'Subject';
    },
    messagePlaceholder() {
      if (this.isEnglish) {
        return 'Message*';
      } else if (this.isFrench) {
        return 'Message*';
      } else return 'Mensahe*';
    },
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
    font-weight: 700 !important;
}

textarea {
    color: black !important;
    min-height: 200px !important;
    font-weight: 700 !important;
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
      font-weight: 700 !important;
      opacity: 1;
      font-family: Palanquin, sans-serif !important;
    }

    input {
      color: rgb(43, 43, 43);
    }
  }

  .el-textarea {
    margin-bottom: 20px;

    ::placeholder {
      color: rgb(43, 43, 43);
      font-weight: 700 !important;
      opacity: 1;
    }
  }

  .el-button {
    float: right;
    font-family: 'Raleway', sans-serif !important;
    font-weight: 900 !important;
  }
}

.follow-me-container {
  background: white;
  margin-bottom: 150px !important;
  border-radius: 50%;
  border: 4px solid rgb(62, 62, 62);
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
    left: 21px;
    height: 4px;
  }

  .instagram-img {
    position: absolute;
    bottom: 47px;
    left: 113px;
    cursor: pointer;
    width: 75px;
  }
}

.send-form {
  background: white;
  color: rgb(43, 43, 43);
}

.container {
  text-align: center;
  font-family: 'Raleway', sans-serif !important;
  margin-bottom: 320px;

  img {
    margin: auto;
  }
}

.manila {
  margin-bottom: 40px;
}

@media screen and (max-width:500px) {
  form {
    min-width: 388px;
  }
}

@media screen and (max-width:380px) {
  form {
    min-width: 350px;
  }
}

@media screen and (max-width:320px) {
  form {
    min-width: 300px;
  }
}

@media screen and (max-width:768px) {
  .black-input {
    width: 75%;
  }

  .form-textarea {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .send-btn-ctn {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
}

@media screen and (min-width:500px) and (max-width:768px) {
  .black-input {
    width: 100%;
  }

  .send-btn-ctn {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
}

@media screen and (min-width:768px) {
  form {
    width: 50%;
  }
}
</style>