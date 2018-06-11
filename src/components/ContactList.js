import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchContacts } from '../actions';
import { connect } from 'react-redux';
class ContactList extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchContacts();
    }



    render() {

        let EmptyList = (
            <p className="lead">There are no contacts yet!</p>
        );

        let ContactRows = this.props.contacts.map(contact =>
            <tr key={contact.id}>
                <td>{contact.name}</td>
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

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    console.log('>>>>', state);
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { fetchContacts })(ContactList);