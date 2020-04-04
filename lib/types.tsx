import 'next'
import 'styled-components'
import { borderRadiusType, boxShadowsType, colorType } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colorType
    boxShadows: boxShadowsType
    borderRadius: borderRadiusType
  }
}
