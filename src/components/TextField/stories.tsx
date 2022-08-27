import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Lock, Search, User } from '@styled-icons/feather'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'bornlogic-primary'
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'2rem'} />,
  placeholder: 'john.cage@gmail.com',
  onInputChange: (value) => console.log(value)
}

export const MaskInput: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

MaskInput.args = {
  label: 'CPF',
  name: 'cpf',
  icon: <User size={'2rem'} />,
  placeholder: '000.000.000-00',
  mask: '999.999.999-99'
}

export const Minimal: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Minimal.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'2rem'} />,
  placeholder: 'john.cage@gmail.com',
  minimal: true
}

export const Password: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Password.args = {
  label: 'Senha',
  name: 'senha',
  icon: <Lock size={'2rem'} />,
  placeholder: 'Insira sua senha',
  password: true
}

export const Small: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 197, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Small.args = {
  placeholder: 'example@gmail.com',
  inputHeight: 'small',
  minimal: true
}

export const OutsideIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 250, padding: 15 }}>
    <TextField {...args} />
  </div>
)

OutsideIcon.args = {
  icon: <Search size={'1.5rem'} strokeWidth={2} />,
  placeholder: 'Buscar comics',
  inputHeight: 'small',
  outsideIcon: true
}

export const Error: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Error.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'2rem'} />,
  placeholder: 'john.cage@gmail.com',
  error: 'O sobrenome digitado esta incorreto'
}

export const Disabled: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Disabled.args = {
  label: 'E-mail',
  name: 'email',
  icon: <User size={'2rem'} />,
  placeholder: 'john.cage@gmail.com',
  disabled: true
}
