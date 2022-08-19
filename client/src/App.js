import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Single/Register/Register';
import Settings from './pages/Single/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';

function App(){
    return (
        <div>
            <Navbar/>
            <Register/>
             <Routes>
                <Route path='write' element={<Write></Write>}></Route>
             </Routes>
        </div>
    );
};

export default App;