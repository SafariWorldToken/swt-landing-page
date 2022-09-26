<template>
  <div id="vaults_container">
    <div id="grid">
      <ul><li><SWT4SWT/></li></ul>
      <ul><li><SWTLP/></li></ul>
    </div>
  </div>
</template>

<script>

import SWT4SWT from './components/vaults/SWT4SWT.vue'
import SWTLP from './components/vaults/SWTLP.vue'
export default {
    name: "vaults",
    components: {
        SWT4SWT,
        SWTLP
    }
}
</script>

<style lang="scss" scoped>


#vaults_container {
  
  padding: 50px 0;

  background-size: fill; 
  background-repeat: repeat; 
  background-attachment: fixed;
  animation: scroll 70s linear infinite;
  background: url("./assets/img/rust.webp"), #111111;
  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }
  #grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 0px 100px 0px;
  @media (min-width: 400px) {
    padding: 20px 0px 100px 0px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (min-width: 900px) {
    padding: 20px 0px 100px 0px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  div {
    font-size: 18px;
    padding: 10px;
    color: #000000;
    text-align: center;
    @media (min-width: 900px) {
      padding: 20px;

    }
    p {
      vertical-align: center;
    }
    img {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  .vault-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    overflow: hidden;

    border: 1px solid #c0c6ce00;
    border-radius: 20%;
    @media (min-width: 400px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 900px) {
      width: 350px;
      height: 350px;
    }
  }
  
}
@keyframes para {
  100% {
    background-position: 
      -5000px 20%,
      -800px 95%,
      500px 50%,
      1000px 100%,
      400px 0;
    }
  }
}
.wrapper {
  animation: scroll 70s linear infinite;
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"), #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  
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