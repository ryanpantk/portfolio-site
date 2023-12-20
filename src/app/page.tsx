import Main from './components/Main'
import NavBar from './components/NavBar/NavBar'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Main/>
      <div id="about" className="h-screen">
        <br />
      </div>
    </main>
  )
}
