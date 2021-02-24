import Text from './src/index.vue'

import type { App } from 'vue'

Text.install = (app: App): void => {
  app.component(Text.name, Text)
}

export default Text
