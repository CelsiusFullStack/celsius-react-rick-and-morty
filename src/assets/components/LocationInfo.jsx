import { useEffect, useState } from "react"
const LocationInfo = ({location}) => {
const [name, setName] = useState('name')
const [type, setType] =useState('type')
const [dimension, setDimension] = useState('dimension')
useEffect(() =>{
    if(location){ 
        setName(location.name);
        setType(location.type);
        setDimension(location.dimension);
    }
},[location])
return(
    <div className="title-header-search">
        <span>{name}</span>
        <span>{type}</span>
        <span>{dimension}</span>
       
    </div>
)
}
export default LocationInfo