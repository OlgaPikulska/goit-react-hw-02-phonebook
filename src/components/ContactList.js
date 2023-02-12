import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filterValue }) => {
    return (
        <ul>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
                .map(contact => (
                    <li key={contact.id}>
                        {contact.name}: {contact.number}
                    </li>
                ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filterValue: PropTypes.string,
}
