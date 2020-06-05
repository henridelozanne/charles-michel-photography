import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Bio from '../pages/Bio.vue';
import Login from '../pages/Login.vue';
import SendEmailSuccess from '../pages/SendEmailSuccess';
import SendEmailError from '../pages/SendEmailError';
import PortraitsBW from '../pages/Galeries/PortraitsBW.vue';
import PortraitsColour from '../pages/Galeries/PortraitsColour.vue';
import StreetLifeBW from '../pages/Galeries/StreetLifeBW.vue';
import StreetLifeColour from '../pages/Galeries/StreetLifeColour.vue';
import PeopleAtWorkBW from '../pages/Galeries/PeopleAtWorkBW.vue';
import PeopleAtWorkColour from '../pages/Galeries/PeopleAtWorkColour.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home_StreetLifeBW',
        component: StreetLifeBW
      },
      // GALLERIES
      { 
        path: '/people-at-work-bw',
        name: 'PeopleAtWorkBW',
        component: PeopleAtWorkBW 
      },
      { 
        path: '/people-at-work-colour',
        name: 'PeopleAtWorkColour',
        component: PeopleAtWorkColour 
      },
      { 
        path: '/portraits-bw',
        name: 'PortraitsBW',
        component: PortraitsBW 
      },
      { 
        path: '/portraits-colour',
        name: 'PortraitsColour',
        component: PortraitsColour 
      },
      { 
        path: '/street-life-bw',
        name: 'StreetLifeBW',
        component: StreetLifeBW 
      },
      { 
        path: '/street-life-colour',
        name: 'StreetLifeColour',
        component: StreetLifeColour 
      },
      // OTHER PAGES
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
    path: '/login',
    name: 'Login',
    component: Login 
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router;