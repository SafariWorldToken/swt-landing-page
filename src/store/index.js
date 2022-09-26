import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {},
      address: null,
      nfts: [],
      txn: [],
      modal: [],
      swtnfts: {},
      swt: null,
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAccountAddress (state, address) {
      state.address = address
    },
    setUserNfts (state, nfts) {
      state.nfts = nfts
    },
    setTxnHistory (state, txn) {
      state.txn = txn
    },
    setModal (state, modal) {
      state.modal = modal
    },
    setSwtNfts (state, swtnfts) {
      state.swtnfts = swtnfts
    },
    setSwt (state, swt) {
      state.swt = swt
    },
  }
})

export default store