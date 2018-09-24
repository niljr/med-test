import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editContact, deleteContact } from '../actions/contact';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.contact.firstName}</h2>
                <button onClick={() => this.props.dispatch(editContact(this.props.contact.id))}>
                    Edit
                </button>
                <button onClick={() => this.props.dispatch(deleteContact(this.props.contact.id))}>
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(Contact);