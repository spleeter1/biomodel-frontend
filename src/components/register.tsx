import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/register/',
                {
                    password: password,
                    username: username,
                }
            );
            alert('successfully');
            console.log(
                response.headers,
                response.data,
                response.request,
                response.status
            );
        } catch (error) {
            alert(error);
            setUsername('');
            setPassword('');
        }
    };
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                zIndex: '99',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form
                id="register-form"
                onSubmit={handleRegister}
                style={{
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    gap: '30px',
                    padding: '50px 50px 50px 50px',
                    borderRadius: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '30px',
                        color: 'rgb(0,0,0,0.5)',
                        alignSelf: 'center',
                        fontFamily: 'sans-serif',
                    }}
                >
                    Register
                </Typography>
                <div>
                    <TextField
                        label="username"
                        variant="outlined"
                        type="text"
                        sx={{}}
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                    ></TextField>
                </div>
                <div>
                    {' '}
                    <TextField
                        label="password"
                        variant="outlined"
                        type="password"
                        value={password}
                        sx={{}}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    sx={{
                        background:
                            'linear-gradient(to right, #891731, #133f6e)',
                        color: 'white',
                        width: '100%',
                    }}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default Register;
