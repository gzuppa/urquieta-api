const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
// Se convierten los campos vacios en strings vacios para utilizar el validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Validaciones de datos
  if (Validator.isEmpty(data.name)) {
    errors.name = "Se requiere ingresar un nombre";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Se requiere ingresar un email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "El email es inválido";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Es requerido colocar un password";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Favor de confirmar el password";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "El password debe tener un mínimo de 6 caracteres";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Los passwords deben coincidir";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};