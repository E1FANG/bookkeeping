import s from './WelcomeLayout.module.scss'
import pig from '../../assets/icons/mangosteen.svg'
import { RouterLink } from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout'

export const Second =  () =>   <WelcomeLayout >
  { {
      icon:()=> <img src={pig} />,
      title:()=><h2>每日提醒 <br />不遗漏每一笔账</h2>,
      buttons:()=> <>
      <RouterLink class={s.fake} to="/start">跳过</RouterLink>
      <RouterLink to="/welcome/3">下一页</RouterLink>
      <RouterLink to="/start">跳过</RouterLink>
        </>
    }}
</WelcomeLayout>
       
       Second.displayName = 'Second'