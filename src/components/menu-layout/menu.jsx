import Goods from "../../router/goods/list";
import HooksTest from "../../router/hooks";

export const menus = [
  {
    path: '/login',
    name: '首页'
  },
  {
    name: 'reduxDemo',
    children: [
      {
        path: '/activity/H5',
        name: '存储+计数'
      },
      {
        path: '/activity/time-coupon',
        name: '取数据'
      },
    ]
  },
  {
    path: '/ToDoList/list',
    name: 'toDoList'
  },
  {
    path: '/snow',
    name: '大雪花'
  },
  {
    path: '/goods',
    name: '商品',
  },
  {
    path: '/HooksTest',
    name: '测试Hooks',
  },
  {
    path: '/canvas',
    name: 'canvas',
  },
  {
    path: '/mock',
    name: 'mock',
  }
]
