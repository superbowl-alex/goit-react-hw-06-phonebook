import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  FormAddContacts,
  Label,
  Input,
  Thumb,
  ErrorElement,
  ButtonForm,
} from './ContactForm.styled';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('This field is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <ErrorElement>{message}</ErrorElement>;
      }}
    />
  );
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const findContactByName = (array, newName) => {
      return array.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const normalizedName = name.toLowerCase();

    if (findContactByName(contacts.items, normalizedName)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormAddContacts>
        <Label>
          Name
          <Thumb>
            <Input type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </Thumb>
        </Label>
        <Label>
          Number
          <Thumb>
            <Input type="tel" name="number" autoComplete="off" />
            <FormError name="number" />
          </Thumb>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormAddContacts>
    </Formik>
  );
};

export default ContactForm;
