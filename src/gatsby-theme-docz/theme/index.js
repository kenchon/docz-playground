// This is the small example of shadowing
import baseTheme from 'gatsby-theme-docz/src/theme/index'
import { merge } from 'lodash/fp'

export default merge(baseTheme, {
  colors: {
    header: {
      bg: '#c21408',
    },
  },
})