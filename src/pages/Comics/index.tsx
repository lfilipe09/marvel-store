import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from 'services/api'

export function Comics() {
  const params = useParams()
  const [comic, setComic] = useState<string>()
  useEffect(() => {
    try {
      api
        .get(
          `http://gateway.marvel.com/v1/public/comics/${params.id}?ts=1&apikey=fd354455b28f2bda02e9d005be71e5e7&hash=7b47e85c232a1ac45ca2c0d29a3397c7`
        )
        .then((comicData) => {
          console.log('olha o comics', comicData.data)
          setComic(JSON.stringify(comicData.data))
        })
    } catch {
      console.log('Comic requisition failed')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <p>{comic}</p>
}
