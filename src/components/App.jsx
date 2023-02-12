import React, { Component } from "react";
import { Phonebook } from "./Phonebook";
import { Section } from "./Section";
import { ContactList } from "./ContactList";
export { ContactList } from "./ContactList"

export class App extends Component {

  state = {
    contacts: [],
    //name: ''
  }

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    contacts.push(newContact);
    this.setState({ contacts: contacts })
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook handleSubmit={this.addNewContact} />
        </Section>
        <Section title="Contacts" >
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }

};
