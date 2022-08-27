import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ComicCard, { ComicCardProps } from '.'

export default {
  title: 'ComicCard',
  component: ComicCard,
  args: {
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
    title:
      'Marvel Masterworks: The Fantastic Four Vol. V - Variant 2nd Edition (1st) (Trade Paperback)',
    slug: '/',
    id: '1'
  },
  parameters: {
    backgrounds: {
      default: 'bornlogic-dark'
    }
  }
} as Meta

export const Default: Story<ComicCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ComicCard {...args} />
  </div>
)
