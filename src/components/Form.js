import React, { useState } from "react";

const Form = ({ sendOrder , order , closeForm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    const user = { name, phone, address , order };
    sendOrder(user);
    closeForm();
  };

  return (
    <div className="Form">
      <h3 className='text-info'>Форма заказа</h3>
      <form onSubmit={event => submitHandler(event)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter email"
            value={name}
            onChange={e => setName(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-warning btn-block" onClick={closeForm}>
          Close
        </button>
      </form>

    </div>
  );
};

export default Form;
