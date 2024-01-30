import { useDispatch, useSelector } from 'react-redux';

import List from './ContactList.styled';
import BtnDelete from './BtnDelet.styled';
import { deleteContact, fetchContacts } from '../../redux/thunk';
import { getContacts, getFilter } from '../../redux/selector';
import { useEffect } from 'react';
import Loader from 'components/Loader';

const ContactList = () => {
  const {items, isLoading} = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  }

  const visibleContacts = items?.filter((contact) =>
    contact?.name?.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
    {isLoading && <Loader/>}
    
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <BtnDelete type="button" onClick={() => contactDelete(id)}>Delete</BtnDelete>
        </li>
      ))}
    </List>
    </>
  );
}
export default ContactList;