import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [comics, setComics] = useState<string>()
  useEffect(() => {
    try {
      api
        .get(
          'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fd354455b28f2bda02e9d005be71e5e7&hash=7b47e85c232a1ac45ca2c0d29a3397c7'
        )
        .then((comicData) => {
          console.log('olha o comics', comicData.data)
          setComics(JSON.stringify(comicData.data))
        })
    } catch {
      console.log('Comic requisition failed')
    }
  }, [])
  return <p>{comics}</p>
}
