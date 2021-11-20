import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Container } from '@theme-ui/components'

interface Props {
  note: any
}

const Note: NextPage<Props> = ({ note }) => {
  return (
    <Container>
      <h1>Note: {note.title}</h1>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}) => {
  if (params) {
    const response = await fetch(`${process.env.URL}/api/notes/${params.id}`)

    if (!response.ok) {
      res.writeHead(302, {
        Location: '/notes',
      })
      res.end()
      return {
        props: {},
      }
    }

    const { data } = await response.json()

    return {
      props: { note: data },
    }
  }

  return {
    props: {},
  }
}

export default Note
