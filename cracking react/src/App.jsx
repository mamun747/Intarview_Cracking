import './App.css'
import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Search from './components/Search';


function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Management App</h1>
      <Search setSearchQuery={setSearchQuery} />
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={filteredContacts}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;