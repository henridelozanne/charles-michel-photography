<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid v-if="loginIsVisible"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="loginData.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    v-model="loginData.password"
                    :append-icon="passwordIsVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordIsVisible = !passwordIsVisible"
                    :type="passwordIsVisible ? 'text' : 'password'"
                    @keyup.enter="login"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
            <p class="mt-5 text-center">Don't have an account ? <a href="#" @click="loginIsVisible=!loginIsVisible">Sign-up</a></p>
          </v-col>
        </v-row>
      </v-container>
      <v-container
        class="fill-height"
        fluid v-else
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Sign up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="First name"
                    name="firstName"
                    type="text"
                    v-model="signUpData.firstName"
                  ></v-text-field>

                  <v-text-field
                    label="Last name"
                    name="lastName"
                    type="text"
                    v-model="signUpData.lastName"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    type="text"
                    v-model="signUpData.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :append-icon="passwordIsVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordIsVisible = !passwordIsVisible"
                    :type="passwordIsVisible ? 'text' : 'password'"
                    v-model="signUpData.password"
                    @keyup.enter="signUp"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signUp">Sign up</v-btn>
              </v-card-actions>
            </v-card>
            <p class="mt-5 text-center">Already have an account ? <a href="#" @click="loginIsVisible=!loginIsVisible">Login</a></p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { fb, db } from '../firebase.js'

export default {
  name: 'Login',
  data() {
    return {
      passwordIsVisible: false,
      loginIsVisible: true,
      loginData: {
        email: undefined,
        password: undefined,
      },
      signUpData: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    login() {
      fb
        .auth()
        .signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(() => {
          this.$router.replace('/admin')
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    signUp() {
      fb
        .auth()
        .createUserWithEmailAndPassword(this.signUpData.email, this.signUpData.password)
        .then((user) => {
          db.collection('profiles')
            .doc(user.user.uid)
            .set({
              firstName: this.signUpData.firstName,
              lastName: this.signUpData.lastName,
            })
            .then(() => {})
            .catch((error) => console.log(error));

          this.$router.replace('admin');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  }
};
</script>

<style scoped>
.buttons-ctn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}
</style>