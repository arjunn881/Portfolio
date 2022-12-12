import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://png2.cleanpng.com/sh/09a618131a02e0a809bfe098e947c98a/L0KzQYm3VMEzN6R5j5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfNwdqVmeAY2bHn2hH7qjB51aZR5ReJqZ3Wwc8PshPl1NZRmitY2NXHmdrXsV8Q3bpM5eqo3NEe4SYK9VsQyPWM4Tak7M0SzRIaAVr5xdpg=/kisspng-computer-icons-contact-list-contact-page-credit-card-5acfde746fb4b8.4759166415235723404576.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}