import axios from 'axios'

export const getCarro = async () => {
  axios.get("http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/3477?token=your-app-token")
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}