const Joi = require("joi");

const validateUserSchema = Joi.object({
  _id: Joi.string().min(1).max(24).optional(),
  name: Joi.string().min(1).max(50).required().label("Name"),
});

module.exports = validateUserSchema;
