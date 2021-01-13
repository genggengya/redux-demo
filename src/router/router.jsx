import Login from './login'
import Activity from './activity/H5'
import TimeCoupon from './activity/time-coupon'
import ToDoList from './toDoList/list'
import Snow from './snow'
import Goods from './goods/list'
import GoodsAdd from './goods/add'
import HooksTest from './hooks'
import Canvas from './canvas'
import MockTest from './mock'

export const router = [
  {
    path: '/mock',
    name: 'mock',
    component: MockTest
  },
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
  },
  {
    path: '/goods',
    name: '商品',
    component: Goods
  },
  {
    path: '/goods/add',
    name: '增加商品',
    component: GoodsAdd
  },
  {
    path: '/HooksTest',
    name: '测试Hooks',
    component: HooksTest
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: Canvas
  },
]
