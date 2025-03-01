

const RequestSignUp = {
    type:"object",
    required: ["name", "password", "email"],
    properties: {
        name:{
            type: "string"
        },
        password: {
            type: "string"
        },
        email: {
            type: "string"
        }
    }
}



export const SignUpSchema = {
    body: RequestSignUp
}

