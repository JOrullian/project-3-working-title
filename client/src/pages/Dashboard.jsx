import { useQuery } from "@apollo/client";

import { GET_CATEGORIES } from "../utils/queries";

import Logo from "../assets/logo.svg";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Navigate } from 'react-router-dom';

import Auth from '../utils/auth'

function Dashboard() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);


  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    localStorage.removeItem('id_token');
    return <Navigate to="/login" />;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  const categories = data.categories;

  return (
    <>
      <div className="page-main-container">
        <header className="page-header-container">
          <div className="searchbar-container">
            <SearchBar />
          </div>
          <div className="notification-icon-container">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
        <div className="category-swipe-container">
          <div className="scrollable-category-list">
            <CategoryList categories={categories} />
          </div>
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
      <Navbar />
    </>
  );
}

export default Dashboard;
