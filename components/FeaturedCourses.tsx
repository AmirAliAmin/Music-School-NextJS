'use client'

import courseData from '@/data/music_cources.json'
import { div } from 'motion/react-client'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number ,
    instructor: string,
    isFeatured: boolean,
    image:string
}

function FeaturedCourses() {
   const featuredCourses= courseData.courses.filter((course:Course)=>course.isFeatured === true)
  return (
    <div className='py-12 bg-gray-950 px-10'>
        <div>
            <div className='text-center'>
                <h2 className='text-md font-semibold tracking-wider text-amber-800'>FEATURED COURSES</h2>
                <p className='text-3xl  mt-2 tracking-widest font-extrabold'>Learn With the Best</p>
            </div>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
            {
                featuredCourses.map((course:Course,index:number)=>(
                    <div key={index} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-3xl bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6flex flex-col items-center text-center grow'>
                                <div className='w-full h-50'>
                                <Image src={course.image} alt={course.title} width={100} height={100} className='w-full h-full object-cover'/>

                                </div>
                                <p className='font-bold text-lg mt-2'>{course.title}</p>
                                <p className='text-sm text-gray-500 mt-2 mb-10'>{course.description}</p>
                                <Link href={`/courses/${course.id}`} className='text-xs py-1 underline px-4 bg-gray-500 rounded-lg text-black'>Learn more</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))
            }
        </div>
        <div className='mt-20 text-center'>
            <Link href={'/courses'}>
            View All courses</Link>
        </div>
    </div>
  )
}

export default FeaturedCourses