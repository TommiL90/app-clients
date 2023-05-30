/* eslint-disable react/display-name */
'use client'

import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
}

export const InputAlt = forwardRef(
  ({ label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className='mb-3'>
      {label ? (
        <label htmlFor={label} className='mb-3 block text-sm font-medium text-purple-700'>
          {label}
        </label>
      ) : null}
      <input
        placeholder='Placeholder'
        className=' h-full w-full rounded-[7px] border border-purple-700 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-700  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
        ref={ref}
        {...rest}
      />
      {error ? <p className='text mt-2 text-xs'>{error.message}</p> : null}
    </div>
  ),
)

export const Input = forwardRef(
  ({ label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className='relative h-11 w-full min-w-[200px]'>
      <input
        className='peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-purple-50'
        placeholder=' '
        ref={ref}
        {...rest}
      />
      {label ? (
        <label
          htmlFor={label}
          className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-700 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-purple-700  peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-purple-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          {label}
        </label>
      ) : null}
      {error ? <p className='text text-xs text-red-700'>{error.message}</p> : null}
    </div>
  ),
)
