import React, { Component } from 'react';
import { saveContact } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, phone } = this.state;
        this.setState({ name: '', email: '', phone: '' })
        this.props.saveContact({ name, email, phone });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <p className="lead">Contact Form</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">Name: </label>
                        <div>
                            <input id="name" className="form-control" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label">Email id: </label>
                        <div>
                            <input id="email" className="form-control" name="email" onChange={this.handleChange.bind(this)} value={this.state.email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="control-label">Phone number: </label>
                        <div>
                            <input id="phone" className="form-control" name="phone" onChange={this.handleChange.bind(this)} value={this.state.phone} />
                        </div>
                    </div>
                    <button className="btn btn-primary">Add name</button>
                </form>
            </div>
        );
    }
}

ContactForm.propTypes = {
    saveContact: PropTypes.func.isRequired
}

export default connect(null, { saveContact })(ContactForm);