import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <Link href="/notes">Notes</Link>
      <Link href="/notes/[id]" as={`/notes/1`}>
        Note 1
      </Link>
      <Link href="/notes/1/2/3">Note/Params</Link>
    </nav>
  )
}

export default Navigation
