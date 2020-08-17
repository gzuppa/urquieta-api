const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

// Se convierten campos vacios en strings vacios para utilizar el validator
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo email es requerido";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "El email es inválido";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo password es requerido";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};