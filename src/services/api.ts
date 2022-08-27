import axios from 'axios'

export const api = axios.create({
  baseURL:
    'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fd354455b28f2bda02e9d005be71e5e7&hash=7b47e85c232a1ac45ca2c0d29a3397c7'
})
