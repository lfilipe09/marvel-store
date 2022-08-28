import { Auth } from 'types/authTypes'
import { User } from 'types/userTypes'

const APP_KEY = '@bornlogic'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: Auth | User[]) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

export function removeStorageItem(key: string) {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(`${APP_KEY}_${key}`)
}
