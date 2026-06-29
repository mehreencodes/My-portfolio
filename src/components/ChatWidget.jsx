import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaRedo } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../index.css";
import dpImg from "../assets/dp.jpg";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;

    // show in UI
    setChat((prev) => [...prev, { text: message }]);

    // send to email (silent)
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        to_email: "khalidmehri65@gmail.com",
        message: message,
      },
      "YOUR_PUBLIC_KEY"
    );

    setMessage("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="chatBtn" onClick={() => setOpen(true)}>
        <FaComments />
      </div>

      {/* CHAT CARD */}
      {open && (
        <div className="chatCard">

        <div className="chatTop">

  {/* PROFILE */}
  <div className="chatProfile">
    <img src={dpImg} alt="dp" />
    <div>
      <strong>Mehreen Khalid</strong>
    </div>
  </div>

  {/* ACTION ICONS */}
  <div className="chatActions">

    {/* REFRESH */}
    <FaRedo
      className="actionIcon"
      onClick={() => setChat([])}
      title="Clear chat"
    />

    {/* CLOSE */}
    <FaTimes
      className="actionIcon"
      onClick={() => setOpen(false)}
      title="Close"
    />

  </div>
</div>

          {/* NOTE */}
          <div className="chatNote">
            I may need to share some info from this chat to assist.
          </div>

          {/* BODY */}
          <div className="chatContent">
            {chat.map((msg, i) => (
              <div key={i} className="msg">{msg.text}</div>
            ))}
          </div>

          {/* INPUT */}
          <div className="chatInputArea">
            <input
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            {/* ICON BUTTON */}
            <FaPaperPlane className="sendIcon" onClick={handleSend} />
          </div>

        </div>
      )}
    </>
  );
}