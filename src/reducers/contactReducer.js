import { ADD_CONTACT, UPDATE_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions/contact';

const contactReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return state.concat([action.data]);
        case EDIT_CONTACT:
            return state.map(contact => contact.id === action.id ? {...contact, editing:!contact.editing}: contact)
        case DELETE_CONTACT:
            return state.filter((contact) => contact.id !== action.id);
        case UPDATE_CONTACT:
            return state.map(contact => {
                if (contact.id === action.id) {
                    return {
                        ...contact,
                        firstName: action.data.firstName,
                        lastName: action.data.lastName,
                        contactNumber: action.data.contactNumber,
                        email: action.data.email,
                        editing: !contact.editing
                    }
                }
                else {
                    return contact;
                }
            })
        default:
            return state;
    }
}

export default contactReducer;