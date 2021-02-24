import ConfigProvider from '@oy/config-provider'
import Text from '@oy/text'

import type { App } from 'vue'

const components = [
  ConfigProvider,
  Text,
]

const install = (app: App) => {
  components.forEach(item => app.component(item.name, item))
}

export default {
  install,
}
