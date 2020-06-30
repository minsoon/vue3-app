const routes = [
  {
    path: '/chat/room',
    name: 'Home',
    component: () => import(/* webpackChunkName: "ChatRoom" */ '../views/chat/Room.vue'),
    meta: {
      requireAuth: true
    }
  }
]

if (process.env.NODE_ENV !== 'production') {
    routes.push(
        {
            name: 'DevSdk',
            path: '/devSdk',
            component: import(/* webpackChunkName: "DevSdk" */ '../views/devBox/DevSdk.vue'),
            meta: {
                requireAuth: false
            }
        }
    );
}

export default routes
