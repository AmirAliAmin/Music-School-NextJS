'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const testimonials = [
  {
    quote:
      "The instructors at Harmony Music School transformed my daughter from a shy beginner to a confident performer. Her piano skills have blossomed beyond our expectations, and she now plays with such emotion and technique that brings tears to our eyes.",
    name: "Sarah Johnson",
    title: "Parent of Piano Student",
  },
  {
    quote:
      "After trying several music schools, I finally found my musical home here. The guitar instructors don't just teach chords - they teach you how to feel the music. I went from strumming basic songs to composing my own pieces in just one year!",
    name: "Marcus Chen",
    title: "Guitar Student",
  },
  {
    quote:
      "As an adult beginner, I was nervous about starting violin lessons. But the patient, personalized approach made all the difference. Now I'm playing in the community orchestra - a dream I never thought possible at my age!",
    name: "Dr. Elena Rodriguez",
    title: "Adult Violin Student",
  },
  {
    quote:
      "The ensemble program gave my son more than just music skills - it taught him teamwork, discipline, and confidence. Watching him perform with his bandmates, you can see the joy and camaraderie that music has brought into his life.",
    name: "David Thompson",
    title: "Parent of Drum Student",
  },
  {
    quote:
      "I've been singing my whole life, but the vocal coaching here took my abilities to a professional level. The technical training combined with performance opportunities prepared me perfectly for my conservatory auditions.",
    name: "Isabella Martinez",
    title: "Vocal Student",
  },
  {
    quote:
      "The music theory classes are revolutionary! Instead of dry textbooks, we learn through interactive games and real musical examples. I finally understand how music works, and it's made me a much better musician across all instruments.",
    name: "Alex Kim",
    title: "Multi-instrument Student",
  },
  {
    quote:
      "From the state-of-the-art recording studio to the passionate instructors, every aspect of this school is designed to nurture musical growth. I've recorded my first EP using their facilities and guidance - dreams really do come true here!",
    name: "Jordan Taylor",
    title: "Music Production Student",
  },
  {
    quote:
      "The teachers see each student as a unique artist and help them find their own musical voice. My daughter didn't just learn to play cello - she discovered her passion and is now pursuing music in college thanks to their mentorship.",
    name: "Priya Patel",
    title: "Parent of Cello Student",
  }
];
export default function Testimonial() {
    
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/20 relative flex flex-col items-center justify-center overflow-hidden">
        <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voice of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}
