<template>
    <div id="vault_container">

        <div id="grid-view">
            <h2>SWT/LP Vault</h2>
            <br>
            <span><p>Aprox. APR: <span class="fill"> Coming Soon...  </span> %</p></span>
            <span><p>Available Earnings: <span class="fill"> 0.00  </span> $SWT</p></span>
            <button @click="vaultModal = true">Expand</button>
        </div>

        <VueFinalModal v-model="vaultModal" classes="modal-container" content-class="modal-content-transfer">
            <div class="header">
                <h1>SWT/LP Vault</h1>
                <span><p>Aprox. APR/yr: <span class="fill"> Coming Soon...  </span> %</p></span>
                <p>You must own $SWT token to utilize this vault...</p>
                <!--<button @click="goToSite('https://www.safariworldonline.com/')">Buy</button>-->
                <button @click="goToSite('https://www.pinksale.finance/launchpad/0xe5913394B81F7eeF64cEE003FCE36F2917864BA6?chain=BSC')">Buy</button>
                <button @click="vaultModal = false">Close</button>

            </div>
      </VueFinalModal>
    </div>
</template>

<script>

import { ref } from 'vue'
import { VueFinalModal } from "vue-final-modal";


export default {
    name: 'SWTLP',
    components: {

        VueFinalModal
    },
    setup() {

        const vaultModal = ref(false)
        const goToSite = (producturl) => {
            window.open(producturl,'_blank');
            }
        return { 

            vaultModal,
            goToSite

        }
    }
}
</script>

<style lang="scss" scoped>

#vault_container {
    padding: 30px;
    margin: 20px;
    border: 100px;
    text-align: center;
    

    #staking_container {
        border-radius: 10px;
        padding:5%;
        background-color: black;
        @media (min-width: 400px) {
            padding:10%;
        }
        @media (min-width: 750px) {
            padding:10%;
        }
        h1 {
            font-family: headerFont;
            font-size: .9em;
            text-shadow: grey;
            color: rgb(255, 241, 173);
            padding: 10%;
            @media (min-width: 400px) {
                font-size: 1.5em;
                padding: 5%;
            }
            @media (min-width: 750px) {
            font-size: 3em;
            padding: 2%;
            }
        }
        p {
            font-family: pFont;
            font-size: .7em;
            padding: 10px;
            color: rgb(255, 255, 255);
            @media (min-width: 400px) {
                font-size: 1em;
            }
            @media (min-width: 750px) {
            font-size: 1.5em;
            }
        }
        button {
            padding: 10px;
            border: 10px;
            font-size: .7em;
            @media (min-width: 400px) {
                font-size: .9em;
                padding: 10px;
            }
            @media (min-width: 750px) {
                font-size: 1.1em;
                padding: 25px;
            }
        }
    }
    input {
        padding: 10px;
    }
    h2 {
        color: white
    }
    h1 {
        font-family: headerFont;
        font-size: 1em;
        text-shadow: grey;
        color: rgb(255, 241, 173);
        padding: 10%;
        @media (min-width: 400px) {
            font-size: 1.5em;
            padding: 5%;
        }
        @media (min-width: 750px) {
        font-size: 3em;
        padding: 2%;
        }
    }
    p {
        font-family: pFont;
        font-size: 1em;
        padding: 10px;
        color: rgb(255, 255, 255);
        @media (min-width: 400px) {
            font-size: 1em;
        }
        @media (min-width: 750px) {
        font-size: 1.5em;
        }
    }
    button {
        padding: 20px;
        border: 10px;
        font-size: 1em;

    }
    a {
        text-decoration: underline;
        color: rgb(255, 241, 173);
    }
    .fill {
        color: rgb(96, 255, 96)
    }
    #grid-view {

        border-radius: 10px;
        padding: 10%;

        background: radial-gradient(
            circle,
            rgb(0, 0, 0) 0%,
            rgb(0, 0, 0) 42%,
            rgb(0, 0, 0) 100%
        );
        border: 1px solid #000000;
        box-shadow:  -1px 1px #6b6b6b,
            -2px 2px rgb(96, 255, 96),
            -3px 3px rgb(96, 255, 96),
            -4px 4px rgb(96, 255, 96),
            -5px 5px rgb(96, 255, 96);
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
    padding: 10px;

  }
}



</style>