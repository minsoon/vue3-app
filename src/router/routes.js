const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
      requireAuth: true
    }
  }
]

if (process.env.NODE_ENV !== 'production') {
    routes.push(
        {
            name: 'DevPage',
            path: '/devPage',
            component: import(/* webpackChunkName: "DevPage" */ '../views/devBox/DevPage.vue'),
            meta: {
                requireAuth: false
            }
        }
    );
}

export default routes
