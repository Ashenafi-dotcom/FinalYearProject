import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    idNumber: "",
    jobTitle: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="customerName">Customer Name:</label>
      <input
        type="text"
        id="customerName"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="idNumber">ID Number:</label>
      <input
        type="text"
        id="idNumber"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="jobTitle">Job Title:</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
