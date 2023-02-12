import React, { Component } from "react";
import { ContactForm } from "./ContactForm";
import { Section } from "./Section";
import { ContactList } from "./ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter";
//export { ContactList } from "./ContactList"

export class App extends Component {

  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56', id: nanoid(), },
      { name: 'Hermione Kline', number: '443-89-12', id: nanoid(), },
      { name: 'Eden Clements', number: '645-17-79', id: nanoid(), },
      { name: 'Annie Copeland', number: '227-91-26', id: nanoid(), },
    ],
    filter: '',
  }

  checkName = (newContact) => {
    const { contacts } = this.state;
    const isNameOnList = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    return isNameOnList;
  }

  checkNumber = (newContact) => {
    const { contacts } = this.state;
    const isNumberOnList = contacts.some(contact => contact.number === newContact.number)
    return isNumberOnList;
  }

  addNewContact = (newContact) => {
    const isNameOnList = this.checkName(newContact);
    const isNumberOnList = this.checkNumber(newContact);
    const { contacts } = this.state;

    if (isNameOnList) {
      alert(`${newContact.name} is already in contacts`)
    } else if (isNumberOnList) {
      alert(`This number ${newContact.number} is already in contacts`)
    } else {
      contacts.push(newContact);
      this.setState({ contacts: contacts })
    }

  }

  addFilterValue = (e) => {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.addNewContact} />
        </Section>
        <Section title="Contacts" >
          <Filter addFilterValue={this.addFilterValue} />
          <ContactList
            contacts={this.state.contacts}
            filterValue={this.state.filter}
          />
        </Section>
      </>
    );
  }

};
