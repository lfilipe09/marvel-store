import React, { useEffect } from 'react'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useState } from 'react'
import { useUser } from 'hooks/useUser'
import { useAuth } from 'hooks/useAuth'
import { WishlistUser } from 'types/userTypes'

type WishlistButtonProps = {
  wishlistItem: WishlistUser
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  wishlistItem,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const { getAuth } = useAuth()
  const { getUserByEmail, updateWishlist } = useUser()
  const [loading, setLoading] = useState(false)
  const [isInWishlist, setIsInWishlist] = useState(false)

  const user = getAuth()

  const handleClick = async () => {
    setLoading(true)
    if (user) {
      updateWishlist(
        user.userEmail,
        wishlistItem,
        isInWishlist ? 'delete' : 'add'
      )
      setIsInWishlist(!isInWishlist)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      const userData = getUserByEmail(user.userEmail)
      userData?.wishlist.map((singleWishlist) => {
        singleWishlist.id === wishlistItem.id && setIsInWishlist(true)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : !isInWishlist ? (
          <FavoriteBorder
            aria-label={
              isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'
            }
          />
        ) : (
          <Favorite
            aria-label={
              isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'
            }
          />
        )
      }
      color={!isInWishlist ? 'black' : 'primary'}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        handleClick()
      }}
      size={size}
    >
      {hasText && !isInWishlist
        ? 'Add to Wishlist'
        : hasText && isInWishlist && 'Remove from Wishlist'}
    </Button>
  )
}
export default WishlistButton
