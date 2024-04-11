import './App.css';
// import Axios from 'axios';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';

import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';
import MenusPage from './pages/MenusPage';
import IngredientsPage from './pages/IngredientsPage';
import RecipePage from './pages/RecipePage';
import EngineeringPage from './pages/EngineeringPage';
import OrgSetupPage from './pages/OrgSetupPage';

function App() {
    return (
        <div className="App">
            <Header />
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='UserPage' element={<UserPage/>} />
                    <Route path='MenusPage' element={<MenusPage/>} />
                    <Route path='IngredientsPage' element={<IngredientsPage/>} />
                    <Route path='RecipePage' element={<RecipePage/>} />
                    <Route path='EngineeringPage' element={<EngineeringPage/>} />
                    <Route path='OrgSetupPage' element={<OrgSetupPage/>} />
                </Routes>
    </div>
    );
}

export default App;
