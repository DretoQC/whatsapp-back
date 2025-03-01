import isEmail from "validator/lib/isEmail.js";
import {findUserById, SignUp, deleteUserById, updateuserbyid, LoginUser} from "../Services/UserService.js";


export  async function Register (req, res)
    {const {email} = req.body
    if (!isEmail(email)) {
      return res.status(400).send({
        message:'Email inválido!'
      })



    }
      const JwtToken = await SignUp(req,res)
      return res.status(200).send({
        message:'Usuário criado com sucesso!',
        data: JwtToken

      })


    }

export async function Login(req, res) {
    const {email} = req.body

    if (!isEmail(email)) {
        return res.status(400).send({
            message: 'Email inválido!'
        })

    }
    const Token = await LoginUser(req, res)
    return res.status(Token ? 200 : 400).send({
        message: Token ? "Usuário autenticado com sucesso": "Usuáio não autenticado",
        data: Token})
}
export async function GetUserById(req, res)
 { const user = await findUserById(req.params.userid)
     console.log(req.params.userId)
     return res.status(user ? 200 : 400).send({
         message: user ? "Usuário encontrado": "Usuário não encontrado",
         data: user})
 }

 export async function DeleteUserById(req,res)
 {const deletedUserById = await deleteUserById(req.params.userid)
     return res.status(deletedUserById.deletedCount ? 200: 400).send({
         message: deletedUserById.deletedCount ? "Usuário deletado": "Usuário não deletado",
      data: deletedUserById})

 }

 export async function UpdateUserById(req, res)
 {const user = await updateuserbyid(req.params.userid, req.body)
     return res.status(200).send({
         message: "Usuário atualizado",
         data: user
     })


 }

