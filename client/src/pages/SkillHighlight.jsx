import BackArrow from '../assets/back-arrow.svg'
import Settings from '../assets/settings.svg'
import ToolsIcon from '../assets/tools-icon.svg'
import ChatIcon from '../assets/chat-icon.svg'


export default function SkillHighlightPage(props) {
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