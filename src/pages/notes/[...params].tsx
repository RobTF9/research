import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Note: NextPage = () => {
  const {
    query: { params },
  } = useRouter()

  console.log(params)

  return <h1>Note params</h1>
}

export default Note
