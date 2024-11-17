// import io from "socket.io-client";
import BackArrow from "../assets/back-arrow.svg";
import Settings from "../assets/settings.svg";
import ProfileImg from "../assets/profile-img.svg";
import AppNavbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const ChatWindow = () => {
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


  //  ~~~~~~~~~~~~~~~~~~~~~~~~ Base structure of chat feature -- NOT YET IMPLEMENTED ~~~~~~~~~~~~~~~~~~~~~~~~

  // const [room, setRoom] = useState("");

  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // const socket = io.connect("http://localhost:4000");

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("joinRoom", room);
  //   }
  // };

  // const sendMessage = () => {
  //   socket.emit("sendMessage", { message, room });
  // };

  // useEffect(() => {
  //   socket.on("receiveMessage", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  // const handleBackArrowClick = () => {
  //   navigate(`/`);
  // };

  //  ~~~~~~~~~~~~~~~~~~~~~~~~ Base structure of chat feature -- NOT YET IMPLEMENTED ~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      <div className="page-main-container">
        {/* <header className="chat-header">
          <div className="chat-back-arrow-container">
            <img
              className="chat-profile-backarrow"
              src={BackArrow}
              onClick={() => handleBackArrowClick()}
            ></img>
          </div>
          <div className="chat-title-container">
            <div className="chat-profile-img-border">
              <div className="chat-profile-img-container">
                <img className="chat-profile-img" src={ProfileImg}></img>
              </div>
            </div>
            <h1 className="chat-name">Drew Easter</h1>
          </div>
          <div className="class-settings-icon-container">
            <img className="class-settings-icon" src={Settings}></img>
          </div>
        </header>
        <div className="chat-body">
          <h1>{messageReceived}</h1>
        </div>
        <div className="chat-keyboard-container">
          <input
            placeholder="Enter Message"
            onChange={(event) => setMessage(event.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
          <input
            placeholder="Room Number"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div> */}
        <div className="feature-coming-soon">
          <h1>Feature coming soon...</h1>
        </div>
      </div>
      <AppNavbar />
    </>
  );
};

export default ChatWindow;
