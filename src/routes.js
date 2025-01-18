import AuthController from './Controllers/AuthController.js'
import SendMessage from "./Controllers/SendMessage.js";

const routes = [
  {
    method: 'POST',
    path: '/auth/signup',
    handler: AuthController
  }, {
  method: "GET",
    path: "/send/message",
    handler: SendMessage
  }
]

export default routes