<template>
    <div class="content">
      <img :src="avatar" width="135" height="135" class="avatar" />
    </div>
    <div class="shareCard">
      <h1 class="title">👋 Hi there! I'm zorroe~</h1>
      <p class="description">A passionate web developer based in SuZhou.</p>
      <h2 class="blog-title text-center text-lg font-bold">路漫漫其修远兮，吾将上下而求索。</h2>
    </div>
  </template>
  <script lang="ts" setup>
  import { useData } from 'vitepress'
  const { theme } = useData<{ avatar: string }>()
  const avatar = theme.value.avatar
  </script>
  <style scoped lang="scss">
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
  }
  .avatar {
    border: 0px solid var(--vp-avatar-border);
    transition: all 0.5s ease-in-out
  }
  
  @keyframes avatar-transform {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .avatar:hover {
    animation: 5s linear 0s infinite avatar-transform;
  }
  
  .shareCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    text-align: center;
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 2.2em;
    font-weight: bold;
  }
  .blog-title {
    color: var(--vp-c-brand-dark);
  }
  .dark {
    .blog-title {
      color: var(--vp-c-brand-light);
    }
  }
  .description {
    margin: 1em 0;
  }
  </style>
  