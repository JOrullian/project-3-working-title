import AppNavbar from "../components/Navbar"
import BackArrow from '../assets/back-arrow.svg'

export default function CategoryPage() {
    return (
        <>
            <div className="page-main-container">
                <header className="category-header">
                    <div className="back-arrow-container">
                        <img className='profile-backarrow' src={BackArrow}></img>
                    </div>
                    <div className="category-title-container">
                        <h1>Category Name</h1>
                    </div>
                </header>
                <div className="category-page-body">

                </div>
            </div>
            <AppNavbar/>
        </>
    )
}