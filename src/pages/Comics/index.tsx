import React from 'react'
import { useParams } from 'react-router-dom'

export function Comics() {
  const params = useParams()
  return <h1>{params.id}</h1>
}
