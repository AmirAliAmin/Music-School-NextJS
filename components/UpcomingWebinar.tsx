"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
 

function UpcomingWebinar() {
const webinars = [
  {
    title: "Jazz Improvisation Fundamentals",
    description:
      "Learn the art of jazz improvisation from master musicians. Discover scales, chord progressions, and phrasing techniques that will take your solos to the next level. Perfect for intermediate players.",
    link: "/webinars/jazz-improvisation",
    date: "March 15, 2024",
    instructor: "Marcus Johnson",
    level: "Intermediate",
  },
  {
    title: "Vocal Health & Technique",
    description:
      "Protect and enhance your singing voice with proper vocal care techniques. Learn breathing exercises, warm-up routines, and performance strategies from a certified vocal coach.",
    link: "/webinars/vocal-health",
    date: "March 22, 2024",
    instructor: "Dr. Sarah Chen",
    level: "All Levels",
  },
  {
    title: "Music Production for Beginners",
    description:
      "Start your journey in digital music production. Learn DAW basics, recording techniques, mixing fundamentals, and how to create your first professional-sounding track.",
    link: "/webinars/music-production",
    date: "April 5, 2024",
    instructor: "Jordan Taylor",
    level: "Beginner",
  },
  {
    title: "Classical Guitar Masterclass",
    description:
      "Advanced techniques for classical guitarists. Explore fingerstyle patterns, tone production, and interpretation of classical repertoire with a virtuoso performer.",
    link: "/webinars/classical-guitar",
    date: "April 12, 2024",
    instructor: "Elena Rodriguez",
    level: "Advanced",
  },
  {
    title: "Rhythm & Percussion Workshop",
    description:
      "Develop your rhythmic skills and timing. From basic beats to complex polyrhythms, this workshop will transform your sense of timing and groove across all instruments.",
    link: "/webinars/rhythm-workshop",
    date: "April 19, 2024",
    instructor: "David Thompson",
    level: "All Levels",
  },
  {
    title: "Songwriting & Composition",
    description:
      "Unlock your creative potential in songwriting. Learn chord progressions, melody writing, lyric composition, and arrangement techniques to bring your musical ideas to life.",
    link: "/webinars/songwriting",
    date: "April 26, 2024",
    instructor: "Alex Kim",
    level: "Intermediate",
  },
  {
    title: "Piano for Adult Beginners",
    description:
      "Specially designed for adult learners, this webinar covers foundational piano skills, practice strategies, and how to stay motivated on your musical journey.",
    link: "/webinars/adult-piano",
    date: "May 3, 2024",
    instructor: "Isabella Martinez",
    level: "Beginner",
  },
  {
    title: "Music Theory Made Simple",
    description:
      "Demystify music theory with practical, easy-to-understand concepts. Learn how to read music, understand chords, and apply theory to your playing immediately.",
    link: "/webinars/music-theory",
    date: "May 10, 2024",
    instructor: "Priya Patel",
    level: "Beginner",
  },
];
  return (
    // <div className="w-full bg-gray-600 flex justify-center items-center py-10">
    //     <div className=" w-80 h-70  flex flex-col gap-2">
    //         <div className="bg-black w-full h-full rounded-lg relative">
    //             box
    //         <div className="absolute w-30 h-30 rounded-full bg-green-600 flex justify-center items-center  -bottom-15 -left-13 border-5 border-gray-600">
    //             Circle
    //         </div>
    //         </div>
    //         <div className="bg-black w- mr-4 h-full rounded-lg ">
    //           box
    //         </div>
    //     </div>
    // </div>
    <div className="p-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h1 className="text-md font-semibold tracking-wider text-amber-800">Featured Webnairs</h1>
                <p className='text-3xl  mt-2 tracking-widest font-extrabold'>Enhance Your Musical Journey</p>
            </div>
            <div className="mt-10">
                <HoverEffect items={webinars}/>
            </div>
            <div className="mt-10 text-center">
                <Link href={'/'}>
                View All webinars
                </Link>
            </div>
        </div>

    </div>
  )
}

export default UpcomingWebinar