<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <div class="group w-32 h-32 rounded-full bg-orange-400 flex items-center justify-center bg-black relative cursor-pointer" @mousedown="holding()" @mouseup="release()">
      <img class="absolute select-none" draggable="false" src="/freespirit.svg" alt="">
      <!-- <div class="relative"> -->
      <div class="relative"
        :class="{'block': isHolding, 'hidden': !isHolding }"
      >

        <div 
          @mouseup="changeColor('0xFFA500')"
          class="optionCircle bg-[#FFA500] deg144"
        >
          <img src="/start.svg">
        </div>
        
        <div 
          @mouseup="changeColor('0x03FFFF')"
          class="optionCircle bg-[#03FFFF] deg108"
        >
          <img src="/middle.svg">
        </div>
        
        <div 
          @mouseup="changeColor('0xFF00FF')"
          class="optionCircle bg-[#FF00FF] deg72"
        >
          <img src="/top.svg">
        </div>
        
        <div 
          @mouseup="changeColor('0x0')"
          class="optionCircle bg-[#101112] deg36"
        >
          <img src="/none.svg">
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const isHolding = ref(false)

const distance = ref('200px')
const radius = ref('3rem')

function holding(){
  console.log('holding!');
  isHolding.value = true

}
function release(){
  console.log('realising!');
  isHolding.value = false
}

async function changeColor(color){
  console.log('sup the color has changed to ' + color);
  const change = await useFetch('http://192.168.178.51:3000/changeColor/' + color)
}

</script>


<style scoped>
  .optionCircle{
    border-radius: 100vw;
    position: absolute;
    width: 6rem;
    height: 6em;
    color: white;
    user-select: none;
  }
  .optionCircle:hover{
    cursor: pointer;
  }

  .deg36{
    bottom: calc(200px * sin(36deg) - 3rem);
    left: calc(200px * cos(36deg) - 3rem);
  }
  .deg72{
    bottom: calc(200px * sin(72deg) - 3rem);
    left: calc(200px * cos(72deg) - 3rem);
  }
  .deg108{
    bottom: calc(200px * sin(108deg) - 3rem);
    left: calc(200px * cos(108deg) - 3rem);
  }
  .deg144{
    bottom: calc(200px * sin(144deg) - 3rem);
    left: calc(200px * cos(144deg) - 3rem);
  }

</style>
