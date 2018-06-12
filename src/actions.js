// ACTION TYPES: 

export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

const url = 'http://localhost:5000/contacts/';

// ACTION CREATORS:
// helper methods, called by the dispatch(..) in thunk actions, after the async call is finished
// 1. setContactsInStore
// 2. addContactToStore
// 3. removeContactFromStore

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

// THUNK ACTIONS:
// 1. fetchContacts
// 2. saveContact
// 3. deleteContact

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