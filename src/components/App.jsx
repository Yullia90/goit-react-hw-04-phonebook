import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import initialContacts from './Data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contact');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }
  addContact = ({ name, number }) => {
    const check = this.checkName(name);
    if (check.length <= 0) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      return;
    }
    alert('This name is already in the list!');
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  checkName = name => {
    const { contacts } = this.state;
    return contacts.filter(contact => contact.name.includes(name));
  };
  onFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onFilter={this.onFilter} />
        <Section>Contacts</Section>
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
        <Total>Total number of contacts: {contacts.length}</Total>
      </Container>
    );
  }
}
