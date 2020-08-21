import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import Assets from '../../assets/Assets'
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
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
						Registro
					</span>
                    <p className="txt4">
                        ¿Ya tienes una cuenta? <Link to="/login">Ingresa aqui</Link>
                    </p>

		<div className="wrap-input validate-input">
            <input 
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  className={classnames("input", { invalid: errors.name })}
                  type="text"
                  placeholder="Nombre" />
                <span className="red-text">
                  {errors.name}
                </span>
		</div>

		<div className="wrap-input validate-input">
            <input 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  className={classnames("input", { invalid: errors.email })}
                  type="email"
                  placeholder="Email" />
                <span className="red-text">
                  {errors.email}
                </span>
		</div>

        <div className="wrap-input validate-input">
            <input 
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  className={classnames("input", { invalid: errors.password })}
                  type="password"
                  placeholder="Password" />
                <span className="red-text">
                  {errors.name}
                </span>
		</div>

        <div className="wrap-input validate-input">
            <input 
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  className={classnames("input", { invalid: errors.password2 })}
                  type="password"
                  placeholder="Confirma tu password" />
                <span className="red-text">
                  {errors.password2}
                </span>
		</div>

		<div className="container-login-form-btn">
			<button className="login-form-btn" type="submit">
				Registro
			</button>
		</div>

        <div>
            <Link to="/" className="btn-flat waves-effect">
              <span className="txt3">Volver al inicio</span>
            </Link>
        </div>
				</form>
			</div>
		</div>
	</div>
    );
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));
