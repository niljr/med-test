import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateContact } from '../actions/contact';

class EditContact extends Component {
    firstNameRef = React.createRef();
    lastNameRef = React.createRef();
    mobileNumberRef = React.createRef();
    emailRef = React.createRef();
    verifyEmailRef = React.createRef();

    handleEdit = (event) => {
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
            this.props.dispatch(updateContact(this.props.contact.id, data))
            event.currentTarget.reset();
        } else {
            alert('Email input error');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input 
                        name='firstName' 
                        ref={this.firstNameRef} 
                        type='text' 
                        placeholder='First Name' 
                        defaultValue={this.props.contact.firstName}
                        required/>
                    <input 
                        name='lastName' 
                        ref={this.lastNameRef}  
                        type='text'
                        placeholder='Last Name'
                        defaultValue={this.props.contact.lastName} 
                        required/>
                    <input 
                        name='mobileNumber' 
                        ref={this.mobileNumberRef} 
                        type='number' 
                        placeholder='Mobile Number' 
                        defaultValue={this.props.contact.mobileNumber}
                        required/>
                    <input 
                        name='email' 
                        ref={this.emailRef}
                        type='email' 
                        placeholder='EmailNumber' 
                        defaultValue={this.props.contact.email}
                        required/>
                    <input 
                        name='verifyEmail' 
                        ref={this.verifyEmailRef}
                        type='email' 
                        placeholder='re-enter Email' 
                        defaultValue={this.props.contact.email}
                        required/>
                    <button type='submit'>UPDATE</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditContact);