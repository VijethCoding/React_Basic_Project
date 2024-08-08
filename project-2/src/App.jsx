import React from 'react';
import './App.css';
import Navigation from './assets/components/Navigation/Navigation';
import ContactHeader from './assets/components/ContactHeader/ContactHeader';
import ContactForm from './assets/components/ContactForm/ContactForm';


function App() {
  

  return (
    <div>
    <Navigation />
    <main className="main_container">
    <ContactHeader />
    <ContactForm />
    </main>
    </div>
  )
}

export default App;
