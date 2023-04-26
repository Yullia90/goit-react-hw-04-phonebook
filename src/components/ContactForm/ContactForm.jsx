import React from 'react';
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

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form.elements;

    onSubmit(name.value, number.value);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Name>
        <NameField>Name</NameField>
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
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
        />
      </Number>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
