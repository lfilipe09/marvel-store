import React from 'react'
import { AtSign, ChevronRight, Hash, Lock, User } from '@styled-icons/feather'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useState } from 'react'
import { UserForm } from 'types/userTypes'
import { FieldErrors, UserValidate } from 'utils/validations'
import * as S from './styles'

export type FormSignUpProps = {
  onSubmit: (value: UserForm) => void
}

const FormSignUp = ({ onSubmit }: FormSignUpProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UserForm>({
    cpf: '',
    email: '',
    name: '',
    password: '',
    surname: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const valuesValidate = values
    //delete valuesValidate['profile']
    const errors = UserValidate(valuesValidate)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    onSubmit(values)
    setFieldError({})
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InputGroup>
        <TextField
          label={'First name'}
          name={'name'}
          icon={<User size={'1.5rem'} />}
          placeholder={'First name'}
          error={fieldError?.name}
          onInputChange={(v) => {
            handleInput('name', v)
          }}
        />
        <TextField
          label={'Last name'}
          name={'surname'}
          icon={<User size={'1.5rem'} />}
          placeholder={'Last name'}
          error={fieldError?.surname}
          onInputChange={(v) => {
            handleInput('surname', v)
          }}
        />
      </S.InputGroup>
      <TextField
        label={'CPF'}
        name={'cpf'}
        icon={<Hash size={'1.5rem'} />}
        placeholder={'000.000.000-00'}
        mask={'999.999.999-99'}
        error={fieldError?.cpf}
        onInputChange={(v) => {
          handleInput(
            'cpf',
            v
              .split('')
              .filter((char) => /^[0-9]*$/.test(char))
              .join('')
          )
        }}
      />
      <TextField
        label={'E-mail'}
        name={'email'}
        icon={<AtSign size={'1.5rem'} />}
        placeholder={'email@example.com'}
        error={fieldError?.email}
        onInputChange={(v) => {
          handleInput('email', v)
        }}
      />
      <TextField
        label={'Password'}
        name={'password'}
        icon={<Lock size={'1.5rem'} />}
        placeholder={'type here your password'}
        password={true}
        error={fieldError?.password}
        onInputChange={(v) => {
          handleInput('password', v)
        }}
      />
      <S.ButtonWrapper>
        <Button
          disabled={
            !values.cpf ||
            !values.email ||
            !values.name ||
            !values.password ||
            !values.surname
          }
          type={'submit'}
          icon={<ChevronRight strokeWidth={4} width={'1rem'} />}
        >
          Create account
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default FormSignUp
