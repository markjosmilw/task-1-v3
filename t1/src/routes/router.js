import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BasicForm from '../pages/BasicForm.vue'
import BasicContact from '../pages/BasicContact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basic',
        name: 'BasicForm',
        component: BasicForm
    },
    {
        path: '/contact',
        name: 'BasicContact',
        component: BasicContact
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router