import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Content from './components/Content';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Aside />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;