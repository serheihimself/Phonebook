import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id}>
      <p>
        <span>{name}</span> : {number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
