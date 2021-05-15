import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
})

export const db = axios.create({
    baseURL: 'http://localhost:8080/comment'
})

