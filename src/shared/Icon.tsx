import { defineComponent, PropType, ref } from 'vue';
import s from './Icon.module.scss';
export type IconName = 'add' | 'mangosteen' | 'pig'
export const Icon = defineComponent({
  props:{
    name:{
      type:String as PropType<IconName>,
      required:true
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