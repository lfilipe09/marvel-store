import React from 'react'

import Heading from '../../components/Heading'
import Logo from '../../components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <Logo color="primary" />
      </S.Column>
      <S.Column id="social-media" aria-labelledby="social media">
        <Heading color="black" size="small">
          Mídias sociais
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/marvel/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/marvel"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/marvelstudios/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" size="small">
          Endereço
        </Heading>
        <span>135 W 50th St. New York, NY 10020, USA.</span>
        <span>+1 212-576-4000</span>
        <span>Nova York - EUA</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Marvel 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
