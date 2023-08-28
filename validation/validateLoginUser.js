const Joi = require("joi");

const validateUserSchema = Joi.object({
  email: Joi.string().email().min(5).max(255),
  password: Joi.string().min(5).max(255).required(),
});

module.exports = validateUserSchema;
