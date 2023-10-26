import './App.css';
import Header from './components/Header';


import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

import { Route, Routes, Link } from 'react-router-dom';

import InfoPage from './pages/InfoPage';
import TeachersFrontsPage from './pages/TeachersFrontsPage';
import MemoryPage from './pages/MemoryPage';
import HolocostPage from './pages/HolocostPage';
import MonumentsPage from './pages/MonumentsPage';
import ChildMemoryPage from './pages/ChildMemoryPage';

import Telegram from './images/telegram.svg';
import Instagram from './images/instagram.svg';



function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/info' element={<InfoPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/teachers' element={<TeachersFrontsPage/>}/>
                <Route path='/memory' element={<MemoryPage/>} />
                <Route path='/holocost' element={<HolocostPage/>} />
                <Route path='/monuments' element={<MonumentsPage/>} />
                <Route path='/child-memory' element={<ChildMemoryPage/>} />
            </Routes>
            <footer>
                <a href="https://t.me/Yatagarashy"><img src={Telegram} width="50px" height="50px" alt=""/></a>
                <a href="https://www.instagram.com/roman_rovner"><img src={Instagram} width="50px" height="50px" alt="" /></a>
            </footer>
        </div>
    );
}

export default App;
