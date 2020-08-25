import React from 'react';

// Imported Components
import Intro from './Intro';
import Products from './Products';

const Home = () => {
  return (
    <main>
      <Intro />
      <section className="productsField">
        <Products />
      </section>
    </main>
  );
};

export default Home;
