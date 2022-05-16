import Navbar from './Page/Navbar';
import './App.css';
import Login from './Page/Login';
import Dashboard from './Page/Dashboard';
import Myprofile from './Page/Myprofile'
import Hostuser from './Page/Hostuser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Navbar />
              <div className="lform">
                <Login />
              </div></>
          } />
          <Route exact path='/dashboard' element={<Dashboard className="Dashboard" />} />
          <Route exact path='/hostuser' element={<Hostuser />} />
          <Route exact path='/Myprofile' element={<Myprofile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
