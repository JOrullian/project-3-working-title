import { useLocation } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import SearchBar from "../components/SearchBar"
import SkillList from "../components/SkillList";
import AppNavbar from "../components/Navbar"
import { GET_SKILLS_BY_NAME } from '../utils/queries';

export default function Explore() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';
  
    const { loading, error, data } = useQuery(GET_SKILLS_BY_NAME, {
      variables: { name: searchTerm },
      skip: !searchTerm, // Skip query if no search term
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading skills: {error.message}</p>;
  
    const skills = data?.getSkillsByName || [];
  
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
  