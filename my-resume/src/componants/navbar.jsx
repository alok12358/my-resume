import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ userEmail, onLogout }) => {
    const navigate = useNavigate()

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#333', color: 'white' }}>
            <h2 style={{ margin: 0 }}>Alok Portfolio</h2>
            <div>
                <span>{userEmail}</span>
                <button
                    onClick={() => {
                        onLogout()
                        navigate('/')
                    }}
                    style={{ marginLeft: '20px', padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar