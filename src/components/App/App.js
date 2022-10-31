import GlobalStyles from 'GlobalStyles';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, WrapForms, FormTitle } from './App.styled';

export default function App() {
  return (
    <Container>
      <GlobalStyles />
      <WrapForms>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm />
        <Filter />
      </WrapForms>
      <ContactList />
    </Container>
  );
}
