import 'styled-components'
import { defaultTheme } from '../styles/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
  export interface DefaultTheme extends ThemeType { }
}
