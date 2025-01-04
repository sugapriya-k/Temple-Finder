import React from 'react';
import { Route,Routes} from 'react-router-dom';

//import ImageDisplay from './components/image';
//import SearchBarWithAutocomplete from './components/file';
import SearchPage from './components/search';
//import MapLocation from './components/maptemp';
import  {Home}  from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/footer';
import { PopularTemples } from './components/Famous';
import Contact from './components/ContactUs';
import GoToTopButton from './components/gototop';
import AboutPage from './components/AboutUs';
import UserGuidePage from './components/Userguide';
function App() {
  return (
    <div>
      <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<SearchPage/>}></Route>
      <Route path='/famous' element={<PopularTemples/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/userguide' element={<UserGuidePage/>}></Route>
    </Routes>
    <GoToTopButton/>
    <Footer/>
      
    </div>

  );
}

export default App;