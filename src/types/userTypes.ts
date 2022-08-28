export interface Users {
  users: User[]
  offset: number
}

export interface WishlistUser {
  id: number
  slug: string
  imgUrl: string
  title: string
}

export interface User {
  id: string
  name: string
  surname: string
  cpf: string
  email: string
  password: string
  created_at: string
  wishlist: WishlistUser[]
}

export type UserForm = Omit<User, 'id' | 'activity' | 'created_at' | 'wishlist'>

export type UserFormSignIn = Omit<
  UserForm,
  | 'name'
  | 'surname'
  | 'cpf'
  | 'profile'
  | 'activity'
  | 'created_at'
  | 'wishlist'
>
