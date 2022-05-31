<template>
  <div :class="['form-control', colorValue]">
    <input type="radio"
           :id="colorValue"
           :name="name"
           :value="colorValue"
           @change="$emit('change', $event.target.value)"
    >
    <label :for="colorValue" class="sr-only">{{ colorValue }}</label>
  </div>
</template>

<script>
export default {
  emits: ['change'],
  props: {
    name: {
      type: String,
      required: true
    },
    colorValue: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
$radio-size: 40px;
$red-color: #ff4345;
$blue-color: #008fc8;
$white-color: #efefef;
$black-color: #000;

.form-control {
  position: relative;
  width: $radio-size;
  height: $radio-size;
  border: 1px solid rgba($black, 0.1);
  border-radius: 3px;

  // Color Variations
  &.white { background-color: $white-color; }
  &.black { background-color: $black-color; }
  &.red { background-color: $red-color; }
  &.blue { background-color: $blue-color; }
}

input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  color: $brand-color--one;
  appearance: none;
  transition: outline 150ms;
  cursor: pointer;

  // Triangle
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: $radio-size solid rgba($white, 0.2);
    border-right: $radio-size solid transparent;
  }

  // Checkmark
  &::after {
    content: "";
    position: relative;
    bottom: 2px;
    display: inline-block;
    width: 8px;
    height: 14px;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    transform: rotate(45deg);
    transition: border-color 150ms;
  }

  &:checked {
    &::after {
      border-color: $grey-dark;
    }
  }

  &:hover,
  &:focus {
    border-radius: 1px;
    outline: 3px solid $grey-dark;
    outline-offset: 3px;
  }
}
</style>