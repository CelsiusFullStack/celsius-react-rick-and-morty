import { useState } from "react"
import getLocation from '../customHooks/getLocation'
const SearchBox = ({ handleSearch }) => {
const [location, setLocation] = useState('')
    return(
        <div className='search-wrap'>
            <div className='search-box'>
            <input type='text' placeholder='Location  Rick and Morty Search...' onChange={(e) => setLocation(e.target.value)}/>
            <button onClick={() => handleSearch(location)}><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}
export default SearchBox