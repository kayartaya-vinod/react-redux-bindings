import { SET_CONTACTS, ADD_CONTACT, REMOVE_CONTACT } from '../actions';

export default function contacts(state = [], action = {}) {
    switch (action.type) {
        case SET_CONTACTS:
            return action.contacts;
        case ADD_CONTACT:
            return [
                ...state,
                action.contact
            ];
        case REMOVE_CONTACT:
            let tmp = [...state];
            let index = tmp.findIndex(el => el.id == action.id);
            tmp.splice(index, 1);
            return tmp;
        default: return state;
    }
}