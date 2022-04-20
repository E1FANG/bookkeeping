import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup(){
    return ()=>(<>
    <header>
      <ul>
        <li>
          <RouterLink to="/Foo">Foo</RouterLink>
        </li>
        <li>
          <RouterLink to="/Bar">Bar</RouterLink>
        </li>
      </ul>
    </header>
    <RouterView></RouterView>
    </>)
  }
})