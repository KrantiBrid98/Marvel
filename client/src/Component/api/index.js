import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
})

let baseURL = process.env.NODE_ENV === `development` ? 'http://localhost:8080/comment' : 'http://marvel/comment' 
export const db = axios.create({
    baseURL
})
