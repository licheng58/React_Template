1 - react-router  --yarn add react-router-dom
 import { BrowserRouter as Router, BrowserRouter ,HashRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom"

2 - sass 配置  -- yarn add node-sass -D
如果失败  yarn add node-sass -D --sass_binary_site=<https://npm.taobao.org/mirrors/node-sass/>

3 - 安装classNames -- yarn add classnames 页面使用引入  import { classNames } from 'classnames'

4 - 安装组件库（此项目安装antd） -- yarn add antd  样式引入  @import '~antd/dist/antd.css';

5 - 配置 src 根路径  根目录新建 jsconfig.json  
   {
  "compilerOptions": {
    "baseUrl": "src"
   },
    "include": ["src"]
   }

6 - 配置反向代理  yarn add http-proxy-middleware
   src 目录下新建 setupProxy.js
   配置 文件
  