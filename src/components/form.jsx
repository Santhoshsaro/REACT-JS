import React, { useState } from 'react'
import"./form.css";

export default function form() 

{
    const [Form,SetForm] = useState
    (
        {
     name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    password: ""
        }
    );
    const [submittedData, setSubmittedData] = useState(null);

    const handlechange =(e)=>
    {
        SetForm
        (
            {
                ...Form,[e.target.name]: e.target.value
            }
        )
    }
   const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !Form.name ||
    !Form.email ||
    !Form.phone ||
    !Form.age ||
    !Form.gender ||
    !Form.city ||
    !Form.address ||
    !Form.password
  ) {
    alert("Please fill the all fields");
    return;
  }
  setSubmittedData(Form);
};
const handleReset = () => {
  SetForm(
    {
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    password: ""
  });

  setSubmittedData(null);
};
  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
           {submittedData && (
  <div>
    <h2>Submitted Data</h2>

    <p>Name: {submittedData.name}</p>
    <p>Email: {submittedData.email}</p>
    <p>Phone: {submittedData.phone}</p>
    <p>Age: {submittedData.age}</p>
    <p>Gender: {submittedData.gender}</p>
    <p>City: {submittedData.city}</p>
    <p>Address: {submittedData.address}</p>
    <p>Password: {submittedData.password}</p>
  </div>
)}
        <label>Name</label>
<input
  type="text"
  name="name"
  value={Form.name}
  onChange={handlechange}
/>

<label>Email</label>
<input
  type="email"
  name="email"
  value={Form.email}
  onChange={handlechange}
/>

<label>Phone Number</label>
<input
  type="tel"
  name="phone"
  value={Form.phone}
  onChange={handlechange}
/>

<label>Age</label>
<input
  type="number"
  name="age"
  value={Form.age}
  onChange={handlechange}
/>

<label>Gender</label>
<select
  name="gender"
  value={Form.gender}
  onChange={handlechange}
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

<label>City</label>
<select
  name="city"
  value={Form.city}
  onChange={handlechange}
>
  <option value="">Select City</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Chennai">Chennai</option>
  <option value="Madurai">Madurai</option>
</select>

<label>Address</label>
<textarea
  name="address"
  value={Form.address}
  onChange={handlechange}
></textarea>

<label>Password</label>
<input
  type="password"
  name="password"
  value={Form.password}
  onChange={handlechange}
/>
<button type='submit'>SUBMIT</button>
<button type='button' onClick={handleReset}>RESET</button>
</form>
    </div>
  )
}
