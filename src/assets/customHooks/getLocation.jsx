import axios from 'axios'
const getLocation = (location) => {
      const URL_Location = `https://rickandmortyapi.com/api/location/${location}`;
      const res = axios.get(URL_Location)
      const locationHead = res.then((info) =>info.data);
return locationHead // revisar , par actualizar luego.. se intento pero ya hay q entregar
}
export default getLocation