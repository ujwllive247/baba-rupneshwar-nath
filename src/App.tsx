import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageProvider';
import { AppRoutes } from '@/routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}
