import { React, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import Community from './Page/Community';
import Account from './Page/Account';
import Practice from './Page/Practice';
// import Note from './Note/Note' ;
import Blogs from './Page/Blogs'
import Microsoft from './Companies/Microsoft';
import Fullstack from './roadmaps/Fullstack';
import AboutUs from './Page/AboutUs';
import InterTwine from './Page/InterTwine';
import Android from './roadmaps/Android';
import Chat from './Page/Chat';
import Materail from './Page/Materail';
import Core from './Practice/Core';
import Login from './Account/Login';
import Signup from './Account/Signup';
import Publish from './Community/Publish';
import Article from './Community/Article';
import Notfound from './Page/Notfound';
import Sheet from './Practice/Sheet';
import CN from './Practice/CN';
import OS from './Practice/OS';
import DBMS from './Practice/DBMS';
import Linux from './Practice/Linux';
import { ToastContainer } from 'react-toastify';
// import { useLocation, Switch } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
import Comp from './Compiler/Comp';
import Company from './Book-Finder/Company';
import Companies from './Page/Companies';
import Adobee from './Companies/Adobee';
import Amazon from './Companies/Amazon';
import Apple from './Companies/Apple';
import GoldmanSachs from './Companies/GoldmanSachs';

function App() {

  const [activeBar, setActiveBar] = useState(true);

  return (
    <div className='w-screen bimg text-black' >
      <ConditionalNavbar activeBar={activeBar} setActiveBar={setActiveBar} />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={< Home />} />
        <Route path='/intertwine' element={< InterTwine />} />
        <Route path='/community' element={< Community />} />
        <Route path='/account' element={< Account />} />
        <Route path='/practice' element={< Practice />} />
        <Route path='/blogs' element={< Blogs />} />
        <Route path='/material' element={< Materail />} />
        <Route path='/aboutus' element={< AboutUs />} />
        <Route path='/android' element={<Android />} />
        <Route path='/microsoft' element={<Microsoft />} />
        <Route path='/fullstack' element={<Fullstack />} />
        <Route path='/publish' element={<Publish />} />
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/article' element={<Article />} />
        <Route path='/sheet' element={<Sheet />} />
        <Route path='/cn' element={<CN />} />
        <Route path='/dbms' element={<DBMS />} />
        <Route path='/os' element={<OS />} />
        <Route path='/linux' element={<Linux />} />
        <Route path='/core' element={<Core />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/compiler' element={<Comp />} />
        <Route path='/books' element={<Company />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/adobe' element={<Adobee />} />
        <Route path='/apple' element={<Apple />} />
        <Route path='/amazon' element={<Amazon />} />
        <Route path='/goldman' element={<GoldmanSachs />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;

const ConditionalNavbar = ({ activeBar, setActiveBar }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/signup'];

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navbar activeBar={activeBar} setActiveBar={setActiveBar} />;
};