import AppCss from '../components/App.module.css';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  // useEffect(() => {
  //   const readLocalStorage = load('ContactsArray');
  //   if (readLocalStorage.length > 0) {
  //     setContactsList(readLocalStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   save('ContactsArray', contactsList);
  // }, [contactsList]);

  // const onSubmitHandler = data => {
  //   if (contactsList !== '')
  //     if (contactsList.find(elem => elem.name === data.name)) {
  //       alert(`${data.name} is already existing`);
  //       return false;
  //     }
  //   return true;
  // };

  const findByName = e => {
    console.log(e.target.value);
  };

  // const sortingName = () => {
  //   if (filter === '') {
  //     if (contactsList.length === 0) {
  //       return [];
  //     }
  //     return contactsList;
  //   }
  //   return contactsList.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  // };

  return (
    <div className={AppCss.component}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter find={findByName} />
      <ContactList />
    </div>
  );
};
