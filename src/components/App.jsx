import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Container, Title, Section, Total } from './App.styled';
// import initialContacts from './Data/contacts.json';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <ContactForm />;
  }
}
