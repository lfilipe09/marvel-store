import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { User } from 'types/userTypes'

import * as S from './styles'
import Footer from 'components/Footer'
import { format } from 'date-fns'
import Heading from 'components/Heading'
import ComicCard from 'components/ComicCard'
import Button from 'components/Button'
import { removeStorageItem } from 'utils/localStorage'

const Profile = () => {
  const { validateAuth, getAuth } = useAuth()
  const { getUserByEmail } = useUser()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>()

  const userData = getAuth()

  useEffect(() => {
    const session = validateAuth()
    !session && navigate('/login')
    if (userData) {
      setUser(getUserByEmail(userData.userEmail))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <S.MenuWrapper>
        <Container>
          <Menu />
        </Container>
      </S.MenuWrapper>

      <S.UserInfo>
        <Container>
          <S.UserTextContent>
            <S.Image src={'/img/iron-man.png'} />
            <S.UserName>
              {user?.name}&nbsp;<b>{user?.surname}</b>
            </S.UserName>
            <S.UserEmail>{user?.email}</S.UserEmail>
            <S.UserRegisterDate>
              Created at{' '}
              {user && format(new Date(user.created_at), 'MM/dd/yyyy hh:mm')}
            </S.UserRegisterDate>
            <Button
              onClick={() => {
                removeStorageItem('auth')
                navigate('/login')
              }}
              minimal={true}
            >
              Logout
            </Button>
          </S.UserTextContent>
        </Container>
        <S.InfoWrapper></S.InfoWrapper>
      </S.UserInfo>

      <Container>
        <S.UserWishlistWrapper>
          <S.WishlistTitleWrapper>
            <Heading color={'black'} size={'huge'}>
              Wishlist
            </Heading>
          </S.WishlistTitleWrapper>
          <S.UserWishlistItemsWrapper>
            {user?.wishlist.map((comic) => (
              <ComicCard
                key={comic.id}
                imgUrl={comic.imgUrl}
                id={comic.id}
                slug={comic.slug}
                title={comic.title}
              />
            ))}
          </S.UserWishlistItemsWrapper>
        </S.UserWishlistWrapper>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default Profile
