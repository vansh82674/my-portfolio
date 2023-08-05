import React from 'react'

const About = () => {
  return (
    <div id="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8 mt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p className='text-xl mt-14'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit dignissimos consequatur placeat obcaecati nesciunt minus aliquam facere doloremque, iste ut quo corporis quibusdam fuga, delectus adipisci cupiditate libero! Hic doloremque perferendis dolor expedita voluptatibus repudiandae. Vero ipsa excepturi nisi atque, magni labore sapiente earum sit in molestias aperiam placeat?
            </p>

            <br />

            <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corporis ipsum error praesentium saepe repudiandae. Debitis aliquam rerum quidem consequatur et facere molestias ea, fugit quo adipisci molestiae beatae quas?</p>
        </div>
    </div>
  )
}

export default About