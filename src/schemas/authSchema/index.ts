import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Precisa um Email cadastrado').nonempty('Campo obrigatório'),
  password: z.string().nonempty('Campo obrigatório'),
})

export type TLoginFormSchema = z.infer<typeof loginFormSchema>
