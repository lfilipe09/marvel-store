import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const UserInfo = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40rem;
  `}
`

export const UserTextContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Image = styled.img`
  width: 10rem;
`

export const UserName = styled.h2`
  ${() => css`
    color: #fff;
  `}
`

export const UserEmail = styled.p`
  ${() => css`
    color: #fff;
    margin-top: 1rem;
  `}
`

export const UserRegisterDate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const UserWishlistWrapper = styled.div``
export const WishlistTitleWrapper = styled.div`
  margin: 4rem 0;
`

export const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://i.ibb.co/mNVz01X/wp6223420.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(25%);
  z-index: -1;
`

export const UserWishlistItemsWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10rem;
  ${media.greaterThan('small')`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2rem;
  `}
  ${media.lessThan('small')`
    a {
      margin: 0 auto;
    }
  `}
`

export const EmptyWrapper = styled.div`
  height: 38rem;
  grid-gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Empty = styled.img`
  width: 25rem;
`

export const EmptyMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
