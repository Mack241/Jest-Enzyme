import axios from 'axios'

export const getSecretWord = () => {
  return axios.get('http://localhost:8080')
          .then(res => res.data)
}