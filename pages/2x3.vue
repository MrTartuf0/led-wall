<template>
  <ion-page>
    <ion-content>
      <div :style="gridStyle" class="grid gap-4 p-4">
        <div
          v-for="index in template.rows * template.columns"
          @click="selectHold(index)"
          :key="index"
          class="flex items-center justify-center"
        >
          <div
            ref="DOMholds"
            class="flex items-center justify-center rounded-full hold bg-gray ring-offset-4 ring-4 ring-white"
          >
            <div class="w-1/5 h-1/5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <ion-modal
        :is-open="isModalOpen"
        :initial-breakpoint="1"
        :breakpoints="[0, 1]"
        @didDismiss="isModalOpen = false"
      >
        <div class="options">
          <div @click="changeColor('0x66CC66')" class="optionCircle bg-green">
            <img src="/foot.svg" />
          </div>
          <div @click="changeColor('0xFFA500')" class="optionCircle bg-yellow">
            <img src="/start.svg" />
          </div>

          <div @click="changeColor('0x03FFFF')" class="optionCircle bg-cyan">
            <img src="/middle.svg" />
          </div>

          <div @click="changeColor('0xFF00FF')" class="optionCircle bg-magenta">
            <img src="/top.svg" />
          </div>

          <div @click="removeColor()" class="optionCircle bg-none">
            <img src="/none.svg" />
          </div>
        </div>
      </ion-modal>

      <p>{{ holds }}</p>
      <ion-button router-link="/" router-direction="back">go back</ion-button>
      <ion-button @click="clearBoard()">clear board</ion-button>
      <ion-button @click="sendJson()">send</ion-button>

      <ion-input
        v-model="baseURL"
        placeholder="Put the Raspberry PI, ip address: ..."
      ></ion-input>
      

      <div class="flex">
        <ion-input
          v-model="myURL"
          placeholder="Put the URL to fetch..."
        ></ion-input>
        <ion-button @click="fetchURL()">Fetch</ion-button>
      </div>
      <p>{{ myResponse }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { CapacitorHttp } from "@capacitor/core";

const template = {
  rows: 3,
  columns: 2,
};

const ringColors = {
  "0x66CC66": "ring-green",
  "0xFFA500": "ring-yellow",
  "0x03FFFF": "ring-cyan",
  "0xFF00FF": "ring-magenta",
  "0x101112": "ring-white",
};

const gridStyle = {
  gridTemplateRows: `repeat(${template.rows}, minmax(0, 1fr))`,
  gridTemplateColumns: `repeat(${template.columns}, minmax(0, 1fr))`,
};

const baseURL = ref("http://150.0.95.80:3000");

const myURL = ref(baseURL);
const myResponse = ref();
async function fetchURL() {
  try {
    const response = await CapacitorHttp.request({
      method: "GET",
      url: myURL.value,
    });

    console.log(response);
    myResponse.value = response;
  } catch (error) {
    console.error("Error:", error);
  }
}

const DOMholds = ref();
const holds = ref(new Map());

const isModalOpen = ref(false);

const selectedHold = ref();
const selectedColor = ref();

function selectHold(hold) {
  selectedHold.value = hold - 1;
  isModalOpen.value = true;
}

function changeColor(color) {
  selectedColor.value = color;
  isModalOpen.value = false;
  holds.value.set(selectedHold.value, selectedColor.value);
  DOMholds.value[selectedHold.value].classList.remove(
    "ring-white",
    "ring-cyan",
    "ring-green",
    "ring-yellow",
    "ring-magenta"
  );
  DOMholds.value[selectedHold.value].classList.add(ringColors[color]);
}

function removeColor() {
  isModalOpen.value = false;
  DOMholds.value[selectedHold.value].classList.remove(
    "ring-white",
    "ring-cyan",
    "ring-green",
    "ring-yellow",
    "ring-magenta"
  );
  DOMholds.value[selectedHold.value].classList.add("ring-white");
  holds.value.delete(selectedHold.value);
}

async function clearBoard() {
  holds.value.clear();
  DOMholds.value.forEach((hold) => {
    hold.classList.remove(
      "ring-white",
      "ring-cyan",
      "ring-green",
      "ring-yellow",
      "ring-magenta"
    );
    hold.classList.add("ring-white");
  });
  // await fetch(baseURL + "/clearBoard");
  try {
    const response = await CapacitorHttp.request({
      method: "GET",
      url: baseURL.value + "/clearBoard",
    });

    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function sendJson() {
  try {
    const holdsData = Object.fromEntries(holds.value);
    console.log(JSON.stringify(holdsData));

    const response = await CapacitorHttp.request({
      method: "POST",
      url: baseURL.value + "/lightUpBoard",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(holdsData),
    });

    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>

<style>
.hold {
  height: calc((100vw - 2rem) / 6);
  width: calc((100vw - 2rem) / 6);
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
