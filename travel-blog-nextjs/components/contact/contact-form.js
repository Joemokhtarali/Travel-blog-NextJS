import classes from "./contact-form.module.css";
import { useState } from 'react'
import axios from 'axios';

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    function sendMessageHandler(event) {
        event.preventDefault()
        axios.post(
            '/api/contact',
            { email, name, message },
            { options }
          );
    }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your Email</label>
            <input type="email" id="email" required placeholder='name' onChange={setEnteredEmail}/>
          </div>

          <div className={classes.control}>
            <label htmlFor="name"> Your Name</label>
            <input type="text" id="name" required placeholder='email' onChange={setEnteredName}/>
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message"> Your Message</label>
          <textarea id="message" rows="5" placeholder='write your message here ....' onChange={setEnteredMessage}/>
        </div>

        <div className={classes.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
