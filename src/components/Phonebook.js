import React, { Component } from "react";
import styled from "styled-components";
//import PropTypes from 'prop-types';

const StyledForm = styled.form`
border: 1px solid black;
display: flex;
flex-direction: column;
width: 500px
`
export class Phonebook extends Component {
    render() {
        return (
            <StyledForm>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
            </StyledForm>
        )
    }
}