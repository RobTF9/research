import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Note: NextPage = () => {
  const {
    query: { id },
  } = useRouter()

  return <h1>Note: {id}</h1>
}

export default Note
