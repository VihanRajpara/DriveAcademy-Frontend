import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./module/login/Login";
import StartingPage from "./module/StartingPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./util/theme";
import UserState from "./util/context/UserState";
import Dashboard from "./module/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserState>
          <Routes>
            {/* <Route path="/" element={<StartingPage />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </UserState>
      </Router>
    </ThemeProvider>
  );
}

export default App;
