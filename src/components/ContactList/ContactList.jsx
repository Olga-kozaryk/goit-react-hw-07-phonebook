

import { useDispatch, useSelector } from 'react-redux';

import List from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selector';
import BtnDelete from './BtnDelet.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  }

  const visibleContacts = contacts?.filter((contact) =>
    contact?.name?.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <BtnDelete type="button" onClick={() => contactDelete(id)}>Delete</BtnDelete>
        </li>
      ))}
    </List>

  );
}
export default ContactList;