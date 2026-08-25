import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Contact } from "../types/Contact";

//interfcae for adding contact with void datatype
interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}


//initially name, phone, label will be blank
function ContactForm({ onAddContact }: ContactFormProps) {
  const [person, setPerson] = useState({
    name: "",
    phone: "",
    label: "",
  });


  //gets the name value from the user input
  /*
  e: ChangeEvent<HTMLInputElement> means 
  the e parameter is something a change event caused by the user input 

...person means update the person state whole

name : e.target.value means replace whatever was there previously

  */
  function Name(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
//e.target means which element caused this event
  function Phone(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      phone: e.target.value,
    });
  }
//here it is SelectElement coz we are selecting an optioon from a list
  function Label(e: ChangeEvent<HTMLSelectElement>) {
    setPerson({
      ...person,
      label: e.target.value,
    });
  }


  //submit button

  //preventDefault() means no page reload when form is submitted

  //id: Date.now() means it gived the id of current millisecond
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddContact({ id: Date.now(), ...person });
    setPerson({ name: "", phone: "", label: "" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={person.name}
          onChange={Name}
          placeholder="e.g. Niveditha D"
          required
        />
      </label>

      <label>
        Phone:
        <input
          type="text"
          value={person.phone}
          onChange={Phone}
          placeholder="e.g. 9876543210"
          required
        />
      </label>

      <label>
        Label:
        <select value={person.label} onChange={Label} required>
          <option value="">Select Label</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Business">Business</option>
          <option value="Work">Work</option>
        </select>
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;