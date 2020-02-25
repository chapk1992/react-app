import React from 'react';
import './App.css';
import Navigation from './components/NavBar/Navigation';
import Container from './components/Container/Container';
import Header from './components/Header/Header';


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