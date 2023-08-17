import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)


app.use(store)
app.use(MasonryWall)
app.mount('#app')

