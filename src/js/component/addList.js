import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const AddContact = ({ contact }) => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState(contact || { full_name: '', email: '', phone: '', address: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.placeholder });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact) {
            actions.updateContact(formData);
        } else {
            actions.createContact({ ...formData, id: Date.now() });
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="full_name" placeholder={formData.full_name} onChange={handleChange} placeholder="Nombre" />
        //     <input type="email" name="email" placeholder={formData.email} onChange={handleChange} placeholder="Email" />
        //     <input type="tel" name="phone" placeholder={formData.phone} onChange={handleChange} placeholder="Teléfono" />
        //     <button type="submit">Guardar</button>
        // </form>

        <div className='col-6 m-auto'>
            <h1 className='titulo-card m-auto'>Add new contact</h1>
            <form className="row g-3">
                <div className="col-md-12 pb-0">
                    <label for="validationDefault01" className="form-label d-flex justify-content-start">Full name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="full name" required />
                </div>
                <div className="col-md-12 pb-0">
                    <label for="validationDefault02" className="form-label d-flex justify-content-start">Email</label>
                    <input type="email" className="form-control" id="validationDefault02" placeholder="Enter Email" required />
                </div>
                <div className="col-md-12 pb-0">
                    <label for="validationDefault03" className="form-label d-flex justify-content-start">Phone</label>
                    <input type="number" className="form-control" id="validationDefault03" placeholder="Enter phone" required />
                </div>
                <div className="col-md-12 pb-0">
                    <label for="validationDefault04" className="form-label d-flex justify-content-start">Address</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="Enter address" required />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Save</button>
                    <a className='link' href='#'>
                        <small className='atajo  d-flex justify-content-start text-primary'>or get back to contacts</small>
                    </a>
                </div>
            </form>
        </div>


    );
};

export default AddContact;
