import { Auth } from 'types/authTypes'
import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localstorage', () => {
    window.localStorage.setItem(
      '@bornlogic_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', { token: '', time: '' } as Auth)

    expect(window.localStorage.getItem('@bornlogic_cartItems')).toStrictEqual(
      JSON.stringify({ token: '', time: '' })
    )
  })
})
