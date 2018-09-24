import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contact';

class ContactForm extends Component {
    firstNameRef = React.createRef();
    lastNameRef = React.createRef();
    mobileNumberRef = React.createRef();
    emailRef = React.createRef();
    verifyEmailRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.emailRef.current.value === this.verifyEmailRef.current.value) {
            const data = {
                id: new Date().getTime(),
                firstName: this.firstNameRef.current.value,
                lastName: this.lastNameRef.current.value,
                mobileNumber: this.mobileNumberRef.current.value,
                email: this.emailRef.current.value,
                editing: false
            }; 
            this.props.dispatch(addContact(data));
            event.currentTarget.reset();
        } else {
            alert('Email input error');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='firstName' 
                        ref={this.firstNameRef} 
                        type='text' 
                        placeholder='First Name' 
                        required/>
                    <input 
                        name='lastName' 
                        ref={this.lastNameRef}  
                        type='text'
                        placeholder='Last Name' 
                        required/>
                    <input 
                        name='mobileNumber' 
                        ref={this.mobileNumberRef} 
                        type='number' 
                        placeholder='Mobile Number' 
                        required/>
                    <input 
                        name='email' 
                        ref={this.emailRef}
                        type='email' 
                        placeholder='EmailNumber' 
                        required/>
                    <input 
                        name='verifyEmail' 
                        ref={this.verifyEmailRef} 
                        type='email' 
                        placeholder='re-enter Email' 
                        required/>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default connect()(ContactForm);