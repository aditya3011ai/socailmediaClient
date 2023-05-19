import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RequireUser from "./components/RequireUser";
import Feed from "./components/feed/Feed";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/updateProfile/UpdateProfile";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import OnlyIfNotLoggedIn from "./components/notLogedIn";
import toast, { Toaster } from "react-hot-toast";

export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
  const loadingRef = useRef(null);
  const toastData = useSelector((state) => state.appConfigReducer.toastData);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastData.message);
        break;
      default:
        break;
    }
  }, [toastData]);

  return (
    <div className="App">
      <LoadingBar color="#0077cd" height={4} ref={loadingRef} />
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<RequireUser />}>
          <Route element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
          </Route>
        </Route>
        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
