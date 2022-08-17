import { useEffect, useState } from "react"
import getLocation from "../customHooks/getLocation"
const LocationInfo = ({location}) => {
const [name, setName] = useState()
const [type, setType] =useState()
const [dimension, setDimension] = useState()
const [resident, setResident] = useState()
useEffect(() =>{
    if(location){ 
        getLocation(location).then((promise) => {
        setName(promise?.data.name);
        setType(promise?.data.image);
        setDimension(promise?.data.status);
        setResident(promise?.residents.length)
    })
}},[location])
return(
    <div className="title-header-search">
        <span>{name}</span>
        <span>{type}</span>
        <span>{dimension}</span>
        <span>{resident}</span>
    </div>
)
}
export default LocationInfo