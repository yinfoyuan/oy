<template>
  <component
    :is="tag"
    v-if="value"
    :class="colorValue.type !== 'class' ? baseClass : ''"
    :[colorValue.type]="colorValue.value"
  >
    <slot></slot>
  </component>
  <component
    :is="tag"
    v-else
    :class="typeClass"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { baseNamespace, themeType } from '@oy/utils/common'
import { type } from '@oy/utils/proprs'
import { textOptionsKey } from '@oy/utils/symbol-key'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'OyText',
  props: {
    type,
    tag: {
      type: [String, Object],
      default: 'span',
    },
    colors: {
      type: Array as PropType<string[]>,
    },
    options: {
      type: Array as PropType<Array<Array<string | number>> | Array<string | number>>,
    },
    value: {
      type: [Number, String] as PropType<number | string>,
    },
  },
  setup(props) {
    const $OY_TEXT = inject(textOptionsKey, undefined)?.value

    const baseClass = `${baseNamespace}-text`

    const typeClass = computed(() => [baseClass, `${baseClass}--${props.type}`])

    const color = computed(() => {
      const defaultColor = $OY_TEXT ? $OY_TEXT.colors : themeType
      return props.colors || defaultColor
    })

    const options = computed(() => {
      const defaultColor = $OY_TEXT ? $OY_TEXT.options : themeType
      return props.options || defaultColor
    })

    const colorValue = computed(() => {
      let index = -1
      const { length } = options.value

      for (let i = 0; i < length; i += 1) {
        const first = options.value[i]

        if (!Array.isArray(first) && first === props.value) {
          index = i
          break
        }

        if (Array.isArray(first) && first.some(item => item === props.value)) {
          index = i
          break
        }
      }

      const targetColor = color.value[index]

      if (!targetColor) {
        return {
          type: 'class',
          value: typeClass.value,
        }
      }

      if (targetColor.indexOf('#') !== -1 || targetColor.indexOf('rgb') !== -1 || targetColor.indexOf('hsl') !== -1) {
        return {
          type: 'style',
          value: `color: ${targetColor}`,
        }
      }

      if (themeType.includes(targetColor)) {
        return {
          type: 'class',
          value: [baseClass, `${baseClass}--${targetColor}`],
        }
      }

      return {
        type: 'class',
        value: [baseClass, targetColor],
      }
    })

    return {
      baseClass,
      color,
      colorValue,
      typeClass,
    }
  },
})
</script>
