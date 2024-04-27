
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
    <section className='bg-white '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <div className=' w-[550px]'>
            <img className='w-full' src="https://i.ibb.co/JrPZpJz/404-removebg-preview.png" alt="" />
          </div>
          <h1 className=' text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
          

          <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button
              onClick={() => navigate('/')}
              className='flex items-center bg-blue-400 justify-center w-1/2 px-4 py-3 rounded-xl text-sm text-white transition-colors duration-200 border  gap-x-2 sm:w-auto   hover:bg-blue-300 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180 text-primary'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Back To Home</span>
            </button>

            
          </div>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;