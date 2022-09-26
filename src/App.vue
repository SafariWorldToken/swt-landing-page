<template>
  <div id="app">
    <VueFinalModal
        v-model="modal.loginModal"
        classes="modal-container-login"
        content-class="modal-content-login"
      >
        <div class="modal__content">
          <p>You must be logged in via MetaMask or WalletConnect to utilize the Safari World Vaults</p>
        </div>
    </VueFinalModal>
    <VueFinalModal
      v-model="modal.messageModal.status"
      classes="modal-container"
      content-class="modal-content-transfer"
    >
      <div class="modal__content">
        <p>{{modal.messageModal.message}}</p>
        
      </div>
    </VueFinalModal>
    <router-view />
    <div id="app-container">
      <template v-if="isAuthenticated">
        <nav class="nav-middle">
          <ul id="swt-nav">
            <li><a href="https://twitter.com/SafariWorld_SWT" target="_blank">TWITTER</a></li>
            <li><a href="https://discord.gg/TfwmhfeWDe" target="_blank">DISCORD</a></li>
            <li>||</li>
            <li><GetSafariworldBalance/></li>
            <li>{{ address.slice(0, 4) }}...{{ address.slice(address.length - 4) }}  </li>
            <li>||</li>
            <li><router-link :to="{ name: 'SafariWorld' }" @click="logout"><button>logout</button></router-link></li>
          </ul>
        </nav>
        <Navigation />
        <VueFinalModal
          v-model="modal.txnModal.status"
          classes="modal-container"
          content-class="modal-content-transfer"
        >
          <div class="modal__content">
            <h1>Sucess!</h1>
            <p>Please allow time for SafariWorld to display changes</p>
            <a v-bind:href="modal.txnModal.hash" target="_blank">View Transaction</a>
            
          </div>
        </VueFinalModal>
        
        <VueFinalModal
          v-model="modal.loadingModal"
          classes="modal-container"
          content-class="modal-content-loading"
        >
          <div class="modal__content">
            <div class="center">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        </VueFinalModal>
        <VueFinalModal
          v-model="modal.errorModal"
          classes="modal-container"
          content-class="modal-content-transfer"
        >
          <div class="modal__content">
            <p>Something has gone wrong, please try again...</p>
          </div>
        </VueFinalModal>
      </template>
      <template v-else>
        <nav class="nav-middle">
          <ul id="swt-nav">
            <li><a href="https://twitter.com/SafariWorld_SWT">TWITTER</a></li>
            <li><a href="https://discord.gg/TfwmhfeWDe">DISCORD</a></li>
            <li>||</li>
            <li><button @click="metaLogin">Metamask</button></li>
            <li><button @click="walletLogin">Wallet Connect</button></li>
          </ul>
        </nav>
        <Navigation />
      </template>
    </div>
    
    
    
  </div>
</template>

<script>
import { onMounted, inject, computed } from 'vue';
import { useStore } from 'vuex';
import Navigation from './components/Navigation.vue';
import GetSafariworldBalance from './components/GetSafariworldBalance.vue';
import { VueFinalModal } from "vue-final-modal";



export default {
  name: 'App',
  components: {
    Navigation,
    GetSafariworldBalance,
    VueFinalModal
  },
  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')

    const modals = {
      loadingModal: false,
      errorModal: false,
      txnModal: {status: false, hash: ''},
      messageModal: {status: false, message: ''},
      loginModal: false
    }

    const setUser = (payload) => store.commit('setUser', payload)
    const setAccountAddress = (address) => store.commit('setAccountAddress', address)
    const setModal = (modal) => store.commit('setModal', modal)
    //const setUserNfts = (nfts) => store.commit("setUserNfts", nfts);

    

    setModal(modals)
    const metaLogin = async () => {
      try {
        await $moralis.enableWeb3()
        const chainId = await $moralis.chainId;


        if ( chainId != 56 ) {
            store.state.modal["messageModal"]["message"] = "switching network...";
            store.state.modal["messageModal"]["status"] = true;
            const newId = 56;
            await $moralis.switchNetwork(newId);
            store.state.modal["messageModal"]["status"] = false;
            const user = await $moralis.Web3.authenticate()
            const address = user.get('ethAddress')
            setUser(user)
            setAccountAddress(address)
            //getUserNfts()
            return
        }
        const user = await $moralis.Web3.authenticate()
        const address = user.get('ethAddress')
        setUser(user)
        setAccountAddress(address)
        //getUserNfts()
      
      } catch (error) {

        store.state.modal["loginModal"] = true
      }
    }
    const walletLogin = async () => {
      try {
      const user = await $moralis.authenticate({ provider: "walletconnect", chainId: 56 })
      const address = user.get('ethAddress')
      setUser(user)
      setAccountAddress(address)
      //getUserNfts()
      } catch (error) {

        store.state.modal["loginModal"] = true
      }
    }

    const logout = async () => {
      await $moralis.User.logOut()
      setUser({})
      setAccountAddress({})
    }

    const handleCurrentUser = () => {
      const user = $moralis.User.current()
      if (user) {
        const address = user.get('ethAddress')
        setUser(user)
        setAccountAddress(address)

      }
    }


    onMounted(() => {
      handleCurrentUser()

      //getSWTNfts()
      //getUserNfts()
    })

    return {
      metaLogin,
      walletLogin,
      logout,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
      user: computed(() => store.state.user),
      address: computed(() => store.state.address),
      swtnfts: computed(() => store.state.swtnfts),
      nfts: computed(() => store.state.nfts),
      modal: computed(() => store.state.modal),
    }
  }
}
</script>

<style lang="scss">

@import "./assets/style/main.scss";

@import '~primevue/resources/themes/luna-amber/theme.css';
@import '~primevue/resources/primevue.min.css';

</style>
