import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TabManager } from "./components/TabManager";

const App: React.FC = () => {
    return (
        <div className="App">
            <TabManager/>
        </div>
    );
};

export default App;
