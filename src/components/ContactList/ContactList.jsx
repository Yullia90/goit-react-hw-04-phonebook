import React from 'react';
import {
  Container,
  List,
  Contact,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </List>
    </Container>
  );
};
