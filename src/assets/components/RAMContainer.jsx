import { useEffect, useState } from 'react';
import getLocation from '../customHooks/getLocation';
import LocationContainer from './LocationContainer';
import ResidentContainer from './ResidentContainer';
import SearchContainer from './SearchContainer';

const RAMContainer = () =>{
const [location, setLocation] = useState()
const [list, setList] = useState([])
useEffect(() => {
    let randomLocation=parseInt(Math.floor(Math.random() * 126))
        getLocation(randomLocation).then((res) => {
        setList(res.residents);  
        setLocation(randomLocation);
     })
},[])

useEffect(() => {
    if(location){
        getLocation(location).then((res) =>{
        setList(res.residents)
        })
    }
}, [location])
const handleSearch = (info) =>{setLocation(info)}
    return(
        <div>
            <SearchContainer handleSearch={handleSearch}/>
            <LocationContainer location={location}/>
             <ResidentContainer data={list}/>
        </div>
    )
}
export default RAMContainer