import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Precisa um Email cadastrado').nonempty('Campo obrigatório'),
  password: z.string().nonempty('Campo obrigatório'),
})

export type tLoginFormSchema = z.infer<typeof loginFormSchema>

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'O nome é obrigatório e precisa conter pelo menos 3 caracteres.')
      .nonempty('O nome é obrigatário'),
    email: z.string().nonempty('O e-mail é obrigatório').email('Forneça um e-mail válido'),
    password: z
      .string()
      .min(8, 'A senha precisa conter pelo menos 8 caracteres')
      .regex(/(?=.*?[#?!@$%^&*-])/, 'É necessário pelo menos um caracter especial')
      .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula'),
    confirm: z.string().nonempty('É obrigatório confirmar a senha'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'A confirmação de senha precisa corresponder com a senha.',
    path: ['confirm'],
  })

export type tRegisterFormSchema = z.infer<typeof registerFormSchema>
