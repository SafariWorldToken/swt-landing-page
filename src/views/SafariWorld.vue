<template>
  <div>
    
    <SafariToken id="About"/>
    <Tokenomics id="Tokenomics"/>
    <Roadmap id="Roadmap"/>
    <Faq id="Faq"/>
    <Footer id="Footer"/>
    

  </div>
</template>

<script>
import SafariToken from './components/SafariToken.vue'
import Tokenomics from './components/Tokenomics.vue'
import Roadmap from './components/Roadmap.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'SafariWorld',
  components: {
    SafariToken,
    Tokenomics,
    Roadmap,
    Faq,
    Footer
  }
}
</script>

<style lang="scss">

body {
  overflow-x: hidden
}

</style>
