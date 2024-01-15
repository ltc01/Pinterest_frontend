import { Nav } from "./components/Nav.jsx";
import { Content } from './components/Content.jsx';
import { Search } from './components/Search.jsx';
import { Save } from './components/Save.jsx';
import { Shop } from './components/Shop.jsx';
import { Bottom } from './components/Bottom.jsx';


function App() {

  return (
    <>
      <Nav />
      <Content />
      <Search />
      <Save />
      <Shop />
      <Bottom />
    </>
  )
}

export default App