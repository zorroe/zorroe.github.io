<template>
  <div class="w-screen h-screen pt-16 bg-black bg-opacity-70">
    <Transition enter-active-class="animate__animated meslideInDown">
      <div
        v-show="loadFinish"
        class="w-full flex flex-col justify-center items-center gap-4">
        <img class="w-24 h-24 rounded-full" src="@/assets/avatar.jpg">
        <div class="text-white text-3xl name">zorroe</div>
        <div class="text-white text-4xl Motto">Let's Code</div>
        <div class="w-1/4 border-b border-[rgba(255,255,255,0.3)]"></div>
        <Hitokoto />
        <HmBtns />
        <SLink />
      </div>
    </Transition>
  </div>
  <BingBg />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loadFinish = ref(false)

onMounted(() => {
  loadFinish.value = true
})
</script>

<style scoped>
#description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Motto {
  font-family: 'Roboto Mono';
}

.name {
  font-family: 'Playpen Sans';
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0) scaleY(1.1);
  }

  to {
    opacity: 1;
  }
}

.meslideInDown {
  animation-name: slideInDown;
  animation-duration: 1.5s;
}
</style>
