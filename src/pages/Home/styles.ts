import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.medium};
  `}
`

export const SliderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4rem;
`

export const CollectionItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const CollectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  div {
    width: fit-content;
  }
`
export const CollectionWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const FooterWrapper = styled.div``
