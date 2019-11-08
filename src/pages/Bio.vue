<template>
  <div class="container">
    <img class="charles-picture" src="../website-pictures/charles-michel.jpg" alt="charles-michel">
    <div class="bio-content" v-if="currentLanguage === 'english'">
      <p>
        Born in Auxerre, I spent my childhood with my family in Orleans and at the age of 19 I went to Lille to study business.
      </p>
      <p>
        In 2012, I decided to embark on an epic 15,000-kilometer journey by bicycle from France through Europe, Russia and Asia to India. The whole journey taking a year to complete the circuit from Lille to Mumbai.
      </p>
      <p>
        Although freshly graduated, I was still filled with images of my bike trip so I decided to go and live in Australia. I stayed there for almost three years, taking on all kinds of jobs, bartenders, slaughterhouses, construction and finance.
      </p>
      <p>
        It was also in Australia that I started to develop my passion for photography. During my last 6 months there I looked for resources and began training myself on the technical aspects, the rules of composition and editing.
      </p>
      <p>
        My photographic style was still being refined when I arrived in the Philippines. Alone in the streets of Manila I explored the city in every nook and cranny finding myself confronted with the harsh reality of life on the edges. However, at the same time I experienced beautiful meetings there discovering a people of kindness and generosity that I had not seen anywhere else. Very quickly I decided to focus my work on the inhabitants of Manila, on scenes of life and emotion. Manila, which was originally just a place of passage on my way back to France, has become my place of life.
      </p>
    </div>
    <div class="bio-content" v-else>
      <p>
        Auxerrois de naissance, j’ai vécu toute mon adolescence avec ma famille à Orléans et en 2008 à l’âge de 19 ans je suis parti à Lille pour y faire des études de commerce. 
      </p>
      <p>
        En 2012, j’ai décidé d’entamer une tour du monde à vélo de 15 000 kilomètres depuis la France en passant par les pays de l'Est, la Chine, le Vietnam, le Cambodge jusqu'en Inde et ce pendant un an. 
      </p>
      <p>
        En 2014, bien que fraîchement diplômé, j’étais encore rempli d’images de mon voyage à vélo et j’ai donc décidé de partir vivre en Australie. Je resterai finalement dans ce pays pendant près de trois ans, et j’y effectuerai tout type de boulot, de barman en passant par un abattoir, la construction et la finance. 
      </p>
      <p>
        C’est également en Australie que va se développer ma passion pour la photo. Durant mes 6 derniers mois je vais rechercher des sources et me former sur les aspects techniques, sur les règles de composition et sur l’édition.
      </p>
      <p>
        Mon style photographique va s’affiner lors de mon arrivée aux Philippines. Seul dans les rues de Manille j’explore cette ville dans ses moindres recoins. Je me retrouve confronté à une réalité sur place souvent très dure, mais j’y fais également de belles rencontres. Je découvre un peuple d’une gentillesse et d’une générosité que je n’avais vu nulle part ailleurs. Très rapidement je vais décider d’orienter mon travail sur les habitants, sur des scènes de vie et sur l’émotion. 
      </p>
      <p>
        Cela fait maintenant plus de deux ans que je suis aux Philippines. Manila qui n’était à l’origine qu’un lieu de passage sur mon chemin de retour en France est devenu mon lieu de vie.
      </p>
    </div>
    <div class="flags">
      <el-tooltip content="English" :open-delay="1500">
        <img src="../website-pictures/united-kingdom.png" alt="uk-flag" @click="changeLanguage('english')">
      </el-tooltip>
      <el-tooltip content="Français" :open-delay="1500">
        <img src="../website-pictures/france.png" alt="france-flag" @click="changeLanguage('french')">
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'Bio',
  components: {
    'el-tooltip': Tooltip,
  },
  data() {
    return {
      currentLanguage: 'english',
    };
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language;
    },
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.charles-picture {
  margin-top: 80px;
  border-radius: 50%;
  border: solid;
  margin-bottom: 30px;
  width: 200px;
  box-shadow: 4px 8px 5px black;
}

.bio-content {
  font-size: 1.1em;
  width: 70%;
  text-align: justify;
  margin-bottom: 30px;

  p {
    margin-bottom: 12px;
  }
}

.flags {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 40px;
    border-radius: 6px;
    cursor: pointer;
  }
  img:first-of-type {
    margin-right: 10px;
  }
  img:hover {
    border: 2px solid rgb(233, 233, 233);
  }
}

.el-tooltip {
  font-family: Palanquin, sans-serif;
}
</style>