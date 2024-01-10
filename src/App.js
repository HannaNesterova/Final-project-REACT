import { useState } from 'react';
import './App.css';
import ContactHeader from './components/Contact_header/ContactHeader';
import Footer from './components/Footer/Footer';






function App() {

  return (
    <div>
    <div className="app_wrapper">

      <ContactHeader
      />
    </div>

      <Footer />
    </div>
  );
}

export default App;
