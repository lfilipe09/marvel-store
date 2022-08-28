import React from 'react'
import { Story, Meta } from '@storybook/react'
import FormSignUp, { FormSignUpProps } from '.'

export default {
  title: 'Forms/FormSignUp',
  component: FormSignUp,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-primary'
    }
  }
} as Meta

export const Default: Story<FormSignUpProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <FormSignUp {...args} />
  </div>
)

Default.args = {
  onSubmit: (valores) => console.log('form processado, os valores: ', valores)
}
