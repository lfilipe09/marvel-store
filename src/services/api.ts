import axios from 'axios'
import { APIComics } from 'types/api/comic-types'

export const api = axios.create({
  baseURL:
    'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fd354455b28f2bda02e9d005be71e5e7&hash=7b47e85c232a1ac45ca2c0d29a3397c7'
})

type FetchAPIDataProps = {
  offset?: number
  limit?: number
  total?: number
  count?: number
}

export const fetchAPIData = async ({
  offset,
  limit,
  total,
  count
}: FetchAPIDataProps) => {
  const comicData = await api.get<APIComics>(
    `http://gateway.marvel.com/v1/public/comics?ts=1&${
      offset ? `offset=${offset}&` : ''
    }${limit ? `limit=${limit}&` : ''}${total ? `total=${total}&` : ''}${
      count ? `count=${count}&` : ''
    }apikey=fd354455b28f2bda02e9d005be71e5e7&hash=7b47e85c232a1ac45ca2c0d29a3397c7`
  )
  return comicData.data
}
