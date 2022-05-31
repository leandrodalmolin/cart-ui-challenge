<template>
  <form class="shopping-cart" @submit.prevent="submitForm">
    <h3 class="shopping-cart__heading">Your selection</h3>
    <BaseCard>
      <header>
        <img :srcset="`${this.product.image.src.highres} 1300w, ${this.product.image.src.lowres} 500w`"
             :src="product.image.src.highres"
             :alt="product.image.alt"
        >
      </header>
      <div class="shopping-cart__body">
        <p><b>{{ product.title }}</b></p>
        <ul>
          <li v-for="detail in product.details" :key="detail">
            {{ detail }}
          </li>
        </ul>
        <p><b>OTR Price</b></p>
        <p class="shopping-cart__price">£ <span>{{ product.price.toLocaleString('en-GB') }}</span></p>
        <ul class="shopping-cart__colors">
          <li v-for="color in product.colors" :key="color">
            <RadioColorInput name="colors" :color-value="color" @change="onColorSelection" />
          </li>
        </ul>
        <p aria-live="assertive" class="validation-message">
          <b v-if="isColorValid !== null && !isColorValid">Please select a colour.</b>
        </p>
      </div>
      <footer>
        <BaseButton type="submit" :disabled="isSubmitButtonDisabled">
          <span v-if="!isSubmittingForm">Buy</span>
          <BaseSpinner v-else></BaseSpinner>
          <span class="sr-only" aria-live="assertive">
            <span v-if="isSubmittingForm">Adding to cart, wait...</span>
          </span>
        </BaseButton>
      </footer>
    </BaseCard>
  </form>
</template>

<script>
import RadioColorInput from "../ui/RadioColorInput";
import BaseButton from "../ui/BaseButton";

export default {
  components: {
    BaseButton,
    RadioColorInput
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    // 1. Set as null so validation message is not displayed when the page is loaded.
    //    Changed to Boolean after first validation.
    return {
      form: {
        color: ''
      },
      isColorValid: null, // [1]
      isFormValid: false,
      isSubmitButtonDisabled: true,
      isSubmittingForm: false
    }
  },
  methods: {
    // Handles on change event emitted by RadioColorInput
    onColorSelection(color) {
      this.form.color = color;
      this.isSubmitButtonDisabled = false;
      this.isColorValid = true;
    },

    // Handles form submission
    async submitForm() {
      this.isSubmittingForm = true;
      this.validateForm();

      if (!this.isFormValid) {
        this.isSubmittingForm = false;
        return;
      }

      // Simulate an async submission
      await setTimeout(() => {
        alert(`Form Submitted: Colour selected is ${this.form.color}`);
        this.isSubmittingForm = false;
      }, 2000);
    },

    // Handles form validation
    validateForm() {
      this.isFormValid = true;

      if (!this.isColorValid) {
        this.isFormValid = false;

        // Removes null status when submit button is clicked for the first time
        if (this.isColorValid === null) {
          this.isColorValid = false;
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
$error-color: #cc0000;

header {
  img {
    display: block;
    width: 100%;
  }
}

.validation-message {
  color: $error-color;
}

.shopping-cart__heading {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.shopping-cart__body {
  padding: 0.45rem 1rem;

  p,
  li {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 0;
    margin-bottom: 1.2rem;
  }

  .shopping-cart__price {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    line-height: 1;

    span {
      color: $brand-color--one;
    }
  }
}

.shopping-cart__colors {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

footer {
  border-top: 1px solid $grey-ultra-light;
  padding: 1.7rem 0.5rem;
  background: $brand-color--one url("../../assets/images/houdstooth-primary-secondary-teal.png") no-repeat right;
  background-size: contain;
}
</style>