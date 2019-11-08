<template>
  <div class="container">
    <img class="charles-picture" src="../website-pictures/charles-michel.jpg" alt="charles-michel">
    <p class="bio-content">
      <br>
      Born in Auxerre, I spent my childhood with my family in Orleans and at the age of 19 I went to Lille to study business.
      <br>
      In 2012, I decided to embark on an epic 15,000-kilometer journey by bicycle from France through Europe, Russia and Asia to India. The whole journey taking a year to complete the circuit from Lille to Mumbai.
      <br>
      Although freshly graduated, I was still filled with images of my bike trip so I decided to go and live in Australia. I stayed there for almost three years, taking on all kinds of jobs, bartenders, slaughterhouses, construction and finance.
      <br>
      It was also in Australia that I started to develop my passion for photography. During my last 6 months there I looked for resources and began training myself on the technical aspects, the rules of composition and editing.
      <br>
      My photographic style was still being refined when I arrived in the Philippines. Alone in the streets of Manila I explored the city in every nook and cranny finding myself confronted with the harsh reality of life on the edges. However, at the same time I experienced beautiful meetings there discovering a people of kindness and generosity that I had not seen anywhere else. Very quickly I decided to focus my work on the inhabitants of Manila, on scenes of life and emotion. Manila, which was originally just a place of passage on my way back to France, has become my place of life.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Bio',
}
</script>

<style scoped lang="scss">
.charles-picture {
  border-radius: 50%;
  border: solid;
  margin-bottom: 20px;
  width: 200px;
}

.bio-content {
  float: left;
  font-size: 1.1em;
  width: 900px;
  text-align: justify;

  &span {
    margin-bottom: 30px;
  }
}

.container {
  height: 100vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>