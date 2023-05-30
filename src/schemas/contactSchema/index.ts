import { z } from 'zod'

export const registerContactFormSchema = z.object({
  name: z
    .string()
    .min(3, 'O nome é obrigatório e precisa conter pelo menos 3 caracteres.')
    .nonempty('O nome é obrigatário'),
  email: z.string().nonempty('O e-mail é obrigatório').email('Forneça um e-mail válido'),
  phone: z
    .string()
    .length(10, 'O número precisa conter 10 caracteres')
    .nonempty('O némero de telefone é obrigatário'),
  phoneAlt: z.string().length(10, 'O número precisa conter 10 caracteres').optional(),
})

export const updateContactFormSchema = registerContactFormSchema

export type tRegisterContactFormSchema = z.infer<typeof registerContactFormSchema>

export type tUpdateContactFormSchema = z.infer<typeof updateContactFormSchema>
