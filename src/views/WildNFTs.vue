<template>
  <div id="wild-container">
    <h1>WildNFTs</h1>
    <p>Coming Soon...</p>
  </div>
</template>

<script>

export default {
  name: 'WildNFTs',
}
</script>

<style lang="scss">

#wild-container {
  padding: 300px 0;

  background-size: fill; 
  background-repeat: repeat; 
  background-attachment: fixed;
  animation: scroll 70s linear infinite;
  background: url("./assets/img/lion.webp"), #111111;
  letter-spacing: 3px;
  h1 {
    font-family: wildFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 3em;
      }
    @media (min-width: 750px) {
      font-size: 6em;
    }
  }
  p {
    padding: 0px 2%;
    font-size: 1em;
    @media (min-width: 400px) {
        font-size: 1em;
        padding: 0px 5%;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
      padding: 0px 10%;
    }
  }
}

@keyframes scroll {
   100%{
    background-position:0px -3000px;
  }
}

@media (prefers-reduced-motion) {
  .wrapper {
    animation: scroll 200s linear infinite;
  }
}

@media (min-width: 670px) {
  .title {
    font-size: 5rem;
  }
}
</style>
