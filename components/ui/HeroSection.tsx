import Link from "next/link"
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
            <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, placeat! Aperiam rem nam consequatur aut cupiditate commodi, a nisi, placeat suscipit nulla odio ut fuga tenetur ipsum, minus necessitatibus facere.</p>
            <div className="mt-4">
                 <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
                <Link href={'/courses'}>Explore Courses</Link>

      </Button>
            </div>

        </div>
    </div>
  )
}

export default HeroSection