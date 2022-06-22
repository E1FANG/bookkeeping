import { defineComponent, PropType, ref } from 'vue';
import s from './Icon.module.scss';
interface Props {
  name:string
}
export const Icon = defineComponent({
  props:{
    name:{
      type:String as PropType<'add' | 'mangosteen' | 'pig'>
    }
  },
   setup: (props, context) => {
      return () => (
         <svg class={s.Icon}>
          <use xlinkHref={'#' +props.name}/>
         </svg>
       )
     }
})