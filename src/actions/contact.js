export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT= 'EDIT_CONTACT';
export const DELETE_CONTACT= 'DELETE_CONTACT';
export const UPDATE_CONTACT= 'UPDATE_CONTACT';

export function addContact(data) {
    return { type: 'ADD_CONTACT', data }
}

export function editContact(id) {
    return { type: 'EDIT_CONTACT', id }
}

export function deleteContact(id) {
    return { type: 'DELETE_CONTACT', id }
}

export function updateContact(id, data) {
    return { 
        type: 'UPDATE_CONTACT',
        id,
        data
     }
}