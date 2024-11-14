import io from 'socket.io-client'
import BackArrow from '../assets/back-arrow.svg'
import Settings from '../assets/settings.svg'
import ProfileImg from '../assets/profile-img.svg'
import AppNavbar from './Navbar'
import { useEffect, useState } from 'react'

const ChatWindow = () => {
    const [room, setRoom] = useState('')

    const [message, setMessage] = useState('')
    const [messageReceived, setMessageReceived] = useState('')

    const socket = io.connect("http://localhost:4000")

    const joinRoom = () => {
        if (room !== "") {
            socket.emit('joinRoom', room)
        }
    }

    const sendMessage = () => {
        socket.emit('sendMessage', { message, room })
    }

    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            setMessageReceived(data.message)
        });
    }, [socket])

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
                    <h1>{messageReceived}</h1>
                </div>
                <div className='chat-keyboard-container'>
                    <input placeholder="Enter Message" onChange={(event) =>
                        setMessage(event.target.value)
                    } />
                    <button onClick={sendMessage}>Send Message</button>
                    <input
                        placeholder="Room Number"
                        onChange={(event) => {
                            setRoom(event.target.value)
                        }}
                    />
                    <button onClick={joinRoom}>Join Room</button>
                </div>
            </div>
            <AppNavbar/>
        </>
    )
}

export default ChatWindow