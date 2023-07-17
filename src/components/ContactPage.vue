<template>
  <section class="p-[30px] md:p-[50px] lg:px-[110px] flex justify-between xs:justify-between items-center flex-wrap gap-[20px]">
   <a class="flex justify-center items-center gap-[5px]">
      <i class="fa fa-phone text-[#336ff6] text-[12px]"></i>
      <p class="text-[15px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>+00 123 647 840</p>
    </a>
    <a class="flex justify-center items-center gap-[5px]">
      <i class="fa fa-envelope text-[#336ff6] text-[12px]"></i>
      <p class="text-[15px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>info@themevessel.com</p>
    </a>
    <a class="flex justify-center items-center gap-[5px]">
      <i class="fa fa-map-marker text-[#336ff6] text-[12px]"></i>
      <p class="text-[15px] focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>169 Teroghoria, Bangladesh</p>
    </a>
  </section>
</template>


<script>
export default {
  name: "NavBar", 
};
</script>

<style lang="scss" scoped>

</style>