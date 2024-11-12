function ContactList({ contacts, editContact, deleteContact }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.phone} - {contact.email}</span>
            <button onClick={() => editContact(contact.id, { ...contact, name: "Updated Name" })}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;