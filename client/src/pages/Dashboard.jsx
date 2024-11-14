import Logo from '../assets/logo.svg'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

export default function Dashboard() {
    return (
        <>
            <div className="page-main-container">
                <header className="page-header-container">
                    <div className="searchbar-container">
                        <SearchBar />
                    </div>
                    <div className="notification-icon-container">
                        <img src={Logo}></img>
                    </div>
                </header>
                <div className="category-swipe-container">
                    {/* Categories component here */}
                </div>
                <div className="promotional-container">
                    {/* Unknown promotional space.. ads? */}
                </div>
                <section className="for-you-skill-section">
                    <header className="for-you-header">
                        <div className="for-you-title-container">
                            <h3 className="for-you-title">For You</h3>
                        </div>
                        <div className="view-all-container">
                            view all <span className="view-all-arrow">&gt;</span>
                        </div>  
                    </header>
                    <div className="for-you-body">
                        {/* Section for recommended skills to be displayed based on users preferences/searches */}
                    </div>
                </section>
            </div>
            <Navbar/>
        </>
    )
};