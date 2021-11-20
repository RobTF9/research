import React from 'react'
import { Flex, NavLink } from 'theme-ui'
import Link from 'next/link'

const Navigation = () => {
  return (
    <Flex variant="components.nav" as="nav">
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/notes" passHref>
        <NavLink>Notes</NavLink>
      </Link>
    </Flex>
  )
}

export default Navigation
