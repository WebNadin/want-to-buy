import React from 'react';

import './app.scss';

// Imported Components
import Header from './app/Header/Header';
import Footer from './app/Footer/Footer';
import Main from './app/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
