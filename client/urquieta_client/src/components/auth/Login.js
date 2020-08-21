import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import './auth.css'
import Assets from '../../assets/Assets'
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); 
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    };

    render() {
    const { errors } = this.state;
    
    return (
        <div className="limiter">
		<div className="container-login">
			<div className="wrap-login">
        <form noValidate 
              onSubmit={this.onSubmit} 
              className="login-form validate-form">
          <span className="logo">
            <img src={Assets.authImgs.avatar} 
                 alt="logo" 
                 className="avatar"/>
					</span>
          <span className="login-form-title">
						Bienvenido
					</span>

					<div className="wrap-input validate-input" data-validate = "Enter username">
            <input 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  className={classnames("input", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                  type="email"
                  placeholder="Email" />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
					</div>

					<div className="wrap-input validate-input m-b-50" data-validate="Enter password">
            <input 
                   placeholder="Password"
                   className={classnames("input", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                   type="password" 
                   id="password"
                   onChange={this.onChange}
                   value={this.state.password}
                   error={errors.password} />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
					</div>

					<div className="container-login-form-btn">
						<button className="login-form-btn" type="submit">
							Login
						</button>
					</div>

					<ul className="login-more">
						<li>
							<p className="txt2">
              ¿Aún no tienes cuenta? <Link to='/register'>Regístrate aquí</Link>
							</p>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
    );
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);