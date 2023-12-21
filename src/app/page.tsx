import Main from './components/Main'
import NavBar from './components/NavBar/NavBar'
import Image from 'next/image';
import logo from '../../public/self.jpeg';

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Main/>
      <div id="about" className="h-screen">
        {/* <Image src={logo} alt="Logo" /> */}
      </div>
    </main>
  )
}
