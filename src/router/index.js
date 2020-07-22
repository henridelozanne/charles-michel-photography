import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Homepage from '../pages/Homepage.vue';
import Contact from '../pages/Contact.vue';
import Bio from '../pages/Bio.vue';
import Gallery from '../pages/Gallery.vue';
import SendEmailSuccess from '../pages/SendEmailSuccess';
import SendEmailError from '../pages/SendEmailError';
import Login from '../pages/Login.vue';
import MustBeAdmin from '../pages/MustBeAdmin.vue';
import Admin from '../pages/Admin.vue';
import Overview from '../pages/Overview.vue';
import Products from '../pages/Products.vue';
import Profile from '../pages/Profile.vue';

import { fb, db } from '../firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
      { 
        path: '/contact',
        name: 'Contact',
        component: Contact 
      },
      { 
        path: '/bio',
        name: 'Bio',
        component: Bio 
      },
      { 
        path: '/send-email-success',
        name: 'SendEmailSuccess',
        component: SendEmailSuccess 
      },
      { 
        path: '/send-email-error',
        name: 'SendEmailError',
        component: SendEmailError 
      },
    ],
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/login',
    name: 'Login',
    component: Login 
  },
  {
    path: '/mustbeadmin',
    name: 'MustBeAdmin',
    component: MustBeAdmin 
  },
  {
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'AdminOverview',
        component: Overview
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (!requiresAuth) next()
  else if (!currentUser) next('/login')
  else {
    db.collection('profiles').doc(currentUser.uid)
                    .get()
                    .then(doc => {
                      const isAdmin = doc.data().admin;
                      if (isAdmin) next();
                      else next('/mustbeadmin')
                    })
                    .catch((err) => {
                      // eslint-disable-next-line
                      console.log(err);
                    })
  }
})

export default router;