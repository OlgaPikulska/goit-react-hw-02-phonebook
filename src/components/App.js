import React, { Component } from "react";
import { Phonebook } from "./Phonebook";
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

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    contacts.push(newContact);
    this.setState({ contacts: contacts })
  }

  addFilterValue = (e) => {
    this.setState({ filter: e.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Section title="Phonebook">
          <Phonebook handleSubmit={this.addNewContact} />
        </Section>
        <Section title="Contacts" >
          <Filter addFilterValue={this.addFilterValue} />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }

};
