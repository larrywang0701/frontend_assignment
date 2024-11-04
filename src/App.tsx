import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import EventsPage from './pages/EventsPage';
import BulletinBoardPage from './pages/BulletinBoardPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
      </Routes>
      <Routes>
        <Route path='/events' element={<EventsPage/>} />
      </Routes>
      <Routes>
        <Route path='/bulletin_board' element={<BulletinBoardPage/>} />
      </Routes>
      <Routes>
        <Route path='/calendars' element={<CalendarPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
