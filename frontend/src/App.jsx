// App.jsx
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage.jsx';
import SignupPage from './pages/authentication/SignUpPage.jsx';
import { SnackbarProvider } from 'notistack';
import ItemListPage from './pages/itemsPage.jsx';
import ReportItemCard from './components/ReportItemCard.jsx';
import PrivateRoute from './utils/PrivateRouter.jsx';
import { AuthProvider } from './utils/AuthContext.jsx';
import HomePage from './pages/HomePage.jsx';
import NewItemCard from './components/NewItemCard.jsx';
import Index from './pages/Index.jsx';


function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path ="/report" element={<PrivateRoute> <ReportItemCard/> </PrivateRoute>} />
            <Route path="/items" element= {<PrivateRoute> <ItemListPage/> </PrivateRoute>} />
            <Route path= "/" element= {<PrivateRoute> <HomePage/> </PrivateRoute>} />
            <Route path ="/index" element= {<Index/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
    
  );
}

export default App;