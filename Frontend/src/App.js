import Payment from "./Components/Payment";
// import QrCode from "./Components/QrCode";
import { Route, Routes } from "react-router-dom";
// import Admin from "./Components/Admin";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Forgotpassword from "./Components/Forgotpassword";
// import NewPassword from "./Components/NewPassword";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/payment" element={<Payment />} />
        {/* <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/qrCode" element={<QrCode />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgotpassword" element={<Forgotpassword />} />
        <Route exact path="/newPass" element={<NewPassword />} /> */}
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
}
export default App;
