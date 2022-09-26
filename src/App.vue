<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { makeServer } from './server';

makeServer();

export default defineComponent({
  name: 'App',
});
</script>
