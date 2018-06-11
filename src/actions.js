export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';

function setContacts(contacts) {
    return {
        type: SET_CONTACTS,
        contacts: contacts
    }
}

function addContact(contact) {
    console.log('~~~~~', contact);
    return {
        type: ADD_CONTACT,
        contact: contact
    }
}

const url = 'http://localhost:5000/contacts/';


export function fetchContacts() {
    return (dispatch) =>
        fetch(url)
            .then(resp => resp.json())
            .then(contacts => dispatch(setContacts(contacts)));

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
            .then(contact => dispatch(addContact(contact)));
}