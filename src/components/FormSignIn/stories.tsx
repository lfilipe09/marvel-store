import React from 'react'
import { Story, Meta } from '@storybook/react'
import FormSignIn, { FormSignInProps } from '.'

export default {
  title: 'Forms/FormSignIn',
  component: FormSignIn,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-primary'
    }
  }
} as Meta

export const Default: Story<FormSignInProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <FormSignIn {...args} />
  </div>
)

Default.args = {
  onSubmit: (value) => console.log(value)
}
