import SearchBox from "./SearchBox"
const SearchContainer = ({handleSearch}) => {
return(
    <div className='search-container'>
        <div className='search-content'>
            <div className='search-container__left'>
                <SearchBox handleSearch={handleSearch}/>
            </div>
        </div>
    </div>
)
}
export default SearchContainer;