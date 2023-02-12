import React, { Component } from "react";
import styled from "styled-components";
//import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

const StyledForm = styled.form`
border: 1px solid black;
padding: 10px 5px 10px 5px;
width: 300px;
`
const StyledLabel = styled.label`
display: flex;
flex-direction: column;
`

const StyledInput = styled.input`
margin-top: 5px;
width: 200px;
`
const StyledButton = styled.button`
margin-top: 25px;
width: 100px;
background-color: white;
border: 1px solid rgb(148, 146, 146);
border-radius: 3px;
`
const INITIAL_STATE = {
    name: "",
}
export class Phonebook extends Component {
    state = { ...INITIAL_STATE };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        this.props.handleSubmit({ ...this.state });
        console.log(this.state)
        this.reset();
        form.reset();
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        const id = nanoid();
        this.setState({ [name]: value, id })
    }

    reset = () => {
        this.setState({ ...INITIAL_STATE })
    };

    render() {
        const { name } = this.state
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledLabel>
                    Name
                    <StyledInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    /></StyledLabel>
                <StyledButton
                    type="submit">
                    Add contact</StyledButton>

            </StyledForm>
        )
    }
}

// Phonebook.propTypes = {
//     onChange: PropTypes.func,
//     onClick: PropTypes.func
// }