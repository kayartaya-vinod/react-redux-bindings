export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

function setContactsInStore(contacts) {
    return {
        type: SET_CONTACTS,
        contacts
    }
}

function addContactToStore(contact) {
    return {
        type: ADD_CONTACT,
        contact
    }
}

function removeContactFromStore(id) {
    return {
        type: REMOVE_CONTACT,
        id
    }
}

const url = 'http://localhost:5000/contacts/';


export function fetchContacts() {
    return (dispatch) =>
        fetch(url)
            .then(resp => resp.json())
            .then(contacts => dispatch(setContactsInStore(contacts)));

};

export function saveContact(contact) {
    return dispatch =>
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(resp => resp.json())
            .then(contact => dispatch(addContactToStore(contact)));
}

export function deleteContact(id) {
    return dispatch => fetch(url + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(() => dispatch(removeContactFromStore(id)));
}