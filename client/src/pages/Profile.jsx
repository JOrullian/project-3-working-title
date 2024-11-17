import BackArrow from "../assets/back-arrow.svg";
import Settings from "../assets/settings.svg";
import ProfileImg from "../assets/profile-img.svg";
import RatingStar from "../assets/rating-star.svg";
import AppNavbar from "../components/Navbar";
import SkillList from "../components/SkillList";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

import { GET_ME, GET_SKILLS_BY_USER } from "../utils/queries";

export default function Profile() {
  const navigate = useNavigate();
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    navigate("/login");
  }

  const { loading, error, data } = useQuery(GET_ME);

  const user = data?.me;

  const {
    loading: skillLoading,
    error: skillError,
    data: skillData,
  } = useQuery(GET_SKILLS_BY_USER, {
    variables: {
      userId: data?.me?._id,
    },
    skip: !data?.me?._id,
  });

  if (skillLoading) return <p>Loading...</p>;
  if (skillError) return <p>Error loading skills data: {error.message}</p>;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile data: {error.message}</p>;

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
          <div className="logout-container">
            <button className="logout-button" onClick={Auth.logout}>
              Logout
            </button>
          </div>
        </header>
        <div className="profile-user-info-container">
          <div className="profile-img-border">
            <div className="profile-img-container">
              <img className="profile-img" src={ProfileImg}></img>
            </div>
          </div>
          <h2 className="profile-name">
            {user.firstName} {user.lastName}
          </h2>
          <h3 className="profile-email">{user.email}</h3>
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
          {skillData.getSkillsByUser.map((skill) => (
            <div className="user-skill-line" key={skill._id}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
              <p>{skill.description}</p>
            </div>
          ))}
          <div className="user-skills-div-bar"></div>
        </div>
      </div>
      <AppNavbar />
    </>
  );
}
