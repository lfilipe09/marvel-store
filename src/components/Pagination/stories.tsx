import React from 'react'
import { Story, Meta } from '@storybook/react'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-dark'
    }
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  numberOfPages: 10,
  onPageChange: (value) => console.log(value)
}
