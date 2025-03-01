const loginJsonSchema = {
    type : 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        }
    }
}

export const LoginSchema = {
    body: loginJsonSchema
}