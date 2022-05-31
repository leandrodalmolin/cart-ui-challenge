<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
$shadow-color: #cecece;

.card {
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 3px 2px 2px $shadow-color;
}
</style>