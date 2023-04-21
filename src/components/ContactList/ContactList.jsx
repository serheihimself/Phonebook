import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
}

export default ContactList;
