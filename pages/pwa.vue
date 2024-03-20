<template>
  <ion-page>
    <ion-content>
      <VitePwaManifest />
      <h1>Hello there</h1>
      <p>{{ $pwa }}</p>
      <ion-button @click="$pwa.install()">Download PWA</ion-button>
    </ion-content>
  </ion-page>
</template>
