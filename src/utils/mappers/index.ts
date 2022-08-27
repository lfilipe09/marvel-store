import { APIComics } from 'types/api/comic-types'
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
      : `${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`,
    title: comic.title
  }))
}
