import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import PaintingDetail from './pages/PaintingDetail';
import CustomOrderPage from './pages/CustomOrderPage';
import Cart from './pages/Cart';
import About from './pages/About';

const MainApp = () => {
  const { isLoadingAuth, authError, navigateToLogin } = useAuth();

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError?.type === 'auth_required') {
    navigateToLogin();
    return null;
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/painting/:id" element={<PaintingDetail />} />
        <Route path="/custom-order" element={<CustomOrderPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <MainApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
