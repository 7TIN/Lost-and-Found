// App.jsx
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage.jsx';
import SignupPage from './pages/authentication/SignUpPage.jsx';
import { SnackbarProvider } from 'notistack';
import ItemListPage from './pages/itemsPage.jsx';
import ReportItemCard from './components/ReportItemCard.jsx';
import PrivateRoute from './utils/PrivateRouter.jsx';
import { AuthProvider } from './utils/AuthContext.jsx';


function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path ="/report" element={<PrivateRoute> <ReportItemCard/> </PrivateRoute>} />
            <Route path="/items" element= {<PrivateRoute> <ItemListPage/> </PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
    
  );
}

export default App;