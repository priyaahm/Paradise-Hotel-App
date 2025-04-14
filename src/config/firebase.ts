import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
// Add additional scopes if needed
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// Set custom parameters
googleProvider.setCustomParameters({
  prompt: 'select_account' // Always prompt for account selection
});

export default app; 