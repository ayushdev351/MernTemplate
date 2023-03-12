import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipes from './pages/CreateRecipes';
import SavedRecipes from './pages/SavedRecipes';

function App() {
    return(
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-recipes" element={<CreateRecipes/>}/>
                    <Route path="/saved-recipes" element={<SavedRecipes/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;