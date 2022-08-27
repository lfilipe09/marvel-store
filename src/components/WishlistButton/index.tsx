import React from 'react'
import { FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useState } from 'react'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({ hasText, size = 'small' }: WishlistButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setLoading(false)
  }

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : (
          <FavoriteBorder aria-label={'Add to Wishlist'} />
        )
      }
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        handleClick()
      }}
      size={size}
    >
      {hasText && 'Add to Wishlist'}
    </Button>
  )
}
export default WishlistButton
