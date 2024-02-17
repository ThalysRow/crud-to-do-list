import joi from "joi";

export const schemaNewUser = joi.object({
  name: joi
    .string()
    .required()
    .min(5)
    .max(30)
    .custom((name, helpers) => {
      if (name.trim() === "") {
        return helpers.message({ message: "Format invalid" });
      }
    })
    .messages({
      "string.empty": "The name field cannot be empty",
      "any.required": "The name field is required",
      "string.min": "The name must have at least 5 characters",
      "string.max": "The name must have a maximum of 30 characters",
      "string.base": "The name field must receive a string",
      custom: "Name format invalid",
    }),

  email: joi.string().required().email().messages({
    "any.required": "The email field is required",
    "string.empty": "The email field cannot be empty",
    "string.base": "The email field must receive a string",
    "string.email": "The email format is invalid",
  }),

  password: joi
    .string()
    .required()
    .min(8)
    .max(30)
    .custom((pass, helpers) => {
      if (pass.trim() === "") {
        return helpers.message({ message: "Password format invalid" });
      }
    })
    .messages({
      "any.required": "The password field is required",
      "string.empty": "The password field cannot be empty",
      "string.min": "The password must have at least 8 characters",
      "string.max": "must have a maximum of 30 characters",
      custom: "Password format invalid",
    }),
});

export const scheamaLoginUser = joi.object({
  email: joi.string().required().email().messages({
    "any.required": "The email field is required",
    "string.empty": "The email field cannot be empty",
    "string.base": "The email field must receive a string",
    "string.email": "The email format is invalid",
  }),

  password: joi
    .string()
    .required()
    .min(8)
    .max(30)
    .custom((pass, helpers) => {
      if (pass.trim() === "") {
        return helpers.message({ message: "Password format invalid" });
      }
    })
    .messages({
      "any.required": "The password field is required",
      "string.empty": "The password field cannot be empty",
      "string.min": "The password must have at least 8 characters",
      "string.max": "must have a maximum of 30 characters",
      custom: "Password format invalid",
    }),
});
