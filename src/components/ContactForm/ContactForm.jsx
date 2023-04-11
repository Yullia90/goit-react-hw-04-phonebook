import React, { Component } from 'react';
import {
  Form,
  Name,
  Number,
  NameField,
  NameInput,
  NumberField,
  NumberInput,
  Button,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    };
    
    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };
    
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Name>
          <NameField>Name</NameField>
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </Name>
        <Number>
          <NumberField>Number</NumberField>
          <NumberInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </Number>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}