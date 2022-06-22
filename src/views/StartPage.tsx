import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from './StartPage.module.scss';

export const StartPage = defineComponent({
  setup:(props,context)=>{
    const onClick = ()=>{
      console.log('button clicked');
    }
    return () => (
    <div class={s.button_wrapper}>
      <Button onClick={onClick} class={s.button}>start</Button>
    </div>
      )
    }
})