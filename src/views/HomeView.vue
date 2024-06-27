<template>
  <main>
    <h1>{{ $t('hello') }}</h1>
    <p>{{ $t('welcome') }}</p>
    <div>
      <button type="button" @click="fetchUserInfo" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info" @click="changeLanguage('zh')">切换成中文</button>
      <button type="button" class="btn btn-light" @click="changeLanguage('en')">切换成英文</button>
      <button type="button" class="btn btn-dark" @click="goPath('/about')">Go About</button>

    </div>
  </main>
</template>

<script setup lang="ts">
import { getConfs } from '@/api/index';
import { useNavigation, changeLanguage } from '@/utils/common'
const { goPath } = useNavigation();

const fetchUserInfo = async () => {
  try {
    const data = await getConfs(); // 假设用户ID为1
    console.log(data);
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
};
</script>
