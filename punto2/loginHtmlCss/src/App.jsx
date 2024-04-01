import './App.css';

function App() {
  return (
    <div className='w-screen h-screen flex'>
      <div className='h-full w-[40vw] flex justify-end items-center bg-containerLogin overflow-hidden'>
        <div className='w-full sm:w-[20vw] h-[80vh] shadow-max flex flex-col justify-center items-center box-border p-2'>
          <img className='max-w-[62%] mb-4' src='/apple.png' alt='logo' />
          <p className='text-start font-medium'>India's first waterless <br></br> car cleaning company</p>
        </div>
      </div>

      <div className='h-full w-[60vw] flex justify-start items-center overflow-hidden'>
        <div className='w-full sm:w-[40vw] h-[80vh] shadow-max flex flex-col justify-start items-center'>
          <div className='w-full flex justify-end box-border py-2 px-8 font-medium'>
            Need help?
          </div>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <span className='font-bold mb-4'>Log in</span>
            <div className='w-2/3'>
              <div className='w-full flex flex-col items-start mt-4'>
                <label className='font-medium'>Email</label>
                <input className='w-full p-2 border rounded-lg border-gray-200' placeholder='joe@gmail.com' type='email' />
              </div>
              <div className='w-full flex flex-col items-start mt-4'>
                <label className='font-medium'>Password</label>
                <input className='w-full p-2 border rounded-lg border-gray-200' placeholder='Enter your password' type='password' />
              </div>
              <div className='w-full flex justify-end font-medium text-end'>
                Forgot password?
              </div>
              <button className='w-full p-2 rounded-lg bg-containerLogin font-medium mt-12'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
