import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/8ebfe2df-7150-44a2-ae51-c0215ca6b6af" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="email" name="email" placeholder='Enter your Email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" rows="10" placeholder='Enter your message...'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                    Let's Talk
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact