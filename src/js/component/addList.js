import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const AddContact = ({ contact }) => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState(contact || { full_name: '', email: '', phone: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        //     <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Nombre" />
        //     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        //     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />
        //     <button type="submit">Guardar</button>
        // </form>
        <form class="row g-3">
            <div class="col-md-12">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
            </div>
            <div class="col-md-12">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
            </div>
            <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">Username</label>
                <div class="input-group">
                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationDefault03" class="form-label">City</label>
                <input type="text" class="form-control" id="validationDefault03" required>
            </div>
            <div class="col-md-3">
                <label for="validationDefault04" class="form-label">State</label>
                <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="validationDefault05" class="form-label">Zip</label>
                <input type="text" class="form-control" id="validationDefault05" required>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
};

export default AddContact;
