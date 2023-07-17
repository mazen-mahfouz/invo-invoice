<template>
  <div id="app" class="bg-[#fff6f6] py-[30px] flex justify-center items-center flex-col text-[hsl(0,0%,33%)]">
      <div id="invoice" class="w-[93%] max-w-[1080px] h-[100%] bg-[white] lg:after:!w-[50px] lg:after:!h-[221px] lg:before:!w-[50px] lg:before:!h-[221px]">
        <NavPage  />
        <DetailsPage />
        <ItemPage />
        <FooterPage />
        <ContactPage />
      </div>
      <PdPage />
  </div>
</template>
<script>

import NavPage from './components/NavPage.vue'
import DetailsPage from './components/DetailsPage.vue'
import ItemPage from './components/ItemPage.vue'
import FooterPage from './components/FooterPage.vue'
import ContactPage from './components/ContactPage.vue'
import PdPage from './components/PdPage.vue'

export default {
  name: 'App',
  components: {
    NavPage,
    DetailsPage,
    ItemPage,
    FooterPage,
    ContactPage,
    PdPage
  },
}
</script>

<style lang="scss">

  #invoice{
    position: relative;
     
    &::after{
      content: "";
      position: absolute;
      top: 0;
      right: 24px;
      background-image: url('.../../image/cover-1.png');
      background-size: cover;
      width: 25px;
      height: 111px;
    }
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 24px;
      background-image: url('.../../image/cover-2.png');
      background-size: cover;
      width: 25px;
      height: 111px;
    }
  }

.ar{
      flex-direction: row-reverse;
      text-align: right;
      
      h1, ul, p{
        text-align: right;
      }
  }
  .en{
      flex-direction: row;
      text-align: left;
  }
</style>
