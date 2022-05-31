<template>
  <div class="spinner">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// CSS Spinner
// Styles from https://loading.io/css/
$spinner-size: 16px;
$border-size: 3px;

.spinner {
  display: inline-block;
  width: $spinner-size;
  height: $spinner-size;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: $spinner-size;
  height: $spinner-size;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: calc($spinner-size - 20%);
    height: calc($spinner-size - 20%);
    margin: $border-size;
    border: $border-size solid $white;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $white transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>