<script lang="ts" setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { theme } = useData<{ avatar: string }>()
const avatar = theme.value.avatar

onMounted(() => {
  setTimeout(() => {
    const hello = document.getElementById('hello') as HTMLElement
    hello.classList.remove('hello')
  }, 5000)
})
</script>

<template>
  <div class="content">
    <img :src="avatar" width="135" height="135" class="avatar">
  </div>
  <div class="shareCard">
    <div class="title blog-title">
      <span id="hello" class="hello">👋</span>
      <span> Hi there! I'm zorroe~</span>
    </div>
    <p class="description">
      A passionate web developer based in SuZhou.
    </p>
    <h2 class="blog-title text-center text-lg font-bold">
      流水不腐，户枢不蠹。
    </h2>
  </div>
</template>

  <style scoped lang="scss">
  .content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
}
.avatar {
  border: 0px solid var(--vp-avatar-border);
  transition: all 0.5s ease-in-out;
}

@keyframes avatar-transform {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes hello-tranform {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(10deg);
    transform-origin: 80% 80% 0;
  }

  100% {
    transform: rotate(0);
  }
}

.avatar:hover {
  animation: 2s linear 0s infinite avatar-transform;
}

.hello {
  animation: 1s linear 0s infinite hello-tranform;
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
