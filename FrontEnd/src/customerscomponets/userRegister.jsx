import React, { useState } from "react";

const Register = () => {
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
    <section>
        Register Form For Customer
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label htmlFor="idNumber">ID Number:</label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <button type="submit">Submit</button>
      </form>

      <p>Already signed up? <a href="#">Sign in here</a>.</p>
    </section>
  );
};

export default Register;
