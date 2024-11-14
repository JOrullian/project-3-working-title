import SearchBar from "../components/SearchBar"
import AppNavbar from "../components/Navbar"

export default function Explore() {
    return (
        <>
            <div className="page-main-container">
                <header className="explore-header">
                    <div className="searchbar-container">
                        <SearchBar />
                    </div>
                </header>
                <section className="explore-body-container">

                </section>
            </div>
            <AppNavbar/>
        </>
    )
}