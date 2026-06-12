import React, { useState } from 'react'

const LandingPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            onLogin(email)
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        if (name && email && password) {
            alert('Account created successfully!')
            setName('')
            setEmail('')
            setPassword('')
            setIsLogin(true)
        }
    }

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box'
    }

    const buttonStyle = {
        padding: '8px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Alok Portfolio</h1>

            <div style={{ display: 'inline-block', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
                {/* Toggle Buttons */}
                <div style={{ marginBottom: '20px' }}>
                    <button
                        onClick={() => setIsLogin(true)}
                        style={{
                            ...buttonStyle,
                            backgroundColor: isLogin ? '#007bff' : '#ccc',
                            color: 'white'
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        style={{
                            ...buttonStyle,
                            backgroundColor: !isLogin ? '#28a745' : '#ccc',
                            color: 'white'
                        }}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Login Form */}
                {isLogin ? (
                    <form onSubmit={handleLogin}>
                        <h3>Login</h3>
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                        <button type='submit' style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white', width: '100%' }}>
                            Login
                        </button>
                    </form>
                ) : (
                    /* Sign Up Form */
                    <form onSubmit={handleSignUp}>
                        <h3>Sign Up</h3>
                        <input
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                        <button type='submit' style={{ ...buttonStyle, backgroundColor: '#28a745', color: 'white', width: '100%' }}>
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default LandingPage