import './App.css';
import BannerSocial from './Components/BannerSocial';
import Navbar from './Components/Navbar';
import ContentsParent from './Components/ContentsParent'
import Filters from './Components/Filters'
import { useState } from 'react';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AppRoutes from './Routes/AppRoutes'


function App() {

  const [search,setSearch]=useState("")
  console.log('search',search)

  return (
    <div className="App">
      <AppRoutes/>
      {/* <Home/> */}
      {/* <Navbar/>
      <BannerSocial/>
      <Filters search={search} setSearch={setSearch} />
      <ContentsParent search={search}/> */}
      {/* <Login/> */}

    </div>
  );
}

export default App;
