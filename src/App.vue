<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <HeaderComponent></HeaderComponent>
  <div class="main container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped></style>
