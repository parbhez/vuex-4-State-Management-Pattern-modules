import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import 'bootstrap/dist/css/bootstrap.css'
import store from './store/index'

app.use(store);

app.config.errorHandler = () => null;
app.config.warnHandler = () => null;

//MultiSelect Plugin 
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Multiselect from '@suadelabs/vue3-multiselect'
app.component('multi-select', Multiselect)



// Globally Register post and category componet
// import CategoryComponent from './components/Category-Component.vue'
// import PostComponent from './components/Post-Component.vue'
// app.component('CategoryComponent', CategoryComponent)
// app.component('PostComponent', PostComponent)

app.mount('#app')