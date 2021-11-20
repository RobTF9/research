import { NextApiHandler } from 'next'
import nc from 'next-connect'
import notes from '../../../data/data'

const getNote = (id: string) => notes.find((n) => n.id === parseInt(id))

const getOne: NextApiHandler = (req, res) => {
  if (typeof req.query.id !== 'string') {
    return res.status(500).end()
  }

  const note = getNote(req.query.id)

  if (!note) {
    return res.status(404).end()
  }

  res.status(200).json({ data: note })
}

const updateOne: NextApiHandler = (req, res) => {
  if (typeof req.query.id !== 'string') {
    return res.status(500).end()
  }

  const note = getNote(req.query.id)

  if (!note) {
    return res.status(404).end()
  }

  const i = notes.findIndex((n) => n.id === note.id)
  const updated = { ...note, ...req.body }
  notes[i] = updated
  res.status(201).json({ data: updated })
}

const deleteOne: NextApiHandler = (req, res) => {
  if (typeof req.query.id !== 'string') {
    return res.status(500).end()
  }

  const note = getNote(req.query.id)

  if (!note) {
    return res.status(404).end()
  }

  const i = notes.findIndex((n) => n.id === note.id)
  notes.splice(i, 1)
  res.status(200).json({ data: notes })
}

const handler = nc().patch(updateOne).get(getOne).delete(deleteOne)

export default handler
