import React, { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        alert("Sign Up Successful!");

        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div
            style={{
                width: "400px",
                margin: "20px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2>Sign Up</h2>

            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;