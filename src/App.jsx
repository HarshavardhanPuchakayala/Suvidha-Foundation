import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Donation from './Pages/Donation'
import Contact from './Pages/Contact'
import Internship from './Pages/Internship'
import Event from './Pages/Event'
import Gallery from './Pages/Gallery'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import TestNavBar from './Components/TransNavBar'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <TestNavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Donate" element={<Donation/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Internship" element={<Internship/>}/>
      <Route path="/Event" element={<Event/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Privacy-Policy" element={<PrivacyPolicy/>}></Route>
    </Routes>
    <Footer/> 
    </BrowserRouter>
    </>
  )
}
