import { NextApiHandler } from 'next'
import nc from 'next-connect'
import notes from '../../../data/data'

const postOne: NextApiHandler = (req, res) => {
  const note = {
    ...req.body,
    id: Date.now(),
  }
  notes.push(note)
  res.status(201).json({ data: note })
}

const getAll: NextApiHandler = (req, res) => {
  res.status(200).json({ data: notes })
}

const handler = nc().post(postOne).get(getAll)

export default handler
