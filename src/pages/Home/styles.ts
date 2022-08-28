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
  position: relative;
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
  position: relative;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`

export const LoadingBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  svg {
    width: 100px;
    height: 100px;
  }
`

export const FooterWrapper = styled.div``
