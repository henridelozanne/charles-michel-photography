<template>
  <div class="container">
    <h1 class="contact-me">{{ $t('Contact.contactMe') }}</h1>
    <div class="horizontal-bar"></div>
    <form action="">
      <h2>Charles Michel</h2>
      <p>+63.92.60.62.65.26</p>
      <p class="manila">{{ $t('Contact.manilaPhil') }}</p>
      <el-input v-model="form.name" class="black-input" :placeholder="$t('Contact.name')"></el-input>
      <el-input v-model="form.email" class="black-input" placeholder="Email*"></el-input>
      <el-input v-model="form.phone" class="black-input" :placeholder="$t('Contact.phone')"></el-input>
      <el-input v-model="form.subject" class="black-input" :placeholder="$t('Contact.subject')"></el-input>
      <el-input v-model="form.message" type="textarea" class="black-input form-textarea" :placeholder="$t('Contact.message')"></el-input>
      <div class="send-btn-ctn">
        <el-button class="send-form" @click="sendMail">{{ $t('Contact.send') }}</el-button>
      </div>
    </form>
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
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.subject = '';
      this.form.message = '';
    },
    sendMail() {
      const templateParams = {
          message_html: `Objet: ${this.form.subject} \n Message: ${this.form.message}`,
          from_name: this.form.name,
          reply_to: `Email: ${this.form.email} \n Téléphone: ${this.form.phone}`,
      };
      const that = this;

      emailjs
        .send('default_service', 'cmp_email_template', templateParams, 'user_budaC2tozA2cUUxQ2SI7M')
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

.send-form {
  background: white;
  color: rgb(43, 43, 43);
}

.container {
  text-align: center;
  font-family: 'Raleway', sans-serif !important;

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