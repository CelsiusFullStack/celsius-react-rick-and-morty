import { useEffect, useState } from "react"
import getLocation from "../customHooks/getLocation"
const LocationInfo = ({location}) => {
const [name, setName] = useState('name')
const [type, setType] =useState('type')
const [dimension, setDimension] = useState('dimension')
useEffect(() =>{
    if(location){
        getLocation(location).then((locationHead) => {
        setName(locationHead.name);
        setType(locationHead.type);
        setDimension(locationHead.dimension);
        //alert(name +' '+ type +' '+dimension);
    })
    }}, [location])
return(
    <div className="title-location-header">
        <span>{name}</span>
        <span>{type}</span>
        <span>{dimension}</span>
    </div>
)
}
export default LocationInfo