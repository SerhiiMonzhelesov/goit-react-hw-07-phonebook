import StyledContacts from './StyledContacts';
import { ImBin } from 'react-icons/im';
import PropTypes from 'prop-types';

function Contacts({ contacts, onRemoveContact }) {
  return (
    <StyledContacts>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li key={id} className="item">
            <p className="text">{name}</p>
            <p>{phone}</p>
            <button
              type="button"
              onClick={() => onRemoveContact(id)}
              className="btn"
            >
              <ImBin className="icon" />
            </button>
          </li>
        );
      })}
    </StyledContacts>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
