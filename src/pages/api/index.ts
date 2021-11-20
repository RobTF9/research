import nc from 'next-connect'
import type { NextApiResponse } from 'next'

const handler = nc().get((req, res: NextApiResponse) => {
  res.status(200).json({ message: 'You cunt' })
})

export default handler
