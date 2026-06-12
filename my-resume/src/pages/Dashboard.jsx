import Resume from "../assets/Alok_Resume.pdf";
import React from 'react'
import SignUp from "../componants/SignUp"

function Dashboard() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome Alok</h1>

            <div style={{ marginBottom: '20px' }}>
                <a href={Resume} download>
                    <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Download Resume
                    </button>
                </a>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', height: '800px', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden', marginBottom: '40px' }}>
                <iframe src={Resume} width="100%" height="100%" style={{ border: 'none' }} title="Resume" />
            </div>

            <div style={{ borderTop: '2px solid #ddd', paddingTop: '30px', maxWidth: '500px', margin: '0 auto' }}>
                <h2>Add New Users</h2>
                <SignUp />
            </div>
        </div>
    )
}

export default Dashboard