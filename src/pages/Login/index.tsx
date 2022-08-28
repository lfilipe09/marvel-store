import React from 'react'
import { Container } from 'components/Container'
import FormSignIn from 'components/FormSignIn'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'

import * as S from './styles'
import Heading from 'components/Heading'
import { useNavigate } from 'react-router-dom'
import Logo from 'components/Logo'

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { validateUser } = useUser()
  const { createAuth } = useAuth()
  const navigate = useNavigate()
  return (
    <S.WrapperImg>
      <S.Wrapper>
        <Container>
          <S.LogoWrapper>
            <Logo color={'white'} />
          </S.LogoWrapper>
          <S.MainTitle>
            <Heading color="white" size="huge">
              Welcome back
            </Heading>
          </S.MainTitle>
          <S.Text>
            Não possui um cadastro? <a href="/signup">Faça o cadastro aqui</a>
          </S.Text>
          <S.FormWrapper>
            <FormSignIn
              error={errorMessage === '' ? undefined : errorMessage}
              onSubmit={(value) => {
                const data = validateUser(value.email, value.password)
                if (data === null) {
                  setErrorMessage(
                    'Não foi encontrado nenhum usuário com esses dados'
                  )
                } else {
                  createAuth(value.email)
                  navigate('/')
                }
              }}
            />
          </S.FormWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default Login
