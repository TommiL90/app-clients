import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='flex h-screen w-screen flex-col bg-gradient-to-r from-purple-700 to-purple-900'>
        <div className='container mx-auto flex h-full flex-col items-center justify-center '>
          <div className='flex h-3/4 w-2/3 flex-col items-center justify-center text-white'>
            <h1 className='mb-5 text-center text-6xl font-bold'>olá! Tudo bem por aí?</h1>
            <p className='mb-5 text-center text-lg'>
              Bem vindo ao <span className='font-bold'>Sistema de Cadastro</span> e gerenciamentos
              de clientes.
            </p>
            <Link href='/home'>
              <button className='mb-1 mr-1 rounded border border-purple-500 px-12 py-8 text-sm font-bold uppercase text-purple-50 outline-none transition-all duration-150 ease-linear hover:bg-purple-900 hover:text-white focus:outline-none active:bg-purple-700'>
                Vamos lá!
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
