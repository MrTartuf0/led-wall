<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content >

      <!-- <p>Selected color is: {{ selectedColor }}</p> -->
      <!-- <p>Selected hold is: {{ selectedHold }}</p> -->
      <!-- <p>IsModalOpen: {{ isModalOpen }}</p> -->

      <p>{{ holds }}</p>

      <div :style="gridStyle" class="grid gap-2 p-4">
        <div v-for="index in (template.rows * template.columns)" @click="selectHold(index)">
          <div class="flex items-center justify-center rounded-full hold bg-gray "

          >
          <!-- ring-magenta ring-2 ring-offset-2 -->
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
import { IonButton, IonModal, IonContent, IonCol, IonGrid, IonRow } from '@ionic/vue';

const template = {
  rows: 24,
  columns: 12,
}

const gridStyle = {
  gridTemplateRows: `repeat(${template.rows}, minmax(0, 1fr))`,
  gridTemplateColumns: `repeat(${template.columns}, minmax(0, 1fr))`,
};

const holds = ref([]);

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

  addObjectOrUpdate({ id: selectedHold.value, color: selectedColor.value })
}

function addObjectOrUpdate(newObject) {
  const existingIndex = holds.value.findIndex(obj => obj.id === newObject.id);

  if (existingIndex !== -1) {
    // Modify existing object with the new properties
    holds.value[existingIndex] = { ...holds.value[existingIndex], ...newObject };
    console.log(`Updated object with id ${newObject.id}`);
  } else {
    // Add the new object if no duplicate id is found
    holds.value.push(newObject);
    console.log(`Added object with id ${newObject.id}`);
  }
}

function removeColor() {
  isModalOpen.value = false

  const indexToRemove = holds.value.findIndex(obj => obj.id === selectedHold.value);

  if (indexToRemove !== -1) {
    // Remove the object from the array
    holds.value.splice(indexToRemove, 1);
    console.log(`Removed object with id ${selectedHold.value}`);
  } else {
    console.log(`Object with id ${selectedHold.value} not found`);
  }
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
