<template>
  <button class="btn" :type="type" :aria-disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
  }
}
</script>

<style scoped lang="scss">
$disabled-text-color: #e8e6e6;
$disabled-bg-color: #d2cece;

.btn {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  border: 0;
  border-radius: 25px;
  margin: 0;
  padding: 0.8rem 3rem 1.1rem;
  font-size: 2rem;
  line-height: 1.15;
  color: $white;
  background-color: $brand-color--two;
  box-shadow: 1px 2px 3px rgba($black, 0.3);
  cursor: pointer;
  transition: background-color 150ms;

  &:hover {
    background-color: lighten($brand-color--two, 10%);
  }

  &:focus-visible {
    outline: 2px solid $grey-dark;
  }

  // Inclusive disable button
  // For more: https://css-tricks.com/making-disabled-buttons-more-inclusive/
  &[aria-disabled="true"] {
    color: $disabled-text-color;
    background-color: $disabled-bg-color;
    cursor: not-allowed;
  }
}
</style>