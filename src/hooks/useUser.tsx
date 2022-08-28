import React from 'react'
import { format } from 'date-fns'
import _ from 'lodash'
import { createContext, ReactNode, useContext, useState } from 'react'
import { User, UserForm, WishlistUser } from 'types/userTypes'
import { getStorageItem, setStorageItem } from '../utils/localStorage/index'

export interface UserProviderProps {
  children: ReactNode
}

export type UserProps = {
  users: User[]
  validateUser: (email: string, password: string) => void
  createUser: (user: UserForm) => void
  updateWishlist: (email: string, data: WishlistUser[]) => void
}

export const UserContext = createContext<UserProps>({} as UserProps)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUser = getStorageItem('users')

    //arrumando o carrinho que já vem sem amount

    if (storagedUser) {
      return storagedUser
    }

    return []
  })

  const validateUser = (email: string, password: string) => {
    const AllUsers: User[] = getStorageItem('users')

    if (AllUsers === null) {
      return null
    }

    const UserExist = AllUsers.find((userStored) => userStored.email === email)

    if (!UserExist) {
      return null
    }

    if (UserExist.password !== password) {
      return null
    }

    return UserExist
  }

  const createUser = (user: UserForm) => {
    try {
      let newUsers = [...users]
      const UserExist = newUsers.find(
        (userStored) => userStored.email === user.email
      )
      if (UserExist) {
        return null
      } else {
        setUsers([
          ...users,
          {
            ...user,
            id: new Date().getTime().toString(16),
            created_at: format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
            wishlist: []
          }
        ])
        newUsers = [
          ...users,
          {
            ...user,
            id: new Date().getTime().toString(16),
            created_at: format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
            wishlist: []
          }
        ]
        setStorageItem('users', newUsers)
      }
    } catch (error) {
      console.log('error in creation: ', error)
    }
  }

  const updateWishlist = (email: string, data: WishlistUser[]) => {
    try {
      let newUsers = [...users]
      const UserToChange = newUsers.find(
        (userStored) => userStored.email === email
      )
      if (!UserToChange) {
        return null
      } else {
        const newUserChanged: User = {
          cpf: UserToChange.cpf,
          email: UserToChange.email,
          id: UserToChange.id,
          name: UserToChange.name,
          password: UserToChange.password,
          surname: UserToChange.surname,
          wishlist: data ?? UserToChange.wishlist,
          created_at: UserToChange.created_at
        }
        if (!_.isEqual(UserToChange, newUserChanged)) {
          const newUsersDeleted = newUsers.filter(
            (userStored) => userStored.email !== email
          )
          setUsers([...newUsersDeleted, newUserChanged])
          newUsers = [...newUsersDeleted, newUserChanged]
          setStorageItem('users', newUsers)
        }
      }
    } catch (error) {
      console.log('error in update: ', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        updateWishlist,
        users,
        createUser,
        validateUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserProps {
  const context = useContext(UserContext)

  return context
}
