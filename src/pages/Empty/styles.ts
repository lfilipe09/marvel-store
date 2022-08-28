import styled, { css } from 'styled-components'

export const EmptyWrapper = styled.div`
  height: 100vh;
  grid-gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
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
