import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ComicCardProps } from 'components/ComicCard'
import ComicCardSlider from '.'

import items from './mock'

export default {
  title: 'ComicCardSlider',
  component: ComicCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-dark'
    }
  }
} as Meta

export const Default: Story<ComicCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto', marginTop: '2rem' }}>
    <ComicCardSlider items={args} {...args} color={'black'} />
  </div>
)
