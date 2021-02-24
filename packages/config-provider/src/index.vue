<script lang="ts">
import { defineComponent, provide, toRef } from 'vue'
import { textOptionsKey } from '@oy/utils/symbol-key'

import type { TextOptions } from '@oy/utils/common.type'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'OyConfigProvider',
  props: {
    textOptions: {
      type: Object as PropType<TextOptions>
    }
  },
  setup (props) {
    provide(textOptionsKey, toRef(props, 'textOptions'))

    return {}
  },
  render () {
    return this.$slots.default  ? this.$slots.default() : null
  }
})
</script>

<style scoped>

</style>