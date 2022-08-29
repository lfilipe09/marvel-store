import axios from 'axios'

export const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_DIGEST}`
})

type FetchAPIDataProps = {
  offset?: number
  limit?: number
  total?: number
  count?: number
  titleStartsWith?: string
  comicId?: string
  creatorId?: number
  characterId?: number
}

export const fetchAPIData = async ({
  offset,
  limit,
  total,
  titleStartsWith,
  count,
  comicId,
  creatorId,
  characterId
}: FetchAPIDataProps) => {
  const comicData = await api.get(
    `https://gateway.marvel.com/v1/public/comics${
      comicId ? `/${comicId}` : ''
    }${creatorId ? `/${creatorId}/creators` : ''}${
      characterId ? `/${characterId}/characters` : ''
    }?ts=1&${offset ? `offset=${offset}&` : ''}${
      titleStartsWith && titleStartsWith !== ''
        ? `titleStartsWith=${titleStartsWith}&`
        : ''
    }${limit ? `limit=${limit}&` : ''}${total ? `total=${total}&` : ''}${
      count ? `count=${count}&` : ''
    }apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${
      process.env.REACT_APP_MD5_DIGEST
    }`
  )
  return comicData.data
}
