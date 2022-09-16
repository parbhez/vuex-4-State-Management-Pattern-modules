import { createStore } from 'vuex'

import categoryModule from './modules/category'
import postModule from './modules/post'

// Create a new store instance.
const store = createStore({
    modules: {
        category: categoryModule,
        post: postModule
    }
})

export default store