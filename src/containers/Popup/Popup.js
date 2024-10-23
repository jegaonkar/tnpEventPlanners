import React, { useState } from 'react';
import "./Popup.css";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Close</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="input1">Input 1:</label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="input2">Input 2:</label>
            <input
              type="text"
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="input3">Input 3:</label>
            <input
              type="text"
              id="input3"
              name="input3"
              value={formData.input3}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
