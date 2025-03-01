import {Register, GetUserById, DeleteUserById, UpdateUserById, Login} from './Controllers/AuthController.js'
import {SignUpSchema} from "./schemas/SignUpSchema.js";
import {LoginSchema} from "./schemas/LoginSchema.js";

const routes = [
  {
    method: 'POST',
    path: '/auth/signup',
    schema: SignUpSchema,
    handler: Register
  },

  {
    method: 'POST',
    path: '/auth/login',
    schema: LoginSchema,
    handler: Login
  },
]

export default routes
