import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './pages';
import { Providers } from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Home />
    </Providers>
  </StrictMode>,
);
