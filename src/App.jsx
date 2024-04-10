import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../src/components/Client/Client'; // Importer Apollo Client fra den nye client.jsx-fil
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';


function App() {


  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Blog />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
