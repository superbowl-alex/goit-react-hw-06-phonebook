import React from 'react';
import ContactItem from '../ContactItem';
import Notification from '../Notification';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, WrapList, ListTitle } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = Object.values(useSelector(getContacts));
  const normalizedFilter = filter.toLowerCase();
  console.log(contacts);

  const getVisibleContacts = contacts.filter(({ name }) =>
    name?.toLowerCase()?.includes(normalizedFilter)
  );

  return (
    <WrapList>
      <ListTitle>Contacts</ListTitle>
      {contacts.length > 0 ? (
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
