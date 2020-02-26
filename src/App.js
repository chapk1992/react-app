import React from 'react';
import './App.css';
import Navigation from './components/NavBar/Navigation';
import Header from './components/Header/Header';
import Profile from './components/Container/Profile/Profile';
import {BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Container/Dialogs/Dialogs';
import News from './components/Container/News/News'
import Music from './components/Container/Music/Music'
import Settings from './components/Container/Settings/Settings'

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navigation />
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            
            </div >
        </BrowserRouter>
    );
}

export default App;