<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <div class="sidebar-brand">
            <router-link to="/admin" class="company-name">
              <span>Charles Michel<br>Photography</span>
            </router-link>
          </div>
          <div class="sidebar-header">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="../img/avatar.png" alt="User picture">
            </div>
            <div class="user-info">
              <span class="user-name">{{firstName}}
                <strong>{{lastName}}</strong>
              </span>
              <span class="user-role"> {{email}} </span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <div class="sidebar-menu">
            <ul>
              <li>
                <router-link to="/admin">
                  <i class="fa fa-home"></i>
                  <span>Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fa fa-tags"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                  <a href="#" @click="logout()">
                      <i class="fa fa-power-off"></i>
                      <span>Logout</span>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main class="page-content">
          <router-view @logout="logout" :userFirstName="firstName"/>
      </main>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </div>
  </div>
</template>

<script>
import '../assets/admin.scss';
import 'bootstrap';
import 'popper.js'
import { fb, db } from '../firebase';

export default {
  name: "admin",
  data(){
    return{
      firstName: undefined,
      lastName: undefined,
      email: undefined,
    };
  },
  methods:{
    logout() {
      fb.auth().signOut()
        .then(() => {
          this.$router.replace('/');
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err);
        })
    },
  },
  mounted() {
    const user = fb.auth().currentUser;
    if (user) {
      this.email = user.email;
      db.collection('profiles').doc(user.uid)
                    .get()
                    .then(doc => {
                      this.firstName = doc.data().firstName;
                      this.lastName = doc.data().lastName;
                    })
                    .catch((err) => {
                      // eslint-disable-next-line
                      console.log(err);
                    })
    }
  },
};
</script>

<style lang="scss">
.admin {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  .company-name {
    text-align: center;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    margin: 50px 0 90px;
    border-color: #464646;
    border-top: 1px solid #464646;
    border-bottom: 1px solid #464646;

    .user-pic {
      align-self: flex-start;

      img {
        border-radius: 50%;
        width: 45px;
        height: 45px;
      }
    }

    .user-info {
      text-align: left;
      margin-left: 20px;
    }
  }

  .justify-content-around {
    justify-content: space-around;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
  }

  ul {
    list-style-type: unset;
  }
}

.page-content {
  height: 100%;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
}

.sidebar-brand {
  margin-top: 30px;
}
</style>