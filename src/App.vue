<template>
  <div class="wrapper">
    <ShoppingCart :product="product" />
  </div>
</template>

<script>
// Components
import ShoppingCart from "./components/cart/ShoppingCart";

// Data
import product from "./data/product-data";

export default {
  components: {
    ShoppingCart
  },
  computed: {
    product() {
      return product;
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  overflow-x: hidden;
  background-color: $white;
}

// Shopping Cart component is completely responsive
// and its size can be controlled by a wrapper
$gutter: 20px;

.wrapper {
  box-sizing: border-box;
  width: 100%;
  max-width: 220px + (2 * $gutter);
  margin: auto;
  padding: (2 * $gutter) $gutter;

  // Non mobile devices
  @include media-query(min-mobile) {
    max-width: 800px + (2 * $gutter);
  }
}
</style>
