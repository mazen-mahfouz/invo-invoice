<template>
  <section class="p-[30px] md:p-[50px] lg:px-[110px] flex justify-between items-start flex-col gap-[20px]  bg-[#f7f7f7]">
    <div class="grid grid-cols-1 xs:grid-cols-2 w-[100%] justify-between items-baseline gap-[20px]">
      <div class="flex justify-between items-start flex-col gap-[5px]">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">Payment Info</h1>
        <p class="font-[400] text-[14px]"><strong>Account Name: </strong><span class=" focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>647 840</span></p>
        <p class="font-[400] text-[14px]"><strong>Account Number: </strong><span class=" focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Jhon Doe</span></p>
        <p class="font-[400] text-[14px]"><strong>Branch Name: </strong><span class=" focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>xyz</span> </p>
      </div>
      <div class="flex justify-between items-start flex-col text-right gap-[5px] xs:items-end">
        <h1 class="text-[16px] text-[#336ff6] font-[500] uppercase">TERMS AND CONDISTIONS</h1>
        <p class="font-[400] text-[14px] text-left xs:text-right focus-visible:outline-0 focus-visible:text-[#336ff6]"  :contenteditable="true" @keydown.enter.prevent>Once order done, money can't refund. Delivery might delay due to some external</p>
      </div>
    </div>
    <div class="flex flex-wrap w-[100%] justify-between items-center"></div>
  </section>
</template>
contact

<script>
export default {
  name: "FooterPage", 
};
</script>

<style lang="scss" scoped>

</style>