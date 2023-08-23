import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;