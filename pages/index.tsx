import Loader from 'components/Loader'
import { transformToPercentage } from 'lib/utils'
import { NextPage } from 'next'
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
`

const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 20px;
  font-size: 24px;
`

const Image = styled.img`
  height: 400px;
  width: auto;
`

const Home: NextPage = () => {
  const [link, setLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [probabilites, setProbabilities] = useState(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const probs = await fetch(`/api/classify?url=${link}`).then((res) =>
      res.json()
    )

    setProbabilities(probs)
    setLoading(false)
  }

  return (
    <Wrapper>
      <h1>Classify your image from an url</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Enter your image url...'
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button disabled={loading} type='submit'>
          {loading ? <Loader /> : 'Submit'}
        </Button>
      </Form>
      <Image src={link} />
      <ul>
        {probabilites &&
          probabilites.map(({ className, probability }, ind) => (
            <li key={ind}>
              <b>{transformToPercentage(probability)}%:</b> {className}
            </li>
          ))}
      </ul>
    </Wrapper>
  )
}

export default Home
