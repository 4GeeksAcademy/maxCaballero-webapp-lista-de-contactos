import React from 'react';

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div>
      {/* <h3>{contact.full_name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => onDelete(contact.id)}>Eliminar</button> */
        <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0">
            <div className="col-md-3">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-full_name">{contact.full_name}</h5>
                <p className="card-address"><i class="fa-solid fa-location-dot"></i> {contact.address}</p>
                <p className="card-email"><i class="fa-solid fa-envelope"></i> {contact.email}</p>
                <p className="card-phone"><i class="fa-solid fa-phone"></i>{contact.phone}</p>
              </div>
            </div>
            <div className="col-md-3">
              <button onClick={() => onEdit(contact.id)}><i class="fa-sharp fa-solid fa-pencil"></i></button>
              <button onClick={() => onDelete(contact.id)}><i class="fa-solid fa-trash-can"></i></button>

            </div>
          </div>
        </div>}
    </div>
  );
};

export default ContactCard;
