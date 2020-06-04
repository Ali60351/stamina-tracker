import React from 'react';
import './App.css';
import { sendNotification } from './utils';

function App() {
    return (
        <div className="App">
            <button onClick={() => sendNotification('title', 'message')}>SEND</button>
        </div>
    );
}

export default App;
