import Login from './login'
import Activity from './activity/H5'
import TimeCoupon from './activity/time-coupon'
import ToDoList from './toDoList/list'
import Snow from './snow'

export const router = [
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/activity/H5',
    name: 'H5活动',
    component: Activity
  },
  {
    path: '/activity/time-coupon',
    name: '限时券',
    component: TimeCoupon
  },
  {
    path: '/ToDoList/list',
    name: 'ToDo',
    component: ToDoList
  },
  {
    path: '/snow',
    name: '雪',
    component: Snow
  }
]
