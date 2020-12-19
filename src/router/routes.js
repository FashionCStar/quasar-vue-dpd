// TODO:: separate route definitions by modules and just import here
// import routeModules from 'features/routes-index.js'
// import store from 'src/store'
// function authGuard (to, from, next) {
//   // console.log('to', store.getters['auth/token'])
//   // next()
//   if (LocalStorage.has('token')) {
//     // or however you store your logged in state
//     next() // allow to enter route
//   } else {
//     next('/login') // go to '/login';
//   }
// }
const routes = [
  {
    path: '/',
    meta: {
      title: 'Report Management',
      needAuth: true
    },
    component: () => import('pages/Home.vue')
  },
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          title: 'DPD Login'
        },
        component: () => import('pages/Authentication/login.vue')
      },
      {
        path: '/signup',
        name: 'Signup',
        meta: {
          title: 'DPD Sign Up'
        },
        component: () => import('pages/Authentication/signup.vue')
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: {
          title: 'Forgot Password'
        },
        component: () => import('pages/Authentication/forgot-password.vue')
      },
      {
        path: '/reset-password',
        name: 'ResetPassword',
        meta: {
          title: 'Reset Password'
        },
        component: () => import('pages/Authentication/reset-password.vue'),
        props: (route) => ({ query: route.query.token })
      },
      {
        path: '/confirm-user',
        name: 'ConfirmUser',
        meta: {
          title: 'Confirm User'
        },
        component: () => import('pages/Authentication/confirm-user.vue'),
        props: (route) => ({ query: route.query.token })
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          needAuth: true
        },
        component: () => import('layouts/MyLayout.vue'),
        children: [
          { path: '/', component: () => import('pages/Dashboard/Index.vue') },
          {
            path: 'my-profile',
            name: 'MyProfile',
            meta: {
              title: 'Profile'
            },
            component: () => import('pages/Authentication/profile.vue')
          },
          {
            path: 'users',
            name: 'Users',
            meta: {
              title: 'USERS',
              roles: ['admin']
            },
            component: () => import('pages/Dashboard/Admin/user/list.vue')
          },
          {
            path: 'users/new',
            name: 'New User',
            meta: {
              title: 'Create New User',
              roles: ['admin']
            },
            component: () => import('pages/Dashboard/Admin/user/detail.vue')
          },
          {
            path: 'users/:id/detail',
            name: 'User Detail',
            meta: {
              title: 'User Detail',
              roles: ['admin']
            },
            component: () => import('pages/Dashboard/Admin/user/detail.vue')
          },
          {
            path: 'schedules',
            name: 'Schedules',
            meta: {
              title: 'SCHEDULE',
              roles: ['admin', 'user']
            },
            component: () => import('pages/Dashboard/Admin/reports/list.vue')
          },
          {
            path: 'schedules/new',
            name: 'New Schedule',
            component: () => import('pages/Dashboard/Admin/reports/create-report.vue'),
            meta: {
              title: 'Create New Schedule',
              roles: ['admin', 'user']
            }
          },
          {
            path: 'schedules/:report_no/detail',
            name: 'Edit Schedule',
            component: () => import('pages/Dashboard/Admin/reports/edit-report.vue'),
            meta: {
              title: 'Schedule Detail',
              roles: ['admin', 'user']
            }
          },
          {
            path: 'performance',
            name: 'Performance',
            meta: {
              title: 'PERFORMANCE',
              roles: ['admin', 'user']
            },
            component: () => import('pages/Dashboard/Admin/reports/monthly-list.vue')
          },
          {
            path: 'couriers',
            name: 'Couriers',
            meta: {
              title: 'COURIERS',
              roles: ['admin', 'user']
            },
            component: () => import('pages/Dashboard/Admin/reports/name-list.vue')
          },
          {
            path: 'routes',
            name: 'Routes',
            meta: {
              title: 'ROUTES',
              roles: ['admin', 'user']
            },
            component: () => import('pages/Dashboard/Admin/reports/number-list.vue')
          }
        ]
      }
    ]
  }
  // add other routes
  // ...Object.keys(routeModules).map(v => routeModules[v])
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
