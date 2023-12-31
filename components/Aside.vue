<template>
  <div class="flex flex-col gap-4 px-8 pt-4">
    <el-tooltip
      v-for="icon in data"
      :content="icon.tooltip"
      :placement="icon.placement"
      effect="dark">
      <img
        class="link"
        @click="icon.fun"
        :src="icon.icon" />
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
interface Icon {
  tooltip: string
  placement: any
  fun: Function
  icon: any
}

interface Props {
  data: Array<Icon>
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      tooltip: '返回',
      placement: 'right',
      fun: () => {},
      icon: '/svg/left.svg',
    },
  ] as any,
})
</script>

<style scoped></style>
