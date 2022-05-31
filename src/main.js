import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard";
import BaseSpinner from "@/components/ui/BaseSpinner";

const app = createApp(App);

// Global components
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseSpinner', BaseSpinner);

app.mount('#app');
