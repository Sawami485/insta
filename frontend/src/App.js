// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramLoginPage from './InstagramLoginPage';
import AdminPanel from './AdminPanel'; // Import your AdminPanel component

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<InstagramLoginPage />} />
                    <Route path="/admin" element={<AdminPanel />} /> {/* Admin route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
