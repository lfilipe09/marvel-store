import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ShowCardProps } from 'components/ShowCard'
import ShowCardSlider from '.'

import items from './mock'

export default {
  title: 'ShowCardSlider',
  component: ShowCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-dark'
    }
  }
} as Meta

export const Default: Story<ShowCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto', marginTop: '2rem' }}>
    <ShowCardSlider items={args} {...args} color={'black'} />
  </div>
)
