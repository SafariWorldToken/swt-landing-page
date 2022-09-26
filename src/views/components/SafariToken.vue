<template>

  <body>
    <div id="safaritoken">
      <div class="outer">
        <!--
        <GetSafariWorldpoolPriceVue />
        <SWT4SWT />
        <SWTLp />
        <button @click="goToSite('https://pancakeswap.finance/swap?inputCurrency=')">Buy</button>
        -->
        <section class="top">
          <div>
            <img src="./assets/img/sw_logo_15.webp" alt="logo" class="logo" 
            data-aos="slide-down" 
            data-aos-offset="200" 
            data-aos-delay="100" 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <p data-aos="zoom-out" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">
            Revolutionizing the world's wildlife with onChain integration <br>
            A Blockchain Wildlife Conservation Initiative
            </p>
            
          </div>
        </section>
        <section class="middle">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h2>What We Do</h2>
            <hr class="style-two" > 
            <h3>We create to conserve.</h3>
            <p>
            With that in mind, SafariWorldToken (SWT) was born.  
            SWT acts as the currency of value for the SafariWorld Ecosystem, to be used in the process of NatureFi NFT minting and as payment for live and pre-recorded virtual reality (VR) safaris. 
            SafariWorldToken will also be a keystone asset within all future affiliate and partnered establishments. 
            </p>
            <br>
            <p class="bold">
              Proceeds from this project will be dedicated to the field of nature conservation. 
            </p>
            <hr class="style-two" >          
          </div>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h2>Why We Do It </h2>
            <hr class="style-two" > 
            <h3>We aspire for wildlife longevity.</h3>
            <p>
            The idea came about amid a world crisis, when safari parks, much like all tourism worldwide, saw a huge decline in visitors. 
            With the continued increase in fuel prices worsening the effects on the tour-ism industry, there was a serious need to create ways for customers to experience safari parks and to be able to generate the much-needed revenue for these parks, but all without having to leave the comfort of their home.
            </p>
            <br>
            <p>
              Our NatureFi NFTs focus on the world's wildlife, as seen in associated safari parks, and will help to generate income for such safari parks and enable them to continue conserving the planet. 
            </p>
            <hr class="style-two" >           
          </div>
          </section>
          <section class="bottom">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h2>How will NatureFi do this?</h2>
            <hr class="style-two" > 
            
            <h3>connecting you to real-world assets, through a blockchain environment.</h3>
            <p>
              To do this, NatureFi NFTs will ultimately be linked to a specific animal via DNA sample and track-ing device which will then be recorded on the blockchain forever. 
              Associated safari parks will thus be able to keep track of individual species more accurately, allowing for greater genetic diversity, whilst also allowing NatureFi NFT holders to keep track of their adopted pet in the wild. 
            <br>
            </p>
            <hr class="style-two" >                    
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h2>Who We Are</h2>
            <hr class="style-two" >  
            <h3>Meet The Team</h3> 
            <ul>
              
            <li><a href="https://www.linkedin.com/in/douwe-relborg-448571108/" target="_blank">Douw</a>  - (CTO) Project Lead - South-Africa</li>
            <li><a href="https://www.linkedin.com/in/mitch-carrara-bb43a1249/" target="_blank">Mitch</a> - Lead Dev - America</li>
            <li><a href="https://www.linkedin.com/in/andrearizzi/" target="_blank">Andrea</a> - Backend Solidity Dev - Italy</li>
            <li><a href="https://www.linkedin.com/in/leonduplessis/" target="_blank">Leon</a> - Systems Architect / Infrastructure - Ireland</li>            
            <li><a href="https://www.linkedin.com/in/anthony-freeme-64696a28/" target="_blank">Anthony</a> - Marketing / Research - South-Africa</li> 
            <li><a href="https://hive.blog/@dave1969/" target="_blank">Dave</a> - Professional Safari Guide / Location Coordinator - South-Africa</li>    
                              
            </ul>
            <hr class="style-two" >   
          </div>
          <div >
            <h2>Associated Safari-Parks</h2>
            <hr class="style-two" >   
            <ul>    
            <li>TBA</li>
            </ul>
            <hr class="style-two" >   
          </div>
        </section>               
      </div>

    </div>
  </body>
</template>

<script>

import { ref } from 'vue'



export default {
  name: 'SafariToken',

  setup() {
    const showModal = ref(false)
    const goToSite = (producturl) => {
      window.open(producturl,'_blank');
    }

    return { goToSite, showModal }
  }
}
</script>

<style lang="scss" scoped>

#safaritoken {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: honeydew;
  line-height: 1.5;
  li {
    list-style: none;
    text-decoration: none;
    
    font-family: pFont;
    padding: 0px 2%;
    font-size: 1.2em;
    @media (min-width: 400px) {
        font-size: 1.2em;
        padding: 0px 5%;
      }
    @media (min-width: 750px) {
      font-size: 1.7em;
      padding: 0px 10%;
    }
    ul {
          padding-inline-start: 0 !important;
    }
  }
  .bold {
      font-weight: bold;
    }
  /* Inset */

  hr.style-two {
  border: 0;
  height: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  /* Border Shadow in <hr> tag */

  h2 {
    font-family: headerFontTwo;
    font-size: 1.5em;
    text-shadow: grey;
    padding: 20px;
    text-decoration: underline;
    @media (min-width: 400px) {
        font-size: 3em;
      }
    @media (min-width: 750px) {
      font-size: 4em;
    }
  }
  h3 {
    font-family: pFont;
    font-size: 1.5em;
    text-shadow: grey;
      
    padding: 20px;
    @media (min-width: 400px) {
        font-size: 1.5em;
      }
    @media (min-width: 750px) {
      font-size: 3em;
    }
  }
}


.outer {
  padding: 50px 0px 0px;
  background-image: url('./assets/img/zebra.webp');
  background-size: fill; 
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
  color: rgb(0, 253, 110);
  
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 6em;
    }
  }
  p {
    font-family: pFont;
    padding: 0px 2%;
    font-size: 1.2em;
    @media (min-width: 400px) {
        font-size: 1.2em;
        padding: 0px 5%;
      }
    @media (min-width: 750px) {
      font-size: 2em;
      padding: 0px 10%;
    }
  }
  img {
    width: 100%;
    @media (min-width: 400px) {
      width: 400px;
    }
    @media (min-width: 750px) {
      width: 750px;
    }
  }
  a {
    font-size: 30px;
    animation: blinker 1s linear infinite;
    @media (min-width: 400px) {

      font-size: 50px;
    }
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
}
.middle {
  background-image: linear-gradient(rgb(0, 253, 110), rgba(255, 255, 255, 0.788));
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
    padding: 0px 5%;
    font-size: 1.2em;
    @media (min-width: 400px) {
        font-size: 1.2em;
        padding: 0px 5%;
      }
    @media (min-width: 750px) {
      font-size: 1.7em;
      padding: 0px 10%;
    }
    
  }
  
}
.bottom {
  background-image: linear-gradient(rgba(255, 255, 255, 0.788), rgba(255, 241, 173, 0.829));
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
    padding: 0px 5%;
    font-size: 1.2em;
    @media (min-width: 400px) {
        font-size: 1.2em;
        padding: 0px 5%;
      }
    @media (min-width: 750px) {
      font-size: 1.7em;
      padding: 0px 10%;
    }
  }
  a {
    color: black;
  }
  a:hover {
      color: rgb(0, 253, 110);
    }
  ul {
          padding-inline-start: 0 !important;
    }
}



</style>