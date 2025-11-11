"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Interactive Music Lessons",
    description: "Experience one-on-one virtual lessons with our expert instructors. Get personalized feedback, learn proper techniques, and master your instrument through real-time guidance. Our interactive platform makes distance learning feel like in-person instruction with high-quality audio and video.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] text-white">
        Interactive Music Lessons
      </div>
    ),
  },
  {
    title: "Live Performance Workshops",
    description: "Join our weekly live workshops where students perform and receive constructive feedback from peers and instructors. Build confidence, overcome stage fright, and develop your performance skills in a supportive environment. Perfect for preparing for recitals, auditions, or simply sharing your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/courses/guitar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live music performance workshop"
        />
      </div>
    ),
  },
  {
    title: "Music Theory Mastery",
    description: "Build a strong foundation with our comprehensive music theory curriculum. From basic notation to advanced harmony and composition, our structured approach makes complex concepts accessible. Understand the language of music to enhance your playing, improvisation, and creative expression.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] text-white">
        Music Theory Mastery
      </div>
    ),
  },
  {
    title: "Digital Recording Studio",
    description: "Access our state-of-the-art digital recording facilities and learn music production techniques. Record your performances, create your own compositions, and understand the fundamentals of audio engineering. Perfect for aspiring artists, composers, and anyone interested in the technical side of music creation.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
        Digital Recording Studio
      </div>
    ),
  },
  {
    title: "Ensemble & Band Coaching",
    description: "Join one of our student ensembles or form your own band with like-minded musicians. Receive professional coaching on ensemble playing, synchronization, and group dynamics. Whether you're into classical chamber music, jazz combos, or rock bands, we'll help you sound great together.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--red-500))] text-white">
        Ensemble & Band Coaching
      </div>
    ),
  },
  {
    title: "Personalized Practice Plans",
    description: "Get customized practice schedules and exercises tailored to your skill level and goals. Our instructors create structured practice routines that maximize your progress while preventing burnout. Track your improvement, set achievable milestones, and stay motivated on your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white">
        Personalized Practice Plans
      </div>
    ),
  }
];

function WhyUs() {
  return (
    <div className="no-scroll">
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyUs