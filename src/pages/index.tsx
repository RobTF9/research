import React from 'react'
import { Button, Container } from 'theme-ui'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Button>Click me</Button>
    </Container>
  )
}

export default Home
