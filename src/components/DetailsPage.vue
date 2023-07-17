<template>
  <section class="p-[30px] md:p-[50px] !pb-[0px] lg:px-[110px] flex justify-between items-start flex-col gap-[20px] sm:gap-[40px] bg-[#f7f7f7]">
    <div class="grid grid-cols-1 xs:grid-cols-2 w-[100%] justify-between items-center gap-[20px]">
      <div class="flex justify-between items-start flex-col gap-[5px]">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">Invoice To</h1>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Theme Vessel</p>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>info@themevessel.com</p>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>21-12 Green Street, Meherpur, Bangladesh</p>
      </div>
      <div class="flex justify-between items-start flex-col text-right gap-[5px] xs:items-end">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">Bill Toa</h1>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Apexo Inc</p>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>billing@apexo.com</p>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>169 Teroghoria, Bangladesh</p>
      </div>
    </div>
    <div class="grid grid-cols-1 xs:grid-cols-2 w-[100%] justify-between items-center gap-[20px]">
      <div class="flex justify-between items-start flex-col gap-[5px]">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">DATE</h1>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Due Date:24/08/2021</p>
      </div>
      <div class="flex justify-between items-start flex-col text-right gap-[5px]  xs:items-end">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">PAYMENT METHOD</h1>
        <p class="font-[400] text-[14px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Credit Card</p>
      </div>
    </div>
    <div class="flex flex-wrap w-[100%] justify-between items-center"></div>
  </section>
</template>


<script>
export default {
  name: "DetailsPage", 
};
</script>

<style lang="scss" scoped>

</style>