import React from 'react'
import { createContext, ReactNode, useContext } from 'react'
import { Auth } from 'types/authTypes'
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem
} from '../utils/localStorage/index'

export interface AuthProviderProps {
  children: ReactNode
}

export type AuthProps = {
  getAuth: () => null | Auth
  validateAuth: () => boolean
  createAuth: (userEmail: string) => void
}

export const AuthInitialValues = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAuth: () => null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateAuth: () => true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createAuth: () => {}
}

export const AuthContext = createContext<AuthProps>({} as AuthProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const validateAuth = () => {
    const AuthStoraged: Auth = getStorageItem('auth')

    if (AuthStoraged === null) {
      return false
    }

    if (
      new Date().getTime() - new Date(AuthStoraged?.time).getTime() >
      3600000
    ) {
      removeStorageItem('auth')
      return false
    }

    return true
  }

  const getAuth = () => {
    const AuthStoraged: Auth = getStorageItem('auth')

    if (AuthStoraged === null) {
      return null
    }

    if (
      new Date().getTime() - new Date(AuthStoraged?.time).getTime() >
      3600000
    ) {
      removeStorageItem('auth')
      return null
    }

    return AuthStoraged
  }

  const createAuth = (userEmail: string) => {
    setStorageItem('auth', {
      token: new Date().getTime().toString(16),
      time: new Date().toISOString(),
      userEmail: userEmail
    })
  }

  return (
    <AuthContext.Provider value={{ getAuth, createAuth, validateAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthProps {
  const context = useContext(AuthContext)

  return context
}
