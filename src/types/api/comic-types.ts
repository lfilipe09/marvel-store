export type TextObjectProps = {
  type: string
  language: string
  text: string
}

export type UrlProps = {
  type: string
  url: string
}

export type VariantsProps = {
  resourceURI: string
  name: string
}

export type DatesProps = {
  type: string
  date: string
}

export type PricesProps = {
  type: string
  price: number
}

export type ImagesProps = {
  path: string
  extension: string
}

export type CreatorsItemsProps = {
  resourceURI: string
  name: string
  role: string
}

export type CharacterItemsProps = {
  resourceURI: string
  name: string
}

export type StoriesItemsProps = {
  resourceURI: string
  name: string
  type: string
}

export type EventsItemsProps = {
  resourceURI: string
  name: string
}

export type Comics = {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string | null
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObjectProps[]
  resourceURI: string
  urls: UrlProps[]
  series: {
    resourceURI: string
    name: string
  }
  variants: VariantsProps[]
  dates: DatesProps[]
  prices: PricesProps[]
  thumbnail: {
    path: string
    extension: string
  }
  images: ImagesProps[]
  creators: {
    available: number
    collectionURI: string
    items: CreatorsItemsProps[]
    returned: number
  }
  characters: {
    available: number
    collectionURI: string
    items: CharacterItemsProps[]
    returned: 0
  }
  stories: {
    available: number
    collectionURI: string
    items: StoriesItemsProps[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
}

export type APIComics = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: Comics[]
  }
}

export type ItemCreatorProps = {
  resourceURI: string
  name: string
}

export type ItemStoryCreatorProps = {
  resourceURI: string
  name: string
  type: string
}

export type CreatorUrlProps = {
  type: string
  url: string
}

export type CreatorComics = {
  id: number
  firstName: string
  middleName: string
  lastName: string
  suffix: string
  fullName: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: {
    available: number
    collectionURI: string
    items: ItemCreatorProps[]
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: ItemCreatorProps[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: ItemStoryCreatorProps[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: ItemCreatorProps[]
    returned: number
  }
  urls: CreatorUrlProps[]
}

export type APICreatorComics = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: CreatorComics[]
  }
}

export type ItemCharacterProps = {
  resourceURI: string
  name: string
}

export type ItemStoryCharacterProps = {
  resourceURI: string
  name: string
  type: string
}

export type CharacterUrlProps = {
  type: string
  url: string
}

export type CharacterComics = {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: {
    available: number
    collectionURI: string
    items: ItemCharacterProps[]
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: ItemCharacterProps[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: ItemStoryCharacterProps[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: ItemCharacterProps[]
    returned: number
  }
  urls: CharacterUrlProps[]
}

export type APICharacterComics = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: CharacterComics[]
  }
}
