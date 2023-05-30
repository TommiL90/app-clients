import * as z from 'zod'

export const loginFormSchemaxxx = z.object({
  email: z.string().email('Precisa um Email cadastrado').nonempty('Campo obrigatório'),
  password: z.string().nonempty('Campo obrigatório'),
})

export type TLoginFormSchemaxxx = z.infer<typeof loginFormSchemaxxx>
