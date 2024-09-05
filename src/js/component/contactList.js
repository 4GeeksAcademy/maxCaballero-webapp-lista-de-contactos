import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import ContactCard from '../components/ContactCard';

const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            {store.contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onDelete={actions.deleteContact} />
            ))}
        </div>
    );
};

export default Contact;
