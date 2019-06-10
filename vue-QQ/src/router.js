import Vue from "vue";
import VueRouter from "vue-router";
// 使用Vue.use来加载路由功能
Vue.use(VueRouter);

// ----------引入模块
import index from "./pages/Index.vue";
import register from "./pages/Register.vue";
import kongjian from "./pages/Kongjian.vue";

import sousuo from "./pages/Sousuo2.vue";
import liaotian from "./pages/Liaotian.vue";

// ------------定义路由
const routes = [
  { path: "/", component: register, name: "register" },
  {
    path: "/index",
    component: index,
    children: [
      // {path: "/index/sousuo", component: sousuo},
    ]
  },
  { path: "/kongjian", component: kongjian, name: "kongjian" },
  { path: "/sousuo", component: sousuo, name: "sousuo" },
  { path: "/liaotian", component: liaotian, name: "liaotian" }
];

// -------------实例化路由
const router = new VueRouter({
  mode: "history",
  routes: routes
});

//--------------- 暴露路由对象，为后续挂载容器做准备
export default router;
