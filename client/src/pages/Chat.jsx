import BackArrow from '../assets/back-arrow.svg'
import Settings from '../assets/settings.svg'
import ProfileImg from '../assets/profile-img.svg'

export default function Chat(props) {
    return (
        <>
            <div className="page-main-container">
                <header className="chat-header">
                    <div className="chat-back-arrow-container">
                        <img className='chat-profile-backarrow' src={BackArrow}></img>
                    </div>
                    <div className="chat-title-container">
                        <div className='chat-profile-img-border'>
                            <div className='chat-profile-img-container'>
                                <img className='chat-profile-img' src={ProfileImg}></img>
                            </div>
                        </div>
                        <h1 className='chat-name'>Drew Easter</h1>
                    </div>
                    <div className="class-settings-icon-container">
                        <img className='class-settings-icon' src={Settings}></img>
                    </div>
                </header>
                <div className='chat-body'>

                </div>
                <div className='chat-keyboard-container'>

                </div>
            </div>
            <div className='navbar'>
                {/* Placeholder for navbar */}
            </div>
        </>
    )
}