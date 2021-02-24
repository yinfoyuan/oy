export type ThemeType = 
  "primary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "default"

export type TextOptions = {
  options: Array<string[]> | string[],
  colors: string[]
}