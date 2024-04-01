<template>
    <Layout>
      <template #doc-before> </template>
      <template #doc-after> </template>
      <!-- Home slot-->
      <template #home-hero-info></template>
      <template #home-features-after> <HomePage /></template>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import HomePage from './HomePage.vue'
  const { Layout } = DefaultTheme
  import DefaultTheme from 'vitepress/theme'
  </script>
  <style scoped></style>
  