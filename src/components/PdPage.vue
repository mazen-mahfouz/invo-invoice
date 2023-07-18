<template>
    <section class="print:hidden mt-[20px] flex justify-center flex-wrap items-center gap-[20px]">
        <a @click="$store.state.add = false" href="javascript:window.print()" class=" cursor-pointer h-[50px] bg-[#2b2a2a] px-[35px] flex justify-center items-center gap-[5px] rounded-sm text-[#fff]">
          <i class="fa fa-print text-[#ffffff] text-[12px]"></i>
          <p class="text-[16px]"> Print Invoice</p>
        </a>
        <a @click="downloadPDF" class=" cursor-pointer h-[50px] bg-[#2565cc] px-[35px] flex justify-center items-center gap-[5px] rounded-sm text-[#fff]">
          <i class="fa fa-download text-[#ffffff] text-[12px]"></i>
          <p class="text-[16px]">  Download Invoice</p>
        </a>
        <button @click="additem" class=" cursor-pointer h-[50px] bg-[#2565cc] px-[35px] flex justify-center items-center gap-[5px] rounded-sm text-[#fff]"> 
          <i class="fa-solid fa-plus text-[#ffffff] text-[12px"></i>
          <p class="text-[16px]">  Add Item</p>
        </button>

      <VueHtml2pdf  :manual-pagination="false"  :enable-download="true" 
        :float-layout="true"
        :paginate-elements-by-height="1400"
        filename="INVOIC"
        pdf-format="a4"
        :pdf-quality="2"
        ref="DownloadComp">
        
        <div id="app" slot="pdf-content" class="bg-[#fff6f6] m-auto w-full py-[30px] flex justify-self-center justify-center items-center flex-col text-[hsl(0,0%,33%)]">
          <div id="invoice" class="w-[93%] max-w-[1080px] h-[100%] bg-[white] lg:after:!w-[50px] lg:after:!h-[221px] lg:before:!w-[50px] lg:before:!h-[221px]">
            <NavPage  />
            <DetailsPage />
            <ItemPage />
            <FooterPage />
            <ContactPage />
          </div>
        </div> 
      </VueHtml2pdf>
     
    </section>
</template>


<script>

import VueHtml2pdf from 'vue-html2pdf'
import NavPage from './NavPage.vue'
import DetailsPage from './DetailsPage.vue'
import ItemPage from './ItemPage.vue'
import FooterPage from './FooterPage.vue'
import ContactPage from './ContactPage.vue'

export default {
  name: "PdPage",
   
  components: {
    VueHtml2pdf,
      NavPage,
    DetailsPage,
    ItemPage,
    FooterPage,
    ContactPage,
  },
  methods:{
     downloadPDF () {
       this.$store.state.add = false;
        this.$refs.DownloadComp.generatePdf()
    },
    additem(){
      this.$store.state.add = !this.$store.state.add
    }
  }
};
</script>

<style lang="scss" scoped>

</style>