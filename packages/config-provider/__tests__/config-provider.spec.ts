import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import ConfigProvider from '../src/index.vue'
import Text from '../../text/src/index.vue'

import type { ComponentPublicInstance, ComponentOptionsMixin } from 'vue'

const mountWrapper = (config: ComponentOptionsMixin) => mount({
  components: {
    [ConfigProvider.name]:ConfigProvider,
    [Text.name]: Text
  },
  ...config
})


interface TextComponent extends ComponentPublicInstance {
  color: string[],
  options: string[]
} 

describe('ConfigProvider.vue', () => {

  test('render test', () => {
    const text = "is OyConfigProvider"

    const wrapper = mount(ConfigProvider, {
      slots: {
        default: text
      }
    })

    expect(wrapper.text()).toEqual(text)
  })

  describe('text-options', () =>{
    test('options test', () => {
      const wrapper = mountWrapper({
        template: `
        <oy-config-provider :text-options="options">
          <oy-text :value="value">
            Text
          </oy-text>
        </oy-config-provider>
      `,
      setup() {
        const options = {
          value: '1',
          colors: ['text-color'],
          options: ['1']
        }

        const value = ref('1')

        return {
          value,
          options
        }
      }
      })

      const textComponent = wrapper.findComponent<TextComponent>({ name: Text.name })

      expect(textComponent.classes()).toContain('text-color')
    })
  })
})