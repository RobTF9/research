import React from 'react'
import { Grid } from 'theme-ui'

const Layout: React.FC = ({ children }) => {
  return <Grid columns="200px 1fr">{children}</Grid>
}

export default Layout
