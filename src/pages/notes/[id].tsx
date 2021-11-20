import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@theme-ui/components'

const Note: NextPage = () => {
  const {
    query: { id },
  } = useRouter()

  return (
    <Container>
      <h1>Note: {id}</h1>
    </Container>
  )
}

export default Note
