// App.jsx
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage.jsx';
import SignupPage from './pages/authentication/SignUpPage.jsx';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <SnackbarProvider maxSnack={1}>
    <Router>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
    </SnackbarProvider>
  );
}

export default App;