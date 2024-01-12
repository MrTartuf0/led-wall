<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content >
      <input v-model="selectedHold" placeholder="hold" />
      <input v-model="selectedColor" placeholder="color" />
      <button @click="storeData()">Send</button>

    </ion-content>      
  </ion-app>
</template>

<script setup>
import { IonContent } from '@ionic/vue';

const holds = ref(new Map());

const selectedHold = ref()
const selectedColor = ref()

function storeData(){
  holds.value.set(selectedColor.value, selectedHold.value)
  console.log(holds.value);
}

</script>
