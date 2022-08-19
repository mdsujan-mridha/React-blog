import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <Posts/>
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;