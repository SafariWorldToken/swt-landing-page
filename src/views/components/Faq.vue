<template>
  <body>
    <div id="faq"> 
      <div class="outer">
        <!--
        <GetCesspoolPriceVue />
        <Cess4cess />
        <CessLp />
        <button @click="goToSite('https://pancakeswap.finance/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x40e8b78546fc1f38758799858742950654e7364b')">Buy</button>
        -->
        <section class="top">
          <div data-aos="zoom-out" 
    data-aos-offset="200" 
    data-aos-delay="100" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            <h1>FAQ</h1>
          </div>
        </section>
        <section class="middle" >
            <div class="p-grid p-flex-column" >
          <Accordion :activeIndex="0" class="acc">
              <AccordionTab header="What is an NFT?">
                    <p>
                      NFT is short for "Non-Fungible Token", and are crypto assets that live on the blockchain.
                      Each NFT sports a unique set of identification codes and metadata in order to differentiate themselves from other tokens.
                      <br><br>
                      Similar to fungible cryptocurrency assets, NFTs can be a store of value but differ in that they are unable to be traded or exchanged at equivalency.
                      This is because each NFT has it's own identifiable and unique traits.
                    </p>
              </AccordionTab>
              <AccordionTab header="How are SafariWorld's WildNFTs different?">
                    <p>
                      Our NatureFi NFTs connect you to real-world wildlife through secure and verifiable assets.
                      <br><br>
                      By obtaining one of many WildNFTs you will not only be actively supporting nature conservation but will be open to receiving countless perks through the SafariWorld universe.
                    </p>
              </AccordionTab>
              <AccordionTab header="Where and how do I mint a SafariWorld WildNFTs?">
                    <p>Minting as easy as 1, 2, 3... Our development team is striving to build an easy and intuitive NFT minting process. Stick around to be apart of history by becoming an owner of a 1st Edition NatureFi NFT...</p>
              </AccordionTab>
              <AccordionTab header="What is the purpose of the SafariWorld Token?">

                    <p>SWT is the native token/asset of the SafariWorld universe and is the catalyst of all functionality within our platform and future partnered establishments.</p>
              </AccordionTab>
              <AccordionTab header="Will I get updates on my WildNFTs pet?">
                    <p>Our online SafariVerse will give users direct access to nature from anywhere in the world, with its real time streaming of selected sites, together with pre-recorded and live VR Safaris. 
                      <br>We will do so by utilizing a variation of cameras, such as night vision, IR, 360-degree dome and VR/AR cameras. 
                      <br><br>
                      <br>Tracking, DNA collecting, alerts and real-world safari excursions are all utilized to help you visit your WildNFT SafariWorld pet. All recorded footage and links to live feeds will be built into an online world, always accessible to NFT holders, via VR. 
                    </p>
              </AccordionTab>
              <AccordionTab header="How will my investment improve the lives of the animals?">
                    <p>We aim to promote gene diversity, overall health and security of our wildlife, whilst bringing nature lovers closer to nature through a block chain initiative that finally gives NFTs inherent value in the real world.</p>
              </AccordionTab>
              <AccordionTab header="What happens when my linked animal passes on?">
                    <p>
                      In the event of animal loss of life. Your NFT will be linke to a newborn / juvinile animal of the smae species.
                      </p>
              </AccordionTab>
              <AccordionTab header="What benefits are there for SafariParks?">
                    <p>
                      SafariWorld installation of Camera systems, to help with security of wildlife, but also to be used in SafariVerse
                      <br><br>
                      Income from SafariWorldOnline Services. 
                      <br><br>
                      Assistance in Nature Conservation efforts. (DNA Sampling, Tracking devices, Anti-Poaching Assistance)
                    </p>
              </AccordionTab>
              <AccordionTab header="If I adopt a female and she has babies, are they mine as well?">
                    <p>
                      No, the juviniles that are born, will be allocated to become  replacements for ones that pass away, are sold or traded when its in the best interest of the Safari Park to promote gene diversity.
                      </p>
              </AccordionTab>
              <AccordionTab header="How can I earn Rewards from my SafariWorldReserve NFT's?">
                    <p>
                      By staking your SafariWorldReserve NFT in our System, this will allow us to use your finished getaway as accomodation for Tourists, visiting the area and staying at SafariWorldReserve
                      100% of all profits generated will be used to buy SWT and sent to the NFT Vault as rewards to stakers.
                      </p>
              </AccordionTab>
          </Accordion>
        </div>
        </section>
      </div>
      
    </div>
  </body>
</template>

<script>

import { ref } from 'vue'



export default {
  name: 'Faq',

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

#faq {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: honeydew;
  
  li {
    list-style: none;
    text-decoration: none;
  }
}
.p-grid {
    
    padding: 10px 20px;
    @media (min-width: 250px) {
        padding: 20px 40px;
      }
    @media (min-width: 750px) {
        padding: 20px 150px;
      }
    @media (min-width: 1200px) {
        padding: 20px 300px;
      }
    
    p {
      font-size: 18px;
    }
  }

.outer {
  padding: 0px 0px 0;
  background-image: url('./assets/img/DSCN2398.webp');
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
  background-image: linear-gradient(rgba(58, 58, 58, 0.705), rgba(0, 0, 0, 0.705));
  width: 100%;
  padding: 20px 0px 40px;
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
    font-size: 1em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}
.bottom {
  background-image: linear-gradient(rgba(255, 94, 0, 0.705), rgb(0, 225, 255));
  width: 100%;
  padding: 20px 0px 40px;
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
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}

.tilesWrap {
padding: 30px;
margin: 50px auto;
list-style: none;
text-align: center;
}
.tilesWrap li {
display: inline-block;
width: 20%;
min-width: 200px;
max-width: 230px;
padding: 80px 20px 40px;
position: relative;
vertical-align: top;
margin: 10px;
font-family: 'helvetica', san-serif;
min-height: 25vh;
background: #262a2b;
text-align: left;
}
.tilesWrap li h2 {
font-size: 114px;
margin: 0;
position: absolute;
opacity: 0.2;
top: 50px;
right: 10px;
transition: all 0.3s ease-in-out;
}
.tilesWrap li h3 {
font-size: 20px;
color: #b7b7b7;
margin-bottom: 5px;
}
.tilesWrap li p {
font-size: 16px;
line-height: 18px;
color: #b7b7b7;
margin-top: 5px;
}
.tilesWrap li button {
background: transparent;
border: 1px solid #b7b7b7;
padding: 10px 20px;
color: #b7b7b7;
border-radius: 3px;
position: relative;
transition: all 0.3s ease-in-out;
transform: translateY(-40px);
opacity: 0;
cursor: pointer;
overflow: hidden;
}
.tilesWrap li button:before {
content: '';
position: absolute;
height: 100%;
width: 120%;
background: #b7b7b7;
top: 0;
opacity: 0;
left: -140px;
border-radius: 0 20px 20px 0;
z-index: -1;
transition: all 0.3s ease-in-out;

}
.tilesWrap li:hover button {
transform: translateY(5px);
opacity: 1;
}
.tilesWrap li button:hover {
color: #262a2b;
}
.tilesWrap li button:hover:before {
left: 0;
opacity: 1;
}
.tilesWrap li:hover h2 {
top: 0px;
opacity: 0.6;
}

.tilesWrap li:before {
content: '';
position: absolute;
top: 1px;
left: 4px;
right: -2px;
bottom: -10px;
z-index: -1;
background: rgb(123, 255, 0);
transform: skew(5deg, -7deg);
}
.tilesWrap li:after {
content: '';
position: absolute;
width: 40%;
height: 100%;
left: 0;
top: 0;
background: rgba(255, 255, 255, 0.02);
}

</style>