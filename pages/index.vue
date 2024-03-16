<template>
  <NuxtPwaManifest />
  <ion-app>
    <ion-router-outlet />
    <ion-content >
      <h1>Sup!</h1>
      <p>
        {{ $pwa?.isPWAInstalled }}
      </p>
    </ion-content>      
  </ion-app>
</template>
