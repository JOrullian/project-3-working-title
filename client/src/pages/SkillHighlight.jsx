import { useQuery } from '@apollo/client';
import BackArrow from '../assets/back-arrow.svg';
import Settings from '../assets/settings.svg';
import { GET_SKILL_BY_ID } from "../utils/queries";

export default function SkillHighlightPage() {
    const { skillId } = useParams();

    // Fetch the skill data using the skillId
    const { loading, error, data } = useQuery(GET_SKILL_BY_ID, {
        variables: { skillId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading skill data: {error.message}</p>;

    // Update this return to dynamically add from the GET_SKILL_BY_ID data
    return (
        <>
            <div className="page-main-container">
                <header className="skill-header">
                    <div className="back-arrow-container">
                        <img className='profile-backarrow' src={BackArrow}></img>
                    </div>
                    <div className="profile-title-container">
                        <h1>Skill Page</h1>
                    </div>
                    <div className="settings-icon-container">
                        <img className='settings-icon' src={Settings}></img>
                    </div>
                </header>
                <div className='skill-highlight-img-container'>
                    <img className='skill-highlight-img' src={ToolsIcon}></img>
                </div>
                <div className='skill-hightlight-description-container'>
                    <header className='skill-description-header'>
                        <div className='skill-title-container'>
                            <h1 className='skill-type-title'>Electrician</h1>
                            <h2 className='skill-profile-name'>Drew Easter</h2>
                            <h3 className='skill-location'>Dallas, TX</h3>
                        </div>
                    </header>
                    <div className='skill-description-body'>

                    </div>
                </div>
                <footer className='skill-hightlight-footer'>
                    <button className='skill-book-btn'>Send message</button>
                </footer>
            </div>
            <div className='navbar'>
                {/* Placeholder for navbar */}
            </div>
        </>
    )
}