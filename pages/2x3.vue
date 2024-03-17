<template>
  <ion-page>
    <ion-content>
      {{ holds }}

      <ion-button @click="sendJson()">Send</ion-button>
      <ion-button router-link="/2x3">2x3</ion-button>

      <div :style="gridStyle" class="grid gap-2 p-4">
        <div
          v-for="index in template.rows * template.columns"
          @click="selectHold(index)"
          :key="index"
        >
          <div
            ref="myhold"
            class="flex items-center justify-center rounded-full hold bg-gray ring-offset-2 ring-2 ring-white"
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
    </ion-content>
  </ion-page>
</template>

<script setup>

const template = {
  rows: 24,
  columns: 12,
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

const myhold = ref();
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

  // console.log(selectedHold.value);
  myhold.value[selectedHold.value].classList.remove(
    "ring-white",
    "ring-cyan",
    "ring-green",
    "ring-yellow",
    "ring-magenta"
  );
  myhold.value[selectedHold.value].classList.add(ringColors[color]);
}

function removeColor() {
  isModalOpen.value = false;
  myhold.value[selectedHold.value].classList.remove(
    "ring-white",
    "ring-cyan",
    "ring-green",
    "ring-yellow",
    "ring-magenta"
  );
  myhold.value[selectedHold.value].classList.add("ring-white");
  holds.value.delete(selectedHold.value);
}

function sendJson() {
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
