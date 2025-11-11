"use client";
 
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from '@/data/music_cources.json'


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

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All Courses ({courseData.courses.length})</h1>
        <div className="flex flex-wrap justify-between px-10">
            {
                courseData.courses.map((course:Course)=>(
                     <CardContainer className="inter-var" key={course.id}>
      <CardBody  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 rounded-xl p-2 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
                ))
            }
        </div>
    </div>
  )
}

export default page;