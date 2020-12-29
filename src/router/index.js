const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Home')
  },
  {
    path: '/slider1',
    name: 'Slider1',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Slider1')
  },
  {
    path: '/slider2',
    name: 'Slider2',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Slider2')
  },
  {
    path: '/slider3',
    name: 'Slider3',
    component: () => import( /* webpackChunkName: "calender" */ '../pages/Slider3')
  },

]

export default routes