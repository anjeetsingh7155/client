import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('consumer'); // Default to consumer

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                name,
                email,
                password,
                userType,
            });
            alert('Registration Successful');
            console.log(response.data);
        } catch (err) {
            console.error(err);
            alert('Registration Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="consumer">Consumer</option>
                <option value="worker">Worker</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
