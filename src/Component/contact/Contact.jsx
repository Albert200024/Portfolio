import { useState } from 'react';
import './contact.css'
//image
import contactImg from'../../assets/shake.svg'

const Contact = () => {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
   };
  return (
    <div className="contact" id="contact">
      <div className="c-left">
        <img src={contactImg} alt="" />
      </div>
      <div className="c-right">
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
};

export default Contact