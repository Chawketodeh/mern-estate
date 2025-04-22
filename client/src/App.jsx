import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route  element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
