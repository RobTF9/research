import React from 'react'
import { Button, Container } from 'theme-ui'
import type { GetStaticProps, NextPage } from 'next'

interface Props {
  title: string
}

const Home: NextPage<Props> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Button>Click me, or dont</Button>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = () => {
  // call some cms

  return {
    props: {
      title: 'Welcome to my site',
    },
  }
}

export default Home
