import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import s from './StartPage.module.scss';

export const StartPage = defineComponent({
  setup:(props,context)=>{
    const onClick = ()=>{
      console.log('button clicked');
    }
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig}></Icon>
        </Center>
        <div class={s.button_wrapper}>
          <Button onClick={onClick} class={s.button}>start</Button>
          <FloatButton iconName="add"></FloatButton>
        </div>
      </div>
      )
    }
})