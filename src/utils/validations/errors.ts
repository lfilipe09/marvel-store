import Joi from 'joi'

// eslint-disable-next-line no-useless-escape
const CPFValidation = /^\d{3}\d{3}\d{3}\d{2}$/
/*
CPF validation
*/

const EmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
/*
match: anystring@anystring.anystring
and prevent matching multiple @ signs:
*/

const PasswordValidation =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
/*
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/

export const name_schema = Joi.string().min(3).required().messages({
  'string.empty': `Name cannot be empty`,
  'string.min': `Name must be at least 3 digits`,
  'any.required': `The name field is required`
})

export const surname_schema = Joi.string().min(3).required().messages({
  'string.empty': `Last name cannot be empty`,
  'string.min': `Last name must be at least 3 digits long`,
  'any.required': `Last Name field is required`
})

export const cpf_schema = Joi.string()
  .min(11)
  .required()
  .pattern(CPFValidation)
  .messages({
    'string.empty': `CPF cannot be empty`,
    'string.min': `The CPF must have at least 11 digits`,
    'string.pattern.base': 'This is not a valid CPF',
    'any.required': `The CPF field is required`
  })

export const email_schema = Joi.string()
  .min(5)
  .required()
  .pattern(EmailValidation)
  .messages({
    'string.empty': `Email cannot be empty`,
    'string.min': `Email must be at least 5 digits`,
    'string.pattern.base': 'This is not a valid email',
    'any.required': `The email field is required`
  })

export const password_schema = Joi.string()
  .min(8)
  .required()
  .pattern(PasswordValidation)
  .messages({
    'string.empty': `Password cannot be empty`,
    'string.min': `Password must be at least 8 digits long`,
    'string.pattern.base':
      'This is not a valid password. Must be at least: 8 digits, 1 uppercase, 1 lowercase, 1 number, 1 special character',
    'any.required': `The password field is required`
  })
