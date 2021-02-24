import ConfigProvider from './src/index.vue'

import type { App } from 'vue'

ConfigProvider.install = (app: App): void => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider