import Spinner from '@/components/Spinner'

const loading = () => {
  return (
    <div className='fixed h-screen w-screen flex justify-center items-center'>
      <div className='absolute left-1/2 top-64 -translate-x-1/2'>
        Loading ... <Spinner />
      </div>
    </div>
  )
}

export default loading
