import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContextProvider.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PUBLISHABLE_KEY);
if (!PUBLISHABLE_KEY) {
  console.log(PUBLISHABLE_KEY);
  throw new Error("Missing Publishable Key");
}

// Log the publishable key to check if it's correctly loaded
console.log(PUBLISHABLE_KEY);  // This should log the key to the console

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ClerkProvider>
);
