import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    imgUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/detail.jpg',
    title:
      'Marvel Masterworks: The Fantastic Four Vol. V - Variant 2nd Edition (1st) (Trade Paperback)',
    subtitle: '<p>Leia agora <strong>Fantastic Four</strong> disponível online',
    buttonLabel: 'Ler agora',
    buttonLink: '/'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
