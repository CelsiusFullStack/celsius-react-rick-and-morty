import { useEffect, useState } from 'react'
import getResident from '../customHooks//getResident'
const ResidentInfo = ( {url} ) => {
const [name , setName] = useState('');
const [image, setImage] = useState('');
const [status, setStatus] = useState('');
const [origin, setOrigin] = useState('');
const [episodes, setEpisodes] = useState('');
useEffect(() => {
    if(url){
        getResident(url).then((res) => {
        setName(res.data.name);
        setImage(res.data.image);
        setStatus(res.data.status);
        setOrigin(res.data.origin.name)
        setEpisodes(res.data.episode.length)
    })
    }}, [url])
return(
    <div className='resident-info__card'>
        <div className ='resident-info__image'>
            <img className='resident-info__image-img' src={image} alt=''/>
        </div>
        <div className='resident-info__content'>
            <h6 className='resident-info__status'>Status: {status}</h6>
            <h4 className='resident-info__name'>Name: {name}</h4>
            <h6 className='resident-info__origin'>Origin: {origin}</h6>
            <div className='resident-info__footer'>
            <div className='resident-info__footer-episodes'>
                {episodes} {(episodes > 1) ? ' episodes' : 'episode'}
            </div>
            </div>
        </div>
    </div>
)
}
export default ResidentInfo