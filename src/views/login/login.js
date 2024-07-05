import React from "react";
import "./login.scss";
import axios from "axios";
import { push } from "firebase/database";
import { adminLoginFailure, adminLoginSuccess } from "../../store/action/adminAction";
// import { response } from "express";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errMsg: "",
        };
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        this.setState({
            errMsg: "",
        });
        try {
            const response = await axios.post(
                "http://localhost:9999/api/login",
                { email: this.state.username, password: this.state.password } // email và password là biến bên nodejs trong file userController.js
            );
            if (response.data.errCode !== 0) {
                this.setState({ errMsg: response.data.message });
                console.log(response.data.message);
            } else {
                userLoginSuccess(response.data)
                console.log("login successful");
            }
        } catch (error) {
            if (error.response) {
                //response này là phản hồi lỗi từ API, khác với biến response ở trên. nếu có những cái lỗi không thuộc lỗi ở trên thì những lỗi này được sử lí ở block này
                if (error.response.data) {
                    this.setState({ errMsg: error.response.data.message });
                }
            }
            console.log(error.response);
        }
    };

    render() {
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h3>Log in</h3>
                    <div className="input-group0">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleOnChangeUsername}
                            // required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group0">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleOnChangePassword}
                            // required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="options">
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                    </div>
                    <div className="col-12" style={{ color: "red" }}>
                        {this.state.errMsg}
                    </div>
                    <button type="submit" className="login-button">
                        Log in now
                    </button>
                    <div className="options">
                        <a href="#" className="create-account">
                            Create a new account
                        </a>
                    </div>
                    <footer>
                        <a href="#" className="terms">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="privacy">
                            Privacy Policy
                        </a>
                    </footer>
                </form>
            </div>
        );
    }
}

export default Login;

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo))
        adminLoginFailure: () => dispatch(actions.adminLoginFailure())
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)
    };
}

export default connect(null, mapDispatchToProps)(Login);
