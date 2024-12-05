import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Books from './components/viewbook';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div>
                <Routes>
                    {/* Add the route for LandingPage */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/ResetPassword" element={<ResetPassword />} />
                    <Route path="/books" element={<Books />} />



                </Routes>
            </div>
        </Router>
    );
}

export default App;
