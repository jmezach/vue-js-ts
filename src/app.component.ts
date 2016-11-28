import { Vue, Component } from 'av-ts'
import './app.component.css'

@Component({
  template: `
    <div id="app">
    <h1 @click="hello">
      {{name}} is the best girl!
    </h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://github.com/HerringtonDarkholme/av-ts" target="_blank">av-ts docs</a></li>
    </ul>
    </div>
  `,
})
class App extends Vue {
  name = 'Jonathan'

  hello() {
    alert(this.name + ' is the best girl!')
  }
}

export default App