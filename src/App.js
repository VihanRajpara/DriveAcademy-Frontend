import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./module/login/Login";
import StartingPage from "./module/StartingPage";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./util/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
