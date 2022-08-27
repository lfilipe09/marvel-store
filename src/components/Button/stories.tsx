import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'
import { ArrowRight } from '@styled-icons/feather'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    minimal: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Acesse agora'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Acesse agora',
  icon: <ArrowRight size={'3rem'} strokeWidth={'3px '} />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Acesse agora',
  as: 'a',
  href: '/'
}
