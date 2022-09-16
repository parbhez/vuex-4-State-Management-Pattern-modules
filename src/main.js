import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import 'bootstrap/dist/css/bootstrap.css'

import store from './store/index'

app.use(store);

// Globally Register post and category componet
// import CategoryComponent from './components/Category-Component.vue'
// import PostComponent from './components/Post-Component.vue'
// app.component('CategoryComponent', CategoryComponent)
// app.component('PostComponent', PostComponent)

app.mount('#app')