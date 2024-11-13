import io from 'socket.io-client'
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
        <div>
            <input
                placeholder="Room Number"
                onChange={(event) => {
                    setRoom(event.target.value)
                }}
            />
            <input placeholder="Enter Message" onChange={(event) =>
                setMessage(event.target.value)
            } />
            <button onClick={sendMessage}>Send Message</button>
            <h1>Message</h1>
            {messageReceived}
        </div>
    )
}

export default ChatWindow