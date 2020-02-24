import React from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Container from './components/Container';

function App() {
    return (
        <div className='app-wrapper'>
           <Header />
           <Navigation />
            <Container />
        </div >
    );
}

export default App;