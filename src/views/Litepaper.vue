<template>

  <div id="litepaper">
    <div id="img-container">
      <img src="./assets/pdf/lp-1.webp" alt="">
      <img src="./assets/pdf/lp-2.webp" alt="">
      <img src="./assets/pdf/lp-3.webp" alt="">
      <img src="./assets/pdf/lp-4.webp" alt="">
      <img src="./assets/pdf/lp-5.webp" alt="">
      <img src="./assets/pdf/lp-6.webp" alt="">
    </div>
  </div>

</template>

<script>


export default {
  name: 'Litepaper',

}
</script>

<style lang="scss" scoped>

#litepaper {
  padding: 50px 0;

  background-size: fill; 
  background-repeat: repeat; 
  background-attachment: fixed;
  animation: scroll 70s linear infinite;
  background: url("./assets/img/zeb.webp"), #111111;
  
  #img-container {
    width: 100%;

    img {
      max-width: 95%;
      height: auto;
      padding-bottom: 10px;
    }
  }

}



</style>