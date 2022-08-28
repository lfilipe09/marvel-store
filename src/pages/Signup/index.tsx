import React, { useEffect } from 'react'
import { Container } from 'components/Container'
import FormSignUp from 'components/FormSignUp'
import { useUser } from '../../hooks/useUser'

import * as S from './styles'
import { useAuth } from 'hooks/useAuth'
import Logo from 'components/Logo'
import { useNavigate } from 'react-router-dom'
import Heading from 'components/Heading'

const Signup = () => {
  const { validateAuth } = useAuth()
  const { createUser } = useUser()
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
              Welcome
            </Heading>
          </S.MainTitle>
          <S.Text>
            Ja possui um cadastro? <a href="/login">Faça o login</a>
          </S.Text>
          <S.FormWrapper>
            <FormSignUp
              onSubmit={(value) => {
                createUser(value)
                createAuth(value.email)
                navigate('/')
              }}
            />
          </S.FormWrapper>
        </Container>
      </S.Wrapper>
    </S.WrapperImg>
  )
}

export default Signup
