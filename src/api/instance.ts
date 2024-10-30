import axios from 'axios'

const baseURL = 'http://localhost:8080'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
