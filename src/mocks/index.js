// mock.js
var Mock = require('mockjs')
const loginInfo = {
  userName: 'admin', // 用户名
  name: 'admin', // 中文名称
  'age|1-100': 100, // 100以内随机整数
  birthday: '1989-10-10', // 日期
  city: '上海', // 中国城市
  phone: '13127755541', // 手机号
  token: '123321', // token
}

const login = Mock.mock('/api/user/login', 'get', () => loginInfo)

const user_mune = Mock.mock('/api/user/menu', [
  {
    name: '仪表盘',
    icon: 'DashboardOutlined',
    path: '/dashboard',
  },
  {
    name: '组件',
    icon: 'DesktopOutlined',
    path: '/component',
    children: [
      {
        name: '工具条',
        path: '/toolbar',
      },
      {
        name: 'BaseComponent',
        path: '/baseComponent',
      },
      {
        name: 'Columns',
        path: '/column',
      },
      {
        name: '搜索条',
        path: '/searchBar',
      },
      {
        name: '数据表格',
        path: '/datatable',
      },
      {
        name: '表单',
        path: '/form',
      },
      {
        name: '穿梭树',
        path: '/transferTree',
      },
      {
        name: '图表',
        path: '/charts',
        children: [
          {
            name: 'ECharts',
            path: '/charts/ec',
          },
          {
            name: 'G2',
            path: '/charts/g2',
          },
        ],
      },
      {
        name: '打印',
        path: '/print',
      },
      {
        name: 'Banner 管理',
        path: '/banner',
      },
    ],
  },

  {
    name: 'UI元素',
    icon: 'ShareAltOutlined',
    path: '/ui',
    children: [
      {
        name: '按钮',
        path: '/button',
      },
      {
        name: '图片',
        path: '/image',
      },
      {
        name: '消息',
        path: '/alerts',
      },
      {
        name: '动画',
        path: '/animations',
      },
      {
        name: '图标',
        path: '/icons',
      },
      {
        name: '富文本',
        path: '/editor',
      },
      {
        name: '模态窗',
        path: '/modal',
      },
      {
        name: '遮罩',
        path: '/mask',
      },
    ],
  },

  {
    name: '页面',
    icon: 'BookOutlined',
    path: '/page',
    children: [
      {
        name: '登录页',
        path: '/sign/login',
      },
      {
        name: '注册页',
        path: '/sign/register',
      },
      {
        name: '锁屏',
        path: '/lock',
      },
      {
        name: '画廊',
        path: '/gallery',
      },
      {
        name: '空白页',
        path: '/blank',
      },
      {
        name: '结果页',
        path: '/result',
      },
      {
        name: 'Coming Soon',
        path: '/coming',
      },
      {
        name: '403',
        path: '/403',
      },
      {
        name: '404',
        path: '/404',
      },
      {
        name: '500',
        path: '/500',
      },
      {
        name: '多级路由',
        path: '/level-route/:sub?',
      },
    ],
  },

  {
    name: '通用场景',
    icon: 'BulbOutlined',
    path: '/business',
    children: [
      {
        name: 'CRUD',
        path: '/crud/:detail?',
      },
    ],
  },
])

const charts1 = Mock.mock('/api/charts/bar1', [
  { year: '1951 年', 'sales|1-100': 100 },
  { year: '1952 年', 'sales|1-100': 100 },
  { year: '1956 年', 'sales|1-100': 100 },
  { year: '1957 年', 'sales|1-100': 100 },
  { year: '1958 年', 'sales|1-100': 100 },
])

const charts2 = Mock.mock('/api/charts/bar1', [
  {
    name: 'London',
    'Jan.|1-100': 1,
    'Feb.|1-100': 1,
    'Mar.|1-100': 1,
    'Apr.|1-100': 1,
    'May.|1-100': 1,
    'Jun.|1-100': 1,
    'Jul.|1-100': 1,
    'Aug.|1-100': 1,
  },
  {
    name: 'Berlin',
    'Jan.|1-100': 1,
    'Feb.|1-100': 1,
    'Mar.|1-100': 1,
    'Apr.|1-100': 1,
    'May.|1-100': 1,
    'Jun.|1-100': 1,
    'Jul.|1-100': 1,
    'Aug.|1-100': 1,
  },
])

// 输出结果
export { login, user_mune, charts1, charts2 }
