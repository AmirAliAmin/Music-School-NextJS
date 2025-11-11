"use client"
import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
 

function page() {
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log('Form submitted:');
    }
   
  return (
    <div className='relative z-20 w-full bg-gray-950 flex justify-center items-center pt-30 '>
        <div>
              <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
              <p className="text-gray-300 text-xs md:text-sm text-center max-w-2xl mx-auto leading-relaxed">
            Ready to start your musical journey? Get in touch with our team of expert instructors 
            and discover how we can help you achieve your musical goals.
          </p>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                
                    <input type="text" placeholder='Your Email adress' className='w-full px-4 py-3 bg-black/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent transition-all relative z-20' required />
                    <textarea rows={10}  name="area" placeholder='Your Message' className='w-full px-4 py-3 bg-black/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent transition-all relative z-20'  required />

                    <button 
            type="submit"
            className="w- bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Send Message
          </button>
              </form>

        </div>
         
        <BackgroundBeams /> 
    </div>
  )
}

export default page