import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchContacts } from '../actions';
import { connect } from 'react-redux';
import {deleteContact} from '../actions';




class ContactList extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchContacts();
    }

    handleDelete(id) {
        this.props.deleteContact(id);
    }

    render() {

        let EmptyList = (
            <p className="lead">There are no contacts yet!</p>
        );

        let ContactRows = this.props.contacts.map(contact =>
            <tr key={contact.id}>
                <td>
                <a href="javascript:void(0)" 
                    onClick={this.handleDelete.bind(this, contact.id)}
                    style={{marginRight: '10px'}}>
                    <span className="glyphicon glyphicon-trash"></span>
                </a>
                {contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
        );

        let ContactsTable = (
            <div>
                <p className="lead">Contact list</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContactRows}
                    </tbody>
                </table>
            </div>
        );

        return (
            this.props.contacts.length === 0 ? EmptyList : ContactsTable
        );
    }
}

// declare the props of this component
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

// let redux know what properties of the store's state we need in this component
function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

// this is where the store and actions are connected with this UI component
export default connect(mapStateToProps, { fetchContacts, deleteContact })(ContactList);