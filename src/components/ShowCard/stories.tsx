import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ShowCard, { ShowCardProps } from '.'

export default {
  title: 'ShowCard',
  component: ShowCard,
  args: {
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
    title:
      'Marvel Masterworks: The Fantastic Four Vol. V - Variant 2nd Edition (1st) (Trade Paperback)',
    id: '1'
  },
  parameters: {
    backgrounds: {
      default: 'bornlogic-dark'
    }
  }
} as Meta

export const Default: Story<ShowCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ShowCard {...args} />
  </div>
)
