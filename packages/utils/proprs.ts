import { themeType } from './common'

import type { PropType } from 'vue'
import type { ThemeType } from './common.type'


/**
 * 主题类型
 */
export const type = {
  type: String as PropType<ThemeType>,
  default: 'default',
  validator: (value: string) => themeType.includes(value) 
}