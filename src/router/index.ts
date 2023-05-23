import { createRouter, createWebHistory } from 'vue-router'
import { isNotAuthenticated, isAuthenticated } from './constraints'
import HomeView from 'view/home/HomeView.vue'

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                component: HomeView
            },
            {
                path: 'updates',
                name: 'updates',
                component: () => import('view/home/UpdatesView.vue'),
                meta: {
                    global: true
                }
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('view/home/AboutView.vue'),
                meta: {
                    global: true
                }
            }
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('view/auth/LoginView.vue')
            },
            {
                path: 'logout',
                name: 'logout',
                component: () => import('view/auth/LogoutView.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('view/auth/RegisterView.vue')
            }
        ]
    },
    {
        path: '/password',
        children: [
            {
                path: 'recover',
                name: 'recover',
                component: () => import('view/password/RecoverView.vue')
            },
            {
                path: 'reset/:token',
                name: 'reset',
                component: () => import('view/password/ResetView.vue')
            }
        ]
    },
    {
        path: '/character',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: async () => await import('view/game/ProfileView.vue')
            },
            {
                path: 'status',
                name: 'status',
                component: async () => await import('view/game/StatusView.vue')
            },
            {
                path: 'class',
                name: 'class',
                component: async () => await import('view/game/SelectClassView.vue')
            },
            {
                path: 'options',
                name: 'options',
                component: async () => await import('view/game/OptionsView.vue')
            }
        ]
    },
    {
        path: '/dungeon',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'dungeon',
                component: async () => await import('view/game/DungeonView.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to) => {
    const { requiresAuth, global } = to.meta

    if (isNotAuthenticated(requiresAuth)) return { path: '/auth/login' }

    if (isAuthenticated(requiresAuth) && !global) return { path: '/character/profile' }
})

export default router
