<template>
  <main>
    <div>
      <button type="button" @click="fetchUserInfo" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { getConfs } from '@/api/index';

const fetchUserInfo = async () => {
  try {
    const data = await getConfs(); // 假设用户ID为1
    console.log(data);
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
};
</script>
