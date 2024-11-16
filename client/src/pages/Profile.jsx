import BackArrow from '../assets/back-arrow.svg'
import Settings from '../assets/settings.svg'
import ProfileImg from '../assets/profile-img.svg'
import RatingStar from '../assets/rating-star.svg'
import AppNavbar from "../components/Navbar"
import { useQuery } from '@apollo/client'
import { Navigate } from 'react-router-dom';

import Auth from '../utils/auth'

import { GET_ME } from '../utils/queries'



export default function Profile() {

    const { loading, data } = useQuery(GET_ME);
    const user = data?.me

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return <Navigate to="/login" />;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-main-container">
                <header className="profile-header">
                    <div className="back-arrow-container">
                        {/* <img className='profile-backarrow' src={BackArrow}></img> */}
                    </div>
                    <div className="profile-title-container">
                        <h1>Profile</h1>
                    </div>
                    <div className="settings-icon-container">
                        {/* <img className='settings-icon' src={Settings}></img> */}
                    </div>
                </header>
                <div className="profile-user-info-container">
                    <div className='profile-img-border'>
                        <div className='profile-img-container'>
                            <img className='profile-img' src={ProfileImg}></img>
                        </div>
                    </div>
                    <h2 className='profile-name'>{user.firstName} {user.lastName}</h2>
                    <h3 className='profile-email'>{user.email}</h3>
                    <button className='logout-button' onClick={Auth.logout}>Logout</button>
                </div>
                {/* <div className="profile-social-info-container">
                    <div className='profile-ratings-container'>
                        <img className='rating-star-icon' src={RatingStar}></img>
                        <img className='rating-star-icon' src={RatingStar}></img>
                        <img className='rating-star-icon' src={RatingStar}></img>
                        <img className='rating-star-icon' src={RatingStar}></img>
                        <img className='rating-star-icon' src={RatingStar}></img>
                    </div>
                    <div className='profile-friends-container'>
                        <h3 className='profile-friends-title'><span id='friends-number'>30</span> friends</h3>
                    </div>
                </div> */}
                <div className="profile-user-skills-container">
                    <div className='user-skill-line'>
                    </div>
                    <div className='user-skills-div-bar'></div>
                    <div className='user-skill-line'>
                        {/* skill information, onClick, take user to full page skill section */}
                    </div>
                    <div className='user-skills-div-bar'></div>
                </div>
            </div>
            <AppNavbar />
        </>
    )
};
