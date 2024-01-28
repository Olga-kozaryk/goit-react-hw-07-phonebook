
import ContactForm from "components/ContactForm/ContactForm";
import { Container } from "./App.styled";

import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";


export const App = () => { 
  return ( 
<Container>
<h1>Phonebook</h1>
<ContactForm />
<h2>Contacts</h2>

  <Filter/>
  <ContactList/>
</Container>
      );
    };

