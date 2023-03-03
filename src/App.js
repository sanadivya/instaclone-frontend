import './App.css';
import LandingPage from './components/landing page/landing-page';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import PostView from './components/post-view/post-view';
import Form from './components/form/form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/post-view' element={<><PostView /><Outlet /></>} />
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
