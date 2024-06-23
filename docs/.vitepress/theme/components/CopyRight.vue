<script lang="ts" setup></script>

<template>
  <footer>
    <div>
      Powered by
      <a href="https://github.com/zorroe" target="_blank" title="作者">zorroe</a>
    </div>
    |
    <div>Copyright © 2024-present</div>
    |
    <div>Released under the MIT License</div>
  </footer>
</template>

  <style scoped lang="scss">
  footer {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px;
  color: var(--vp-c-text);
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);
  a {
    color: var(--vp-c-brand);
    font-weight: bold;
  }
  .views {
    display: inline-block;
  }
}
</style>
