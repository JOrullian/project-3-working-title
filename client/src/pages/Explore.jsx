import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import SearchBar from "../components/SearchBar"
import SkillList from "../components/SkillList";
import AppNavbar from "../components/Navbar"
import { GET_SKILLS_FOR_SEARCH } from '../utils/queries';
import Auth from "../utils/auth";
import { useEffect } from 'react';

export default function Explore() {
  const navigate = useNavigate()

  useEffect(() => {
    // Checks that user is logged in with non-expired token and redirects them if not
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      localStorage.removeItem('id_token');
      navigate('/login')
    }
    navigate()
  }, []);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  const { loading, error, data } = useQuery(GET_SKILLS_FOR_SEARCH, {
    variables: { term: searchTerm },
    skip: !searchTerm, // Skip query if no search term
  });

  console.log(loading);
  console.log(data);
  console.log(error);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills: {error.message}</p>;

  const skills = data?.getSkillsForSearch || [];

  console.log(skills);

  return (
    <>
      <div className="page-main-container">
        <header className="explore-header">
          <div className="searchbar-container">
            <SearchBar />
          </div>
        </header>
        <section className="explore-body-container">
          {searchTerm ? (
            <SkillList skills={skills} />
          ) : (
            <p>Enter a search term to find skills.</p>
          )}
        </section>
      </div>
      <AppNavbar />
    </>
  );
}
