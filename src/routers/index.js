import homeIcon from "@/assets/img/dashboard/home.svg";
import noticeIcon from "@/assets/img/dashboard/notice.svg";
import componentIcon from "@/assets/img/dashboard/component.svg";
import softIcon from "@/assets/img/dashboard/soft.svg";
import shareIcon from "@/assets/img/dashboard/share.svg";
import recordIcon from "@/assets/img/dashboard/record.svg";

// 引入组件
import Dashboard from '@/pages/Dashboard';
import Share from '@/pages/Share';
import Notice from '@/pages/Notice';
import Component from '@/pages/Component';
import Soft from '@/pages/Soft';

export default [
    // user
    {
      path: '/user',
      component: './layouts/UserLayout',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './User/Login' },
        { path: '/user/register', component: './User/Register' },
        { path: '/user/register-result', component: './User/RegisterResult' },
      ],
    },
    // app
    {
      path: '/',
      component: './layouts/BasicLayout',
      routes: [
        // dashboard
        {
          path: '/',
          title: '主页',
					name: 'dashboard',
					icon: homeIcon,
          component: Dashboard
        },
        {
          path: '/notice',
          title: '前端须知',
					name: 'notice',
					icon: noticeIcon,
          component: Notice
        },
        {
          path: '/soft',
          title: '业务运营平台开发',
					name: 'soft',
					icon: softIcon,
          component: Soft
        },
        {
          path: '/component',
          title: '组件说明',
					name: 'component',
					icon: componentIcon,
          component: Component
        },
        {
          path: '/share',
          title: '知识分享',
					name: 'share',
					icon: shareIcon,
          component: Share
        },
        {
          path: '/record',
          title: '工作记录',
					name: 'record',
					icon: recordIcon,
          component: Share
        }
      ]   
    }
  ];
  