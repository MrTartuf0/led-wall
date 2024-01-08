<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>
      <ion-modal trigger="open-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
        <div class="options">
          <div 
            @mouseup="changeColor('0x66CC66')"
            class="optionCircle bg-green"
          >
            <img src="/foot.svg">
          </div>
          <div 
            @mouseup="changeColor('0xFFA500')"
            class="optionCircle bg-yellow"
          >
            <img src="/start.svg">
          </div>
          
          <div 
            @mouseup="changeColor('0x03FFFF')"
            class="optionCircle bg-cyan"
          >
            <img src="/middle.svg">
          </div>
          
          <div 
            @mouseup="changeColor('0xFF00FF')"
            class="optionCircle bg-magenta"
          >
            <img src="/top.svg">
          </div>
          
          <div 
            @mouseup="changeColor('0x0')"
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
import { IonButton, IonModal, IonContent } from '@ionic/vue';
</script>


<style>
.optionCircle{
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
