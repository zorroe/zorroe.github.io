<template>
  <div class="flex gap-8 mt-4">
    <a
      href="https://github.com/zorroe"
      target="_blank">
      <img
        class="link"
        @click="linkToGithub"
        src="/svg/github.svg" />
    </a>
    <a
      href="https://space.bilibili.com/39139616"
      target="_blank">
      <img
        class="link"
        @click="linkToBili"
        src="/svg/bilibili.svg" />
    </a>

    <a
      href="https://zorroe-2500.xlog.app/"
      target="_blank">
      <img
        class="link"
        @click="linkToXlog"
        src="/svg/xlog.svg" />
    </a>
    <a
      href="mailto:1318753541@qq.com"
      target="_blank">
      <img
        class="link"
        @click="sendEamil"
        src="/svg/mail.svg"
    /></a>
  </div>
</template>

<script setup lang="ts">
const linkToGithub = () => {}

const linkToBili = () => {}

const linkToXlog = () => {}

const sendEamil = () => {
  console.log('发送邮件给我')
}
</script>

<style scoped>
</style>
