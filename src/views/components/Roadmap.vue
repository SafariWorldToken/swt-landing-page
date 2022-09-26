<template>
  <div class="outer">
  <section class="top">
    <div data-aos="slide-up" 
    data-aos-offset="200" 
    data-aos-delay="100" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"> 
      <h1>Roadmap</h1>
    </div>
  </section>
  <div class="container middle">
    <div class="slide">
      <div class="product-box" >
        <div class="img">
          <img src="./assets/img/impala.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage One</p>
          <p class="price">Nature-Fi the Blockchain</p>
        </div>
        <button @click="RoadModal_1 = true">Expand</button>
      </div>
      
      <div class="product-box">
        <div class="img">
          <img src="./assets/img/wildebeest.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage Two</p>
          <p class="price">Broaden the Spectrum</p>
        </div>
        <button @click="RoadModal_2 = true">Expand</button>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="./assets/img/nyala.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage Three</p>
          <p class="price">Signify the Dynasty</p>
        </div>
        <button @click="RoadModal_3 = true">Expand</button>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="./assets/img/giraffe.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage Four</p>
          <p class="price">Stake the Claim</p>
        </div>
        <button @click="RoadModal_4 = true">Expand</button>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="./assets/img/lion.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage Five</p>
          <p class="price">Invigorate the Connection</p>
        </div>
        <button @click="RoadModal_5 = true">Expand</button>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="./assets/img/elephant.webp" alt="" />
        </div>
        <div class="details">
          <p class="name">Stage Six</p>
          <p class="price">Expand the Horizons</p>
        </div>
        <button @click="RoadModal_6 = true">Expand</button>
      </div>
    </div>
    
  </div>
  <VueFinalModal v-model="RoadModal_1" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageOne</h3>
          <br>
          <p>Launch SafariWorldToken</p>
          <p>SafariWorldToken LP YieldFarm</p>
          <p>WhitePaper Release</p>                                                        
          <p>NatureFi NFT Awareness Campaign</p>
          <p>Release NFT MarketPlace</p>
          <p>Partnership Announcement</p>
          <p>Infrastructure Upgrades</p>
          <p>1st Edition NatureFi WildNFTs</p>          
          <p>SafariWorldReserve Registration</p>                            
          <p>Ad Campaign</p>
          <button @click="RoadModal_1 = close">Close</button>
    </VueFinalModal>
    <VueFinalModal v-model="RoadModal_2" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageTwo</h3>
          <br>
          <p>1st Edition SafariWorldReserve NFTs</p>
          <p>Live VR Feeds</p>
          <p>Safari Guide On-Boarding</p>
          <p>SafariWorldToken Stablecoin YieldFarm</p>          
          <p>NFT Staking</p>
          <p>Partnership Announcement</p>
          <p>2nd Edition NatureFi WildNFTs</p>
          <p>SafariWorldToken Wildlife Diversity Program</p>
          <p>Tagging of Wildlife Collection of DNA</p>                            
          <p>Ad Campaign</p>
          <button @click="RoadModal_2 = close">Close</button>
    </VueFinalModal>
    <VueFinalModal v-model="RoadModal_3" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageThree</h3>
          <br>
          <p>Sponsored Event</p>
          <p>Infrastructure Dev</p>
          <p>Live VR Safari's</p>
          <p>Partnership Announcement</p>
          <p>Tagging of Wildlife Collection of DNA</p>
          <p>3rd Edition NatureFi WildNFT's</p>
          <p>1st Charity Event</p>
          <p>VR/AR Token Integration</p>
          <p>Ad Campaign</p>
          <button @click="RoadModal_3 = close">Close</button>
    </VueFinalModal>
    <VueFinalModal v-model="RoadModal_4" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageFour</h3>
          <br>                            
          <p>SafariWorld Live Demo</p>
          <p>Partnership Announcement</p>                            
          <p>Tagging of Wildlife Collection of DNA</p>
          <p>4th Edition NatureFi WildNFT's</p>
          <p>Partnership Announcement</p>
          <p>Appstore/Playstore Integrations</p>
          <p>SafariWorld Opening</p>
          <p>2nd Charity Event</p>
          <button @click="RoadModal_4 = close">Close</button>
    </VueFinalModal>
    <VueFinalModal v-model="RoadModal_5" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageFive</h3>
          <br>
          <p>Partnership Announcement</p>
          <p>5th Edition NatureFi WildNFT's</p>
          <p>SafariWorld Upgrade</p>
          <p>Tagging of Wildlife Collection of DNA</p>
          <p>3rd Charity Event</p>
          <p>Sponsored Event</p>
          <p>Live Tracking of NFT Linked Assets</p>
          <p>NFT Holders Event</p>
          <p>Ad Campaign</p>
          <button @click="RoadModal_5 = close">Close</button>
    </VueFinalModal>
    <VueFinalModal v-model="RoadModal_6" classes="modal-container" content-class="modal-content-transfer">
          <h3>StageSix</h3>
          <br>
          <p>6th Stage Naturefi WildNFT's</p>
          <p>Live H2A SafariWorld</p>
          <p>4th Charity Event</p>
          <p>Tagging of Wildlife Collection of DNA</p>
          <p>Partnerships</p>
          <p>More Wildlife</p>
          <p>More Live AR/VR Feeds</p>
          <p>More Parks </p>
          <p>Cross Continental</p>
          <p>Cross Chain</p>
          <p>Ad Campaign</p>
          <button @click="RoadModal_6 = close">Close</button>
    </VueFinalModal>
</div>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
import { ref } from 'vue'

export default {
  name: "Roadmap",
  components: {
    VueFinalModal
  },
  setup(){
    const RoadModal_1 = ref(false)
    const RoadModal_2 = ref(false)
    const RoadModal_3 = ref(false)
    const RoadModal_4 = ref(false)
    const RoadModal_5 = ref(false)
    const RoadModal_6 = ref(false)

    return { 
      RoadModal_1,
      RoadModal_2,
      RoadModal_3,
      RoadModal_4,
      RoadModal_5,
      RoadModal_6
      
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


/* --------------Reset-------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* --------------Common-------------- */
body {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
}

p {
  color: #000000;
  text-align: center;
}

button {
  width: 100%;
}

.outer {
  padding: 0px 0px 0px;
  background-image: url('./assets/img/P1100336.webp');
  background-size: cover; 
  background-repeat: round; 
  background-attachment: fixed;
  color: black;
  //animation: 300s para infinite linear;

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
.top {
  //background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgb(0, 0, 0));
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: rgb(255, 255, 255);
  
  h1 {
    font-family: headerFont;
    font-size: 3em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 4em;
      }
    @media (min-width: 750px) {
      font-size: 6em;
    }
  }
  p {
    font-family: pFont;
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}
.middle {
  
  background-image: linear-gradient(rgba(218, 123, 0, 0.582), rgba(0, 0, 0, 0.705));
  width: 100%;
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 3em;
    }
  }
  p {
    font-family: pFont;
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
/* --------------Container-------------- */
.container {
  position: relative;
  width: 100%;
  min-height: 50vh;
  perspective: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: 400px) {
        min-height: 75vh;
      }
  @media (min-width: 750px) {
        min-height: 100vh;
      }

}

/* ---------Slide--------- */
.container .slide {
  width: 70%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotation 20s infinite linear;
  @media (min-width: 400px) {
        width: 70%;
      }
  @media (min-width: 750px) {
        width: 90%;
      }
}

.container .slide:hover {
  animation-play-state: paused;
}

/* Horizontal Rotation Animation */
@keyframes rotation {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
}

/* ---------Product Box--------- */
.container .slide .product-box {
  max-width: 450px;
  max-height: 450px;
  position: absolute;
  background: rgb(206, 205, 228);
  background: radial-gradient(
    circle,
    rgba(206, 205, 228, 1) 0%,
    rgb(255, 187, 0) 42%,
    rgb(0, 0, 0) 100%
  );
  padding: 20px;
  border-radius: 20px;
  margin: 0 10px;
}

.container .slide .product-box:nth-child(1) {
  transform: rotateY(60deg) translateZ(300px);
}

.container .slide .product-box:nth-child(2) {
  transform: rotateY(120deg) translateZ(300px);
}

.container .slide .product-box:nth-child(3) {
  transform: rotateY(180deg) translateZ(300px);
}

.container .slide .product-box:nth-child(4) {
  transform: rotateY(240deg) translateZ(300px);
}

.container .slide .product-box:nth-child(5) {
  transform: rotateY(300deg) translateZ(300px);
}

.container .slide .product-box:nth-child(6) {
  transform: rotateY(360deg) translateZ(300px);
}

/* Image */
.container .product-box .img {
  max-width: 250px;
  max-height: 250px;
  height:100px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  
  @media (min-width: 400px) {
        height:200px;
      }
  @media (min-width: 750px) {
        height:300px;
      }
}

.container .product-box:hover .img {
  transform: scale(0.95);
}

.container .product-box .img > img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

/* Details */
.container .product-box .details {
  margin-bottom: 10px;
}

.container .product-box .details .name {
  font-size: 2rem;
}

.container .product-box .details .price {
  font-size: 1.2rem;
}

/* Button */
.container .product-box .button {
  text-align: center;
}

.container .product-box .button .add-btn {
  display: block;
  background-color: #000000;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

.container .product-box .button:hover .add-btn,
.container .product-box .button .add-btn:hover {
  transform: rotateX(360deg);
  background-color: #ffffff;
  color: #000000;
}

/* --------------Media Queries-------------- */

@media (max-width: 550px) {
  /* ---Product Box--- */
  .container .slide .product-box {
    max-width: 250px;
  }
}



::v-deep .modal-content-transfer {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  background-color: black;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  p {
    padding: 7px;
    color: white;
  }
  h3 {
    text-decoration-line: underline;
    color: rgb(0, 253, 110)
  }
}


</style>
