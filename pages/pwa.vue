<script setup>
const { $pwa } = useNuxtApp();
console.log($pwa);
</script>
<template>
  <ion-page>
    <ion-content>
      <VitePwaManifest />
      <h1>Hello there</h1>
      <p>{{ $pwa }}</p>
    </ion-content>
  </ion-page>
</template>
