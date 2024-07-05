import React from "react";
import "./signup.scss";

class Signup extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <form className="signup-form">
                    <h3>Register</h3>
                    <div className="input-group">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="repasswd"
                            name="reasswd"
                            placeholder="Enter the password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Register Now
                    </button>
                    <footer>
                        <p>
                            By clicking Register Now, you agree to the{" "}
                            <a href="#" className="terms">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="privacy">
                                Privacy Policy
                            </a>
                        </p>
                    </footer>
                </form>
            </div>
        );
    }
}

export default Signup;
