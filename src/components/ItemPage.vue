<template>
  <section class="p-[30px] md:p-[50px] lg:px-[110px] flex items-start flex-col gap-[20px] sm:gap-[40px] bg-[#ffffff]">
    <div class="w-[100%] overflow-x-auto">
      <div class="border-[.5px] border-[#e7e7e7] w-fit sm:w-full">
        <ul class="flex text-center items-stretch sm:grid sm:grid-cols-[1.6fr_repeat(3,.7fr)] m-auto sm:w-full bg-gradient-to-b w-fit from-[#5bb1ef] via-[#4aa3e2] to-[#2064fd] text-[#ffffff] whitespace-pre">
          <li class="flex font-[500] w-[160px] sm:w-full uppercase text-left pl-[20px] pr-[5px] py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">Item Item</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">Price</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">Quantity</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">Totals</li>
        </ul>
        <ul v-for="(item, index) in $store.state.items" :key="index" class="flex text-center items-stretch sm:grid sm:grid-cols-[1.6fr_repeat(3,.7fr)] sm:w-full w-fit">
          <li class="flex flex-col font-[500] w-[160px] sm:w-full uppercase text-left pr-[5px] pl-[20px] py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]"><span class="whitespace-pre">{{item.title}}</span><small class="text-[#535353] text-[12px] font-[400]">{{item.description}}</small> </li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">${{item.price }}</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">{{item.quantity}}</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]" v-show="!$store.state.add">${{item.price * item.quantity}}</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase text-[14px] border-[.5px] border-[#e7e7e7]" v-show="$store.state.add"><input type="submit" value="REMOVE" id="REMOVE" @click="removeitems(index)" class="bg-gradient-to-b text-[white] from-[#990500] via-[#720400] to-[#630c00] text-sm cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "></li>
        </ul>
        <form v-show="$store.state.add">
          <ul class="flex text-center items-stretch sm:grid sm:grid-cols-[repeat(2,1.03fr)_repeat(3,.9fr)] sm:w-full w-fit">
            <li class="flex flex-col font-[500] w-[110px] sm:w-full uppercase text-left text-[14px] border-[.5px] border-[#e7e7e7]"><input type="text" ref="title" id="title" v-model="additem.title" class=" text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required></li>
            <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase text-[14px] border-[.5px] border-[#e7e7e7]"><input type="text" ref="description" id="description" v-model="additem.description" class=" text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required></li>
            <li class="flex justify-center items-center font-[500] w-[100px] sm:w-full uppercase text-[14px] border-[.5px] border-[#e7e7e7]"><input type="number" ref="price" id="price" v-model="additem.price" class="text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required></li>
            <li class="flex justify-center items-center font-[500] w-[100px] sm:w-full uppercase text-[14px] border-[.5px] border-[#e7e7e7]"><input type="number" ref="quantity" id="quantity" v-model="additem.quantity" class="text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required></li>
            <li class="flex justify-center items-center font-[500] w-[100px] sm:w-full uppercase text-[14px] border-[.5px] border-[#e7e7e7]"><input type="submit" value="ADD" id="ADD" @click="additems" class="bg-gradient-to-b text-[white] from-[#5bb1ef] via-[#4aa3e2] to-[#2064fd] text-sm cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 "></li>
          </ul>
        </form>
        <ul class="flex justify-between items-stretch sm:grid sm:grid-cols-[3fr_.7fr] sm:w-full w-full" v-show="!$store.state.add">
          <li class="flex justify-start sm:justify-end px-[20px] items-center font-[400] w-[410px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">SubTotal</li>
          <li class="flex justify-center items-center font-[400] w-[125px] sm:w-full uppercase py-[10px] text-[14px] border-[.5px] border-[#e7e7e7]">{{total}}</li>
        </ul>
        <ul class="flex justify-between items-stretch sm:grid sm:grid-cols-[3fr_.7fr] sm:w-full w-full" v-show="!$store.state.add">
          <li class="flex justify-start sm:justify-end px-[20px] items-center font-[500] w-[410px] sm:w-full uppercase py-[10px] text-[14px] text-[#336ff6] border-[.5px] border-[#e7e7e7]">Total</li>
          <li class="flex justify-center items-center font-[500] w-[125px] sm:w-full uppercase py-[10px] text-[14px] text-[#336ff6] border-[.5px] border-[#e7e7e7]">{{total}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ItemPage",
  data() {
    return {
      total: 0,
      additem: {
        "title": '',
        "discrption": '',
        "price": '',      
        "quantity": '',
      }
    }
  },
  methods:{
    additems(){
      if(this.$refs.title.value !== "" && this.$refs.description.value !== "" && this.$refs.price.value !== "" && this.$refs.quantity.value !== ""){
        this.$store.state.items.push(this.additem)
        this.additem = {
          "title": '',
          "discrption": '',
          "price": '',      
          "quantity": '',
        };
      for(let item of this.$store.state.items){
      this.total += item.price * item.quantity
    }
      }
    },
    removeitems(x){
      this.$store.state.items.splice(x,1)
      for(let item of this.$store.state.items){
      this.total += item.price * item.quantity
    }
    }
  },
 created() {
    for(let item of this.$store.state.items){
      this.total += item.price * item.quantity
    }
  },
};
</script>

<style lang="scss" scoped>
input:focus, button:focus, textarea:focus{
    outline: none;
}

::-webkit-scrollbar {
    width: 1px;
    height: 2px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #00435e; 
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a7eaff; 
  }
</style>