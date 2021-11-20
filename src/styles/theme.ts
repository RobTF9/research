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
  cards: {
    primary: {
      p: '4',
      borderRadius: 'md',
      boxShadow: 'md',
    },
  },
  links: {
    nav: {
      mr: '2',
    },
  },
  grids: {
    card: {
      gap: '3',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    },
  },
  layout: {
    container: {
      px: '4',
      py: '2',
    },
  },
  sizes: {
    container: '1200px',
  },
  styles: {
    ...tailwind.styles,
  },
})

export default theme
