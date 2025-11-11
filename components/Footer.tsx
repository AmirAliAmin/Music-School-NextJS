import React from 'react'

function Footer() {
  return (
    <div className='bg-black mt-10 pt-2 pb-10 px-2'>
    <div className=' grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <div>
            <h1 className='font-bold mb-2'>About Us</h1>
            <p className='text-xs pr-10 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae pariatur ipsam iusto nam suscipit. Harum neque architecto quasi libero, corrupti</p>
        </div>
        <div>
            <h1 className='font-bold mb-2'>Quick Links</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-1'>
                <li className='cursor-pointer hover:underline'>Home</li>
                <li className='cursor-pointer hover:underline'>About</li>
                <li className='cursor-pointer hover:underline'>Courses</li>
                <li className='cursor-pointer hover:underline'>Contact</li>
            </ul>

        </div>
        <div>
            <h1 className='font-bold mb-2'>Follow Us</h1>
            <ul className='flex gap-5 text-sm text-gray-500'>
                <li className='cursor-pointer hover:underline'>Facebook</li>
                <li className='cursor-pointer hover:underline'>Twitter</li>
                <li className='cursor-pointer hover:underline'>Instagram</li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold mb-2'>Contact Us</h1>
            <ul className='flex flex-col text-sm gap-1 text-gray-500'>
                <li className='cursor-pointer hover:underline'>Lahore,Pakistan</li>
                <li className='cursor-pointer hover:underline'>Email:aliaminamir77@gmail.com</li>
                <li className='cursor-pointer hover:underline'>Phone: +92326-1971792</li>
            </ul>
        </div>
    </div>
        <p className='text-gray-500 text-sm mt-10 text-center'>© 2025 Music School, All rights reserved</p>
    </div>
  )
}

export default Footer