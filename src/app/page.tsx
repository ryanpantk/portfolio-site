import Main from './components/Main'
import NavBar from './components/NavBar/NavBar'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Main/>
      <About/>
      <div className="h-screen"></div>
    </main>
  )
}
