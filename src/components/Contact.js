import React from 'react';
import { Container } from '@material-ui/core';
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div id='contactSection' className='contact'>
            <Container maxWidth='sm'>
                <h2 className='title'>Get In Touch</h2>
                <ContactForm />
            </Container>
        </div>
    )
}

export default Contact;