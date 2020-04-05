import React from 'react';
import emailjs from 'emailjs-com';
import { Grid } from '@material-ui/core';
import validator from 'validator';
import Flip from 'react-reveal/Flip';
import TextField from '@material-ui/core/TextField';

import { PrimaryButton } from './buttons/Buttons';


class ContactForm extends React.Component {
    state = {
        error: '',
        userName: '',
        userPhone: '',
        userEmail: '',
        message: '',
        success: false
    }

    validateForm = (e) => {
        e.preventDefault();

        const name = !validator.isEmpty(e.target.elements.user_name.value);
        const number = validator.isNumeric(e.target.elements.user_phone.value);
        const email = validator.isEmail(e.target.elements.user_email.value);
        const msg = !validator.isEmpty(e.target.elements[4].value);

        if (name && number && email && msg) {
            this.sendEmail(e)
        } else if (!name) {
            this.setState({ error: 'Oops! Looks like there no name!' });
        } else if (!number) {
            this.setState({ error: 'Oops! Looks like thats not a valid number!.' });
        } else if (!email) {
            this.setState({ error: "Oops! Looks like that isn't a valid email address!" });
        } else if (!msg) {
            this.setState({ error: 'Oops! Looks like theres no message to send!' });
        }
    };

    sendEmail = (e) => {
        const templateParams = {
            "reply_to": e.target.elements.user_email.value,
            "from_name": e.target.elements.user_name.value,
            "to_name": "Chris",
            "from_phone": e.target.elements.user_phone.value,
            "message_html": e.target.elements[6].value,
        }
        const service_id = "gmail";
        const template_id = "template_lTUGiUuh";
        const user_id = 'user_RXDIm0wgIArmjK8D2XKTH'
        e.preventDefault();
        emailjs.send(service_id, template_id, templateParams, user_id)
            .then((result) => {
                console.log(result.text);
                document.getElementById('contactForm').reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    render() {
        return (
            <form id='contactForm' className="contact-form" onSubmit={this.validateForm} >
                <Grid container>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth={true}
                            label='Your Name'
                            variant="outlined"
                            type="text"
                            name="user_name" />
                        <TextField fullWidth={true} label='Your Email' variant="outlined" type="email" name="user_email" />
                        <TextField fullWidth={true} label='Your Phone Number' variant="outlined" type="phone" name="user_phone" />
                        <textarea placeholder="What's Up?" name="message" />
                        <Flip top>
                            {this.state.error ? <p className='error_msg'>{this.state.error}</p> : ''}
                            {this.state.success ? <p className='success_msg'>Thanks! I'll be in touch soon!</p> : ''}
                        </Flip>
                        <PrimaryButton styles={{
                            width: '100%',
                            margin: '2rem 0'
                        }}
                            type='submit'
                            buttonText='SEND'
                        />
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default ContactForm;
