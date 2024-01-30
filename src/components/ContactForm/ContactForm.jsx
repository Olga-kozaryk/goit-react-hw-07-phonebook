import { useDispatch, useSelector } from "react-redux";

import { Form } from './ContactForm.styled';
import { Label } from './LabelForm.styled';
import { BtnForm } from './BtnForm.styled';

import { addContact } from '../../redux/thunk';
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;

        const newContact = {
            id:nanoid,
            name: form.elements.name.value,
            phone: form.elements.number.value,
        };

        const isContactExist = contacts.some(
            contact =>
              (contact.name &&
                contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()) ||
              (contact.phone && contact.phone.trim() === newContact.phone.trim())
          );

          (isContactExist)? (alert(`${newContact.name} is already in contacts`)) :
        
        dispatch(addContact(newContact));
        
        form.reset();
    };

    return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Name"
                        required/>
                </Label>

                <Label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder="Number"
                        required
                    /></Label>
                <BtnForm type="submit">Add contact</BtnForm>
            </Form>
    )
}

export default ContactForm;
