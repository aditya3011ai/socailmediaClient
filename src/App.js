import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RequireUser from "./components/RequireUser";
import Feed from "./components/feed/Feed";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/updateProfile/UpdateProfile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<RequireUser />}>
          <Route element={<Home/>}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
