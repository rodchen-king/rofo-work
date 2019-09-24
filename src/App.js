import React from 'react';

// 路由菜单文件
import router from '@/routers/index';

// 引入路由模板文件
import BasicLayout from '@/layout/BasicLayout';
import UserLayout from '@/layout/UserLayout';

function App() {
  return router.map(item => {
    if (item.path === '/user' && window.location.pathname.indexOf('/user') >= 0) {
      return (
        <UserLayout key={item.path} routers={item} />
      )
    } else if (item.path === '/' && window.location.pathname.indexOf('/user') < 0) {
      return (
        <BasicLayout key={item.path} routers={item} />
      );
    }

    return ""
  })
}

export default App;
