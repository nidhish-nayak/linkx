import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const defaultFormFields = {
    username: "",
    email: "",
    password: "",
    name: "",
};

const Register = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, name } = formFields;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const registerUserHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const API_URL = "http://localhost:3000";

        try {
            const response = await axios.post(`${API_URL}/api/auth/register`, {
                username: username,
                email: email,
                password: password,
                name: name,
            });
            console.log(response.data);
            alert("User signup complete! - " + response.status);
        } catch (error) {
            console.log(error);
            alert("User signup failed! - " + error);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <div className="left-heading">
                        <h1>LinkX.</h1>
                        <p>
                            Welcome to our vibrant social media community, where
                            meaningful connections thrive. Immerse yourself in a
                            world of shared experiences, as our platform
                            seamlessly brings together like minded individuals.
                        </p>
                    </div>
                    <div className="left-register">
                        <span>Already have an account ?</span>
                        <Link
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "min-content",
                            }}
                        >
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Don't have an account ?</h2>
                        <p>Register with your email and password</p>
                    </div>
                    <form onSubmit={registerUserHandler}>
                        <input
                            onChange={changeHandler}
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                        />
                        <input
                            onChange={changeHandler}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={changeHandler}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <input
                            onChange={changeHandler}
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
