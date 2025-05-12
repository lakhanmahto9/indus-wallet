// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Welcome from "./components/credentials/Welcome";
// import GeneralNotice from "./components/credentials/GeneralNotice";
// import CreatePassword from "./components/credentials/manage-password/CreatePassword";
// import Lock from "./components/credentials/manage-password/Lock";
// import PrivateRoute from "./components/credentials/manage-password/PrivateRoute";
// import SecureYoreWallet from "./components/credentials/manage-password/SecureYoreWallet";
// import ReviewRecoveryPhrase from "./components/credentials/manage-password/ReviewRecoveryPhrase";
// import ConfirmSecretRecoveryPhrase from "./components/credentials/manage-password/ConfirmSecretRecoveryPhrase";
// import Dashboard from "./components/home/Dashboard";

// const PublicRoute = ({ element }) => {
//   const { password } = useSelector((state) => state.password);
//   const location = useLocation();
//   return password ? (
//     <Navigate to="/lock" state={{ from: location }} replace />
//   ) : (
//     element
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PublicRoute element={<Welcome />} />} />
//         {/* <Route path="/" element={<Welcome />} />  */}
//         <Route
//           path="/general-notice"
//           element={<PublicRoute element={<GeneralNotice />} />}
//         />
//         <Route
//           path="/create-password"
//           element={<PublicRoute element={<CreatePassword />} />}
//         />
//         <Route
//           path="/secure-wallet"
//           element={
//             <PrivateRoute>
//               <SecureYoreWallet />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/review-recovery-phrase"
//           element={
//             <PrivateRoute>
//               <ReviewRecoveryPhrase />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/confirm-recovery-phrase"
//           element={
//             <PrivateRoute>
//               <ConfirmSecretRecoveryPhrase />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/lock"
//           element={
//             <PrivateRoute>
//               <Lock />
//             </PrivateRoute>
//           }
//         />
//          <Route
//           path="/home"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./components/home/Dashboard";

const PublicRoute = ({ element }) => {
  const { password } = useSelector((state) => state.password);
  const location = useLocation();
  return password ? (
    <Navigate to="/lock" state={{ from: location }} replace />
  ) : (
    element
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
