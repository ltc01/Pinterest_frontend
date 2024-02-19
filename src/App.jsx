import { Nav } from "./components/Nav.jsx";
import { Home } from './components/Home.jsx';
import { Search } from './components/Search.jsx';
import { Save } from './components/Save.jsx';
import { Shop } from './components/Shop.jsx';
import { Bottom } from './components/Bottom.jsx';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer.jsx'
import Today  from './components/Today.jsx'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home Children={<><Search /><Save /><Shop /><Bottom /></>} />}  />
        <Route path="/today" element={<Today />}/>
        <Route path="/watch" element={<Today />} />
        <Route path="/explore" element={<Today />}/>
        <Route path="/about" element={<Today />} />
        <Route path="/business" element={<Today />}/>
        <Route path="/blog" element={<Today />}/>
      </Routes>
      <Footer />
    </>

  )
}

export default App