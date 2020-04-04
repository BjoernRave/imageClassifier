import * as mobilenet from '@tensorflow-models/mobilenet'
import { Tensor3D } from '@tensorflow/tfjs'
import * as tfnode from '@tensorflow/tfjs-node'
import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request-promise'

const classifyImage = async (buffer: Buffer) => {
  const image = tfnode.node.decodeImage(buffer)

  const mobileNetModel = await mobilenet.load()
  const predictions = await mobileNetModel.classify(image as Tensor3D)
  return predictions
}

const classifyImageFromUrl = async (url: string) => {
  const imageBuffer = await loadImageFromUrl(url)

  return classifyImage(imageBuffer)
}

const loadImageFromUrl = (url: string): Promise<Buffer> => {
  return request(url, { encoding: null }) as any
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.url) return res.json({ error: 'Please provide a url' })

  const probabilities = await classifyImageFromUrl(req.query.url as string)

  return res.json(probabilities)
}
