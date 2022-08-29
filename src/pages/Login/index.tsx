import React, { useEffect } from 'react'
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
  const { validateAuth } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const { validateUser } = useUser()
  const { createAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const session = validateAuth()
    session && navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            Don&apos;t have a registration? <a href="/signup">Click here</a>
          </S.Text>
          <S.FormWrapper>
            <FormSignIn
              error={errorMessage === '' ? undefined : errorMessage}
              onSubmit={(value) => {
                const data = validateUser(value.email, value.password)
                if (data === null) {
                  setErrorMessage('No user was found with this data')
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
