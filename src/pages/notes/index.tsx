import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Card, Container, Grid } from '@theme-ui/components'

interface Props {
  notes: any[]
}

const Notes: NextPage<Props> = ({ notes }) => {
  return (
    <Container>
      <h1>Notes</h1>
      <Grid variant="card">
        {notes.map((n) => (
          <Card key={n.id}>{n.title}</Card>
        ))}
      </Grid>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.URL}/api/notes`)
  const { data } = await res.json()

  return {
    props: {
      notes: data,
    },
  }
}

export default Notes
