import axios from 'axios'
const getResident = (url) => {
const res = axios(url)
return res
}
export default getResident