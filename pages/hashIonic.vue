<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content >

      <button @click="sendJson()">Send</button>

      <div :style="gridStyle" class="grid gap-2 p-4">
        <div v-for="index in (template.rows * template.columns)" @click="selectHold(index)">
          <div class="flex items-center justify-center rounded-full hold bg-gray ring-offset-2 ring-2"
            :class="{
              'ring-0': !holds.has(index-1),
              'ring-cyan': shouldApplyRing(index-1, '0x03FFFF'),
              'ring-green': shouldApplyRing(index-1, '0x66CC66'),
              'ring-yellow': shouldApplyRing(index-1, '0xFFA500'),
              'ring-magenta': shouldApplyRing(index-1, '0xFF00FF'),
            }"  
          >
            <div class="w-1/5 h-1/5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>


      <ion-modal :is-open="isModalOpen" :initial-breakpoint="1" :breakpoints="[0, 1]" @didDismiss="isModalOpen = false">
        <div class="options">
          <div 
            @click="changeColor('0x66CC66')"
            class="optionCircle bg-green"
          >
            <img src="/foot.svg">
          </div>
          <div 
            @click="changeColor('0xFFA500')"
            class="optionCircle bg-yellow"
          >
            <img src="/start.svg">
          </div>
          
          <div 
            @click="changeColor('0x03FFFF')"
            class="optionCircle bg-cyan"
          >
            <img src="/middle.svg">
          </div>
          
          <div 
            @click="changeColor('0xFF00FF')"
            class="optionCircle bg-magenta"
          >
            <img src="/top.svg">
          </div>
          
          <div 
            @click="removeColor()"
            class="optionCircle bg-[#101112]"
          >
            <img src="/none.svg">
          </div>

        </div>
      </ion-modal>
  </ion-content>      

  </ion-app>
</template>

<script setup>
import { IonModal, IonContent } from '@ionic/vue';

const template = {
  rows: 24,
  columns: 12,
}

const gridStyle = {
  gridTemplateRows: `repeat(${template.rows}, minmax(0, 1fr))`,
  gridTemplateColumns: `repeat(${template.columns}, minmax(0, 1fr))`,
};

const holds = ref(new Map());

const isModalOpen = ref(false)

const selectedHold = ref()
const selectedColor = ref()

function selectHold(hold) {
  selectedHold.value = hold - 1
  isModalOpen.value = true
}

function changeColor(color) {
  selectedColor.value = color
  isModalOpen.value = false
  holds.value.set(selectedHold.value , selectedColor.value)
}

function removeColor() {
  isModalOpen.value = false
  holds.value.delete(selectedHold.value)
}

function shouldApplyRing(index, targetColor) {
  return holds.value.get(index) === targetColor;
}

function sendJson(){
  console.log(Object.fromEntries(holds.value));
}

</script>


<style>
.hold {
  height: calc((100vw - 2rem) / 16);
  width: calc((100vw - 2rem) / 16);
}

.optionCircle {
  border-radius: 100vw;
}

.options {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  gap: 16px;
}

ion-modal {
  --height: auto;
}
</style>
