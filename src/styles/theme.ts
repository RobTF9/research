import { tailwind } from '@theme-ui/presets'
import { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  ...tailwind,
  components: {
    nav: {
      borderRight: '1px solid',
      borderColor: 'muted',
      px: 2,
      py: 4,
      flexDirection: 'column',
      height: '100vh',
    },
  },
  links: {
    nav: {
      mr: '2',
    },
  },
  layout: {
    container: {
      p: '2',
    },
  },
  sizes: {
    container: '1200px',
  },
  styles: {
    ...tailwind.styles,
  },
})

console.log(theme)

export default theme
