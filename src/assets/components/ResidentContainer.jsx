import ResidentInfo from './ResidentInfo'
const ResidentContainer = ({data}) => {
const dataList = data.map(item => <ResidentInfo key={item} url={item} />)
    return (
        <div className='resident-container'>
            {dataList}
        </div>
    )
}
export default ResidentContainer