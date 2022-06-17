import { defineComponent, ref } from 'vue';
import s from './WelcomeLayout.module.scss'
import pig from '../../assets/icons/mangosteen.svg'
import { RouterLink } from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout'
export const Forth = defineComponent({
   setup: (props, context) => {
    const slots = {
      icon:()=> <img src={pig} />,
      title:()=><h2>每日提醒 <br />不遗漏每一笔账</h2>,
      buttons:()=> <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink to="/welcome/start">完成</RouterLink>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        </>
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
      )
    }
})