'use client'

interface ButtonsProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  children: React.ReactNode
}
export const ButtonPrimary = ({ type, children, onClick }: ButtonsProps) => {
  return (
    <button
      type={type ? type : 'button'}
      className='mb-1 mr-1 rounded bg-purple-800 px-6 py-3 text-sm font-bold uppercase text-purple-50 shadow outline-none transition-all duration-150 ease-linear hover:bg-purple-900 hover:shadow-lg focus:outline-none active:bg-purple-700'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const ButtonSecondary = ({ type, children, onClick }: ButtonsProps) => {
  return (
    <button
      type={type ? type : 'button'}
      className='mb-1 mr-1 rounded border border-purple-800 px-6 py-3 text-sm font-bold uppercase text-purple-800 outline-none transition-all duration-150 ease-linear hover:bg-purple-900 hover:text-white focus:outline-none active:bg-purple-700'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
