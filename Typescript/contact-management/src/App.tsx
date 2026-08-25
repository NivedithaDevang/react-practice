import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import type { Contact } from "./types/Contact";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  function addContact(contact: Contact) {
    setContacts((currentContacts) => [...currentContacts, contact]);
  }

  function deleteContact(id: number) {
    setContacts((currentContacts) => currentContacts.filter((contact) => contact.id !== id));
  }

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <h1>Contact management</h1>
        </div>
      </header>

      <section className="panel" aria-labelledby="add-contact-heading">
        <h2 id="add-contact-heading">Add a contact</h2>
        <ContactForm onAddContact={addContact} />
      </section>

      <section className="contacts-section" aria-labelledby="contacts-heading">
        <div className="section-heading">
          <div>
            <h2 id="contacts-heading">All contacts</h2>
          </div>
        </div>
        <ContactTable contacts={contacts} onDeleteContact={deleteContact} />
      </section>
    </main>
  );
}




export default App;