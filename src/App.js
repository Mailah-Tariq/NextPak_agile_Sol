import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DialerScreen from './componenets/DialerScreen';
import DialedNumberScreen from './componenets/DialedNumberScreen';
import CallLogScreen from './componenets/CallLogScreen';
import Contacts from './componenets/Contact';
import FooterMenu from './componenets/FooterMenu';
import Favorites from './componenets/Favourites';
import './assets/css/style.css'

import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/keypad" />} />
          <Route path="/keypad" element={<DialerScreen />} />
          <Route path="/recents" element={<CallLogScreen />} />
          <Route path="/dialed-number" element={<DialedNumberScreen />} />
          {/* <Route path="/contacts" element={<div>Contacts Screen</div>} /> */}
          <Route path="/favourites" element={<Favorites/>} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <FooterMenu />
      </div>
    </Router>
  );
}

export default App;