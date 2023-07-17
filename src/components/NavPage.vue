<template>
  <nav class="p-[30px] md:p-[50px] lg:px-[110px] flex justify-between items-start flex-col xs:flex-row">
    <div>
      <img class="w-[60px] md:w-[80px]" src="../image/logo.png" alt="">
    </div>
    <div class="flex justify-between items-start flex-col gap-[5px] sm:items-end">
      <h1 class="text-[24px] md:text-[26px] text-[#336ff6] font-bold uppercase">Invoice</h1>
      <p class="font-[400] text-[14px]">Invoice Number <span class="text-[black] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>#45613</span></p>
      <p class="font-[400] text-[14px]">Invoice Date <span class="text-[black] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>21 Sep 2021</span></p>
    </div>
  </nav>
</template>


<script>
export default {
  name: "NavBar", 
};
</script>

<style lang="scss" scoped>

</style>