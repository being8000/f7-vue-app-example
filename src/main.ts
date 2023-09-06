// Import Vue
import { createApp } from "vue";
// main.ts
import "virtual:uno.css";
// Import Framework7 Bundle
import Framework7 from "framework7/lite-bundle";

// Import Framework7-Vue with helper to register all components
import Framework7Vue from "framework7-vue/bundle";

// Import your main app component
import "framework7/css/bundle";
import App from "./App.vue";

// Init plugin and register all components
Framework7.use(Framework7Vue);

// create Vue app
const app = createApp(App);
// register all Framework7 Vue components by passing Vue app instance there
// registerComponents(app);

app.mount("#app");
