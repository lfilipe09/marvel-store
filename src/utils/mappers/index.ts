import {
  APICharacterComics,
  APIComics,
  APICreatorComics
} from 'types/api/comic-types'
import { convertToSlug } from 'utils/slug'

export const heroBannerMapper = (comicsData: APIComics) => {
  return comicsData.data.results.map((comic) => ({
    imgUrl: comic.thumbnail.path.includes('image_not_available')
      ? 'https://i.ibb.co/gZk8B85/marvel-empty-Prancheta-1.png'
      : `${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`,
    title: comic.title,
    subtitle: `<p>Leia agora <strong>${comic.title}</strong> disponível online`,
    buttonLabel: 'Saiba mais',
    buttonLink: `comics/${comic.id}/${convertToSlug(comic.title)}`
  }))
}

export const mainCardsMapper = (comicsData: APIComics) => {
  return comicsData.data.results.map((comic) => ({
    id: comic.id,
    slug: `comics/${comic.id}/${convertToSlug(comic.title)}`,
    imgUrl: comic.thumbnail.path.includes('image_not_available')
      ? 'https://i.ibb.co/gZk8B85/marvel-empty-Prancheta-1.png'
      : `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`,
    title: comic.title
  }))
}

export const singleComicMapper = (comicsData: APIComics) => {
  return comicsData.data.results.map((comic) => ({
    id: comic.id,
    imgUrl: comic.thumbnail.path.includes('image_not_available')
      ? 'https://i.ibb.co/gZk8B85/marvel-empty-Prancheta-1.png'
      : `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`,
    title: comic.title,
    description: comic.description,
    variantDescription: comic.variantDescription,
    format: comic.format,
    pageCount: comic.pageCount,
    gallery: comic.images.map((image) => ({
      path: image.path,
      extension: image.extension
    })),
    creators: {
      available: comic.creators.available,
      collectionURI: comic.creators.collectionURI
    },
    characters: {
      available: comic.characters.available,
      collectionURI: comic.characters.collectionURI
    }
  }))
}

export const singleComicCreatorsMapper = (creatorData: APICreatorComics) => {
  return creatorData.data.results.map((creator) => ({
    id: creator.id,
    firstName: creator.firstName,
    lastName: creator.lastName,
    url: creator.urls[0].url
  }))
}

export const singleComicCharacterMapper = (
  characterData: APICharacterComics
) => {
  return characterData.data.results.map((character) => ({
    imgUrl: character.thumbnail.path.includes('image_not_available')
      ? 'https://i.ibb.co/gZk8B85/marvel-empty-Prancheta-1.png'
      : `${character.thumbnail.path}/detail.${character.thumbnail.extension}`,
    name: character.name,
    url: character.urls[0].url
  }))
}
