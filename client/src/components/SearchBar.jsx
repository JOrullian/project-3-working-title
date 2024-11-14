import SearchIcon from '../assets/search-icon.svg'

const SearchBar = () => {
    return(
        <>
            <div className="searchbar">
                <img className="searchbar-icon" src={SearchIcon}></img>
                <input className='searchbar-input' placeholder='Search...' id='search'></input>
            </div>
        </>
    )
}

export default SearchBar;