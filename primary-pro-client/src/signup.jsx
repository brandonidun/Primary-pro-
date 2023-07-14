import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [retypeEmail, setRetypeEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleRetypeEmailChange = (e) => {
      setRetypeEmail(e.target.value);
    };
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleDateOfBirthChange = (e) => {
      setDateOfBirth(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform sign-up logic here using form values
      console.log('Sign-up successful!');
    };
  

  return (
    <div className='sign-up-page'>
      <div className="signup-header">
        <h1>PrimaryPro</h1>
      </div>
      
      <div className="sign-up-container">
        <div className='signup-container-writings'>
          <h1>Create Your Account</h1>
        </div>
        <div className="signup-form-div">
        <form id= "sign-up-form"onSubmit={handleSubmit}>
        <div className='signup-email'>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="retypeEmail">Re-type Email Address *</label>
          <input
            type="email"
            id="retypeEmail"
            value={retypeEmail}
            onChange={handleRetypeEmailChange}
          />
        </div>
        <div className='signup-username'>
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        
        <div>
          <label htmlFor="firstName">Legal First/Given Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last/Family/Surname:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className='phone'>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
          ></textarea>
        </div>
        <div className="sign-up-button">
            <button type="submit">Sign Up</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;