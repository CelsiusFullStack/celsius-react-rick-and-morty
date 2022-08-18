import { useEffect, useState } from "react"
import getLocation from "../customHooks/getLocation"
const LocationInfo = ({location}) => {
const [id, setId] = useState('id')
const [name, setName] = useState('name')
const [type, setType] =useState('type')
const [dimension, setDimension] = useState('dimension')
useEffect(() =>{
    if(location){
        getLocation(location).then((locationHead) => {
        setId(locationHead.id);
        setName(locationHead.name);
        setType(locationHead.type);
        setDimension(locationHead.dimension);
    })
    }}, [location])
return(
    <div className="title-location-header ">
        <div className="location-id-circle">{id}</div>
        <span>Name: {name}</span>
        <span>Type: {type}</span>
        <span>Dimension: {dimension}</span>
    </div>
)
}
export default LocationInfo