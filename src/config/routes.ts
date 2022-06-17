import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Forth } from "../components/welcome/forth";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Welcome } from "../views/Welcome";
import { Start } from "../views/Start";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect:'/welcome' },
  {
    path: '/welcome', component: Welcome, children: [
      {path:'',redirect:'/welcome/1'},
      { path: '1', component:First},
      { path: '2', component:Second},
      { path: '3', component:Third},
      { path: '4', component:Forth},
      { path: 'start', component:Start },
    ]
  }
]