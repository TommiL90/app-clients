/* eslint-disable react/no-unknown-property */
'use client'

import { loginFormSchema, tLoginFormSchema } from '@/schemas'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { Context } from '@/contexts/provider'
import Link from 'next/link'
import { Input } from '@/components/Input'
import Spinner from '@/components/Spinner'
import { ToastError } from '@/components/Toast'

const LoginPage = () => {
    const { loading, loginUser, openToastError, setOpenToastError } = useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const submit: SubmitHandler<tLoginFormSchema> = async (formData) => {
    console.log(formData)
    await loginUser(formData)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-purple-700 to-purple-900 p-24 text-white'>
      <div className='rounded bg-white p-6'>
        <div className='relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none '>
          <h4 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            Acesse
          </h4>
          <p className='mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
            Insira seu email e senha para continuar.
          </p>
          <form className='mb-2 mt-8 w-80 max-w-screen-lg sm:w-96' onSubmit={handleSubmit(submit)}>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                label='Email'
                type='email'
                disabled={loading}
                {...register('email')}
                error={errors.email}
              />
              <Input
                label='Password'
                type='password'
                disabled={loading}
                {...register('password')}
                error={errors.password}
              />
            </div>
            <div className='inline-flex items-center'>
              <label
                className='relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3'
                htmlFor='checkbox'
                data-ripple-dark='true'
              >
                <input
                  type='checkbox'
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  id='checkbox'
                />
                <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-width='1'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className='mt-px cursor-pointer select-none font-light text-gray-700'
                htmlFor='checkbox'
              >
                <p className='flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased'>
                  Manter a sua conta ativa.
                </p>
              </label>
            </div>
            <button
              className='mt-6 block w-full select-none rounded-lg bg-purple-700 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='submit'
              data-ripple-light='true'
            >
              {loading ? <Spinner /> : 'Entrar'}
            </button>
            <p className='mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
              Ainda não posui uma conta com a gente ?
              <Link
                className='pl-2 font-medium text-purple-800 transition-colors hover:text-purple-500'
                href='/register'
              >
                Cadastrese
              </Link>
            </p>
          </form>
        </div>
      </div>
      {openToastError && (
        <ToastError
          message='Algum erro aconteceu, tente novamente daqui a pouco'
          openToast={openToastError}
          setOpenToast={setOpenToastError}
        />
      )}
    </main>
  )
}

export default LoginPage
