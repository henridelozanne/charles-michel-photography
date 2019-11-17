<template>
  <div class="container">
    <img class="charles-picture" src="../website-pictures/charles-michel.jpg" alt="charles-michel">
    <div class="bio-content" v-if="isEnglish">
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
    <div class="bio-content" v-if="isFrench">
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
    <div class="bio-content" v-if="isTagalog">
      <p>
        Ipinanganak ako sa Auxere at lumaki sa Orleans kasama ang aking pamilya at kinalaunan nagpunta sa Lille noong ako ay 19 para mag-aral ng Business.
      </p>
      <p>
        Noong 2012, nagdesisyon ako na magbisikleta mula France hanggang iba't ibang parte ng Europe tulad ng Russia hanggang Asia at hanggang makarating ako ng India. Isang taon ang inabot ng aking paglalakbay mula Lille France hanggang Mumbai.
      </p>
      <p>
        Naggsilbing inspirasyon sa kin ang aking paglalakbay para muling umalis at manirahan sa ibang lugar gaya ng Australia kahit pa kakagraduate ko lang noon. Nanatili ako dito ng halos tatlong taon kung saan nagtrabaho ako bilang bartender at sa isang slaughterhouse, construction at maging sa finance.
      </p>
      <p>
        Sa Australia din nagsimula ang hilig ko sa photography. Sa loob ng anim na buwan doon, humanap ako ng resources at nagsimulang magensayo sa mga technical aspects, rules of composition at pag-eedit ng mga litrato
      </p>
      <p>
        Nasa proseso pa ng pagiging maayos ang photography style ko nung dumating ako sa Pilipinas. Sa mag-isang pagtira ko sa Manila ay naisipan kong libutin ito at dito ko natuklasan ang kaawa-awang kalagayan at realidad ng ibang mga tao doon. Pero sa kabila nito, hindi ko malilimot ang kabutihang ipinakita ng mga tao, at ito ay isang bagay na hindi ko pa nakita sa kahit saang lugar. Kaagad akong nagdesisyon na bigyang atensyon ang mga naninirahan sa Manila, sa mga ganap na puno ng buhay at emosyon.
      </p>
      <p>
        Mula nito, nagsilbing lugar na ng buhay ko ang Manila na noong una ay magsisilbing daan ko lamang dapat pauwi ng France.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio',
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
  },
  data() {
    return {
      currentLanguage: 'english',
    };
  },
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
  margin-top: 58px;
  border-radius: 50%;
  border: solid;
  margin-bottom: 30px;
  width: 200px;
  box-shadow: 4px 8px 5px black;
}

.bio-content {
  font-size: 1.3em;
  width: 70%;
  text-align: justify;
  margin-bottom: 30px;

  p {
    margin-bottom: 12px;
  }
}

@media screen and (max-width:768px) {
  .bio-content {
    width: 85%;
  }
}

.flags {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 40px;
    height: 27px;
    border-radius: 6px;
    cursor: pointer;
  }
  img:hover {
    border: 2px solid rgb(233, 233, 233);
  }
}

.france {
  margin: 0 10px;
}

.el-tooltip {
  font-family: Palanquin, sans-serif;
}

@media screen and (max-width:768px) {
  .flags {
    position: relative;
    right: unset;
    margin-top: 40px;
  }

  .france {
    margin: 0 20px;
  }
}
</style>