import React, { useState, useEffect } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    // const [{ name, email, message }, setState] = useState(initialState)
    const [statusMessage, setStatusMessage] = useState(false);
    // let messageSuccess;


    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setState((prevState) => ({ ...prevState, [name]: value }))
    // }
    // const clearState = () => setState({ ...initialState })

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;

        setTimeout(() => {
            setStatusMessage(false)
        }, 5000);

        if (statusMessage) {
            console.log("Here goes message")
            // messageSuccess = 
            // console.log(messageSuccess)
        }



    }, [statusMessage]);





    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4zohetf', 'template_26dtvna', form.current, 'f83ndX6S-gP05kLbe')
            .then((result) => {
                console.log(result.text);
                setStatusMessage(true);
                // if (result.text === "OK") {
                //     messageSuccess = <p> This is message </p>
                // }
                // clearState();

            }, (error) => {
                console.log(error.text);
                // setStatusMessage(`${error.text} happened`);
            });

        e.target.reset()
    };


    // { statusMessage && (< div className='messageSucess'> This is message </div>) }
    return (
        <section id="contact">
            <h5></h5>
            <h2></h2>

            <div className="container contact__container">
                {statusMessage && <div className='messageSucess'>Message Sent Successfully!</div>}

                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option__icon' />
                        <h4>Email</h4>
                        <h5>basillfarooq@gmail.com</h5>
                        <a href="mailto:basillfarooq@gmail.com" target="_blank"> Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option__icon' />
                        <h4>Messenger</h4>
                        <h5>Basil Farooq</h5>
                        <a href="https://m.me/BasilDhilloo" target="_blank"> Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option__icon' />
                        <h4>WhatsApp</h4>
                        <h5>+12345678</h5>
                        <a href="https://api.whatsapp.com/send?phone=14372373829" target="_blank"> Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Enter Your Full Name' required />
                    <input type="email" name="email" placeholder='Enter Your Email Address' required />
                    <textarea name="message" rows="7" placeholder='Type your message here!' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>

            </div >

        </section >
    )
}

export default Contact