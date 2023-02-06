import React, { Component } from "react";
import { Phonebook } from "./Phonebook";
import { Section } from "./Section";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook />
        </Section>
      </>
    );
  }

};
