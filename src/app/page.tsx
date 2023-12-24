"use client";

import Main from './components/Main'
import NavBar from './components/NavBar/NavBar'
import About from './components/About'
import { useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <main>
      <NavBar scaleX={scaleX}/>
      <Main/>
      <About/>
    </main>
  )
}
