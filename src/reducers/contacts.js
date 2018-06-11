import { SET_CONTACTS, ADD_CONTACT } from '../actions';

export default function contacts(state = [], action = {}) {
    switch (action.type) {
        case SET_CONTACTS:
            return action.contacts;
        case ADD_CONTACT:
            console.log('>>>>', action);
            return [
                ...state,
                action.contact
            ];
        default: return state;
    }
}