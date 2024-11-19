import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    selectOption: '',
    number: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: '',
    selectOption: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Agree checkbox
    if (!formData.agree) {
      newErrors.agree = 'You must agree to the terms and conditions';
    }

    // Select Option
    if (!formData.selectOption) {
      newErrors.selectOption = 'Please select an option';
    }

    // Number
    if (!formData.number || isNaN(formData.number)) {
      newErrors.number = 'Please enter a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted successfully!', formData);
      // Proceed with form submission logic (e.g., send data to API)
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        {errors.agree && <span>{errors.agree}</span>}
      </div>

      <div>
        <label>Select an option:</label>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {errors.selectOption && <span>{errors.selectOption}</span>}
      </div>

      <div>
        <label>Number:</label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        {errors.number && <span>{errors.number}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
