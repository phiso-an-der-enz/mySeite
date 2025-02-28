import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header/Header';
import SubHeader from './layouts/SubHeader/SubHeader';
import { ROUTES } from './utils/routes';
import HomePage from './pages/HomePage';
import Galerea from './pages/Galerea';
import AboutUs from './pages/AboutUs';
import Praxis from './pages/Praxis';
import Footer from './layouts/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.GALEREA} element={<Galerea />} />
        <Route path={ROUTES.ABOUT} element={<AboutUs />} />
        <Route path={ROUTES.PRAXIS} element={<Praxis />} />
        <Route path={ROUTES.IMPRESSUM} element={<Impressum />} />
        <Route path={ROUTES.DATENSCHUTZ} element={<Datenschutz />} />
        <Route path={ROUTES.NOTFOUNDPAGE} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
