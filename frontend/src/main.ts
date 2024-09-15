import './assets/main.css'

// Importing Vue's createApp function
import { createApp } from 'vue'

// Importing createPinia for state management
import { createPinia } from 'pinia'

// Importing the root component
import App from './App.vue'

// Importing the router
import router from './router'

// Creating the Vue app instance with the root component
const app = createApp(App)

// Installing the Pinia plugin for global state management
app.use(createPinia())

// Installing the router plugin for navigation
app.use(router)

// Mounting the app to the DOM element with id 'app'
app.mount('#app')
