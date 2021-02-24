import { shallowMount, mount } from '@vue/test-utils'
import Text from '../src/index.vue'

const text = "is OyText"

describe('Text.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Text)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('render test', () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: text
      }
    })

    expect(wrapper.text()).toEqual(text)
  })

  test('node render test', () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: text
      },
      props: {
        tag: 'a'
      },
    })

    expect(wrapper.getComponent('a'))
  })

  test('type test', () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: text
      },
      props: {
        type: 'primary'
      }
    })

    expect(wrapper.classes().some((item) => /primary/.test(item))).toBe(true)
  })

  test('value options colors test', async () => {
    const wrapper = mount(Text, {
      slots: {
        default: text
      },
      props: {
        value: '1',
        colors: ['text-color'],
        options: ['1']
      }
    })

    expect(wrapper.classes()).toContain('text-color')

    await wrapper.setProps({
      options: [['1']]
    })

    expect(wrapper.classes()).toContain('text-color')

    await wrapper.setProps({
      colors: ['#f00']
    })

    expect(wrapper.attributes('style')).not.toBeUndefined()
  })
})