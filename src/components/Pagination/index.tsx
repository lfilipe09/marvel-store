import React, { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'
import { useState } from 'react'
import * as S from './styles'

export type PaginationProps = {
  numberOfPages: number
  onPageChange?: (value: number) => void
  inputSearchTerm?: string
}

const Pagination = ({
  numberOfPages,
  onPageChange,
  inputSearchTerm
}: PaginationProps) => {
  const [page, setPage] = useState(1)

  function ValidateEnterPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      page && page <= numberOfPages ? onPageChange?.(page) : setPage(1)
    }
  }

  useEffect(() => {
    setPage(1)
  }, [inputSearchTerm])

  return (
    <S.Wrapper>
      <S.Icon
        onClick={() => {
          page > 1 && setPage(page - 1)
          page > 1 && onPageChange?.(page - 1)
        }}
      >
        <ChevronLeft size={'1rem'} strokeWidth={3} />
      </S.Icon>
      <S.Input
        value={page}
        onChange={(e) => {
          // eslint-disable-next-line prettier/prettier
          (Number(e.currentTarget.value) || e.currentTarget.value === '') &&
            setPage(Number(e.currentTarget.value))
        }}
        onBlur={(e) => {
          const inputValue = Number(e.currentTarget.value)
          inputValue && inputValue <= numberOfPages
            ? onPageChange?.(Number(e.currentTarget.value))
            : setPage(1)
        }}
        onKeyUp={ValidateEnterPress}
      />
      <S.Text>de</S.Text> <S.Text>{numberOfPages}</S.Text>
      <S.Icon
        onClick={() => {
          page < numberOfPages && setPage(page + 1)
          page < numberOfPages && onPageChange?.(page + 1)
        }}
      >
        <ChevronRight size={'1rem'} strokeWidth={3} />
      </S.Icon>
    </S.Wrapper>
  )
}

export default Pagination
