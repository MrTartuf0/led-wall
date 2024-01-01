<template>
  <div class="flex w-full min-h-screen items-center justify-center flex-col">
    <h1 class="font-bold text-2xl mb-4">Select the color of the led: </h1>
    <div class="flex gap-8">
      <button @click="changeColor('0xaa00aa')" class="bg-magenta text-white p-2 rounded-lg">
        magenta
      </button>
      <button @click="changeColor('0x00ffff')" class="bg-cyan text-white p-2 rounded-lg">
        cyan
      </button>
      <button @click="changeColor('0xFFA500')" class="bg-yellow text-white p-2 rounded-lg">
        yellow
      </button>
      <button @click="changeColor('0x0')" class="bg-none text-white p-2 rounded-lg">
        none
      </button>
    </div>
  </div>
</template>

<script setup>

async function changeColor(color){
  console.log('sup the color has changed to ' + color);
  const change = await useFetch('http://192.168.178.51:3000/changeColor/' + color)
}

</script>
