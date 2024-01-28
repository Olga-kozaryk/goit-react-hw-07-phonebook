
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { Form } from './ContactForm.styled';
import { Label } from './LabelForm.styled';
import { BtnForm } from './BtnForm.styled';

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;

        const contact = {
            name: form.elements.name.value,
            number: form.elements.number.value,
            id: nanoid()
        }

        dispatch(addContact(contact));
        
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
