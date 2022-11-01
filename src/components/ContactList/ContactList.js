import React from 'react';
import ContactItem from '../ContactItem';
import Notification from '../Notification';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, WrapList, ListTitle } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizedFilter = filter.value.toLowerCase();

  const getVisibleContacts = contacts.items.filter(({ name }) =>
    name?.toLowerCase()?.includes(normalizedFilter)
  );

  return (
    <WrapList>
      <ListTitle>Contacts</ListTitle>
      {contacts.items.length > 0 ? (
        <List>
          {getVisibleContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      ) : (
        <Notification message="There is no contact in Phonebook" />
      )}
    </WrapList>
  );
};

export default ContactList;
