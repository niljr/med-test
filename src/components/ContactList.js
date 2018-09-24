import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from './Contact';
import EditContact from './EditContact';

class ContactList extends Component {
    render() {
        return (
            <div>
                Contact List
                {this.props.contacts.map((contact) => (
                    <div key={contact.id}>
                        {contact.editing ? <EditContact contact={contact} key={contact.id} /> : 
                            <Contact key={contact.id} contact={contact} />
                        }
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state
    }
}

export default connect(mapStateToProps)(ContactList);