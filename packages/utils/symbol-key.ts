import { TextOptions } from './common.type'

import type { InjectionKey, Ref } from 'vue'

/** text全局配置 */
export const textOptionsKey:InjectionKey<Ref<TextOptions>>  =  Symbol('Text Options')
