<template>
  <oy-config-provider :text-options="textOptions">
    <oy-text value="1">________</oy-text>
  </oy-config-provider>
  <oy-text type="info" @click="changeColor">改变颜色</oy-text>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { TextOptions } from '@oy/utils/common.type'

export default defineComponent({
  setup() {
    const textOptions = ref<TextOptions>({
      colors: ['primary'],
      options: ['1'],
    })

    const options = {
      value: '1',
      colors: ['text-color'],
      options: ['1'],
    }

    const changeColor = () => {
      textOptions.value.colors[0] = '#f00'
    }

    return {
      options,
      changeColor,
      textOptions,
    }
  },
})
</script>

<style lang="scss">
@import '../../packages/theme/index.scss';
</style>
