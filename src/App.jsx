// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import EventList from './pages/EventList.jsx';
import EventCreate from './pages/EventCreate.jsx';
import TicketPurchase from './pages/TicketPurchase.jsx';
import TicketScanner from './pages/TicketScanner.jsx';
import NotFound from './pages/NotFound.jsx';
import Help from './pages/Help.jsx';
import EventPage from './pages/EventPage.jsx';
import Footer from './pages/Footer.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <div className='mt-26 md:mt-16 overflow-x-hidden'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/events" element={<EventList/>} />
          <Route path="/create-event" element={<EventCreate/>} />
          <Route path="/events/:eventId" element={<EventPage />} />
          <Route path="/purchase-ticket/:eventId" element={<TicketPurchase/>} />
          <Route path="/scan-ticket" element={<TicketScanner/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;