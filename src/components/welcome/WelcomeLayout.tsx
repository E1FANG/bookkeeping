import { FunctionalComponent } from 'vue';
import s from './WelcomeLayout.module.scss'
export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const { icon, title, buttons } = context.slots
  return (
    <div class={s.wrapper}>
      <div class={s.card}>
        {icon?.()}
        {title?.()}
      </div>
      <div class={s.actions}>
        {buttons?.()}
      </div>
    </div>
  )
}