
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import LogIn from './Page/Login/LogIn';
import Appointment from './Page/Appointment/Appointment';
import Signup from './Page/Login/Signup';
import RequireAuth from './Page/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Deshboard/Dashboard';
import MyAppointments from './Page/Deshboard/MyAppointments';
import MyReview from './Page/Deshboard/MyReview';
import History from './Page/Deshboard/History';
import Users from './Page/Deshboard/Users';
import RequireAdmin from './Page/Login/RequireAdmin';
import AddDoctor from './Page/Deshboard/AddDoctor';
import ManageDoctor from './Page/Deshboard/ManageDoctor';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="Dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='Review' element={<MyReview></MyReview>}></Route>
          <Route path='History' element={<History></History>}></Route>
          <Route path='Users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='AddDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='ManageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>
        <Route path="Login" element={<LogIn />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
