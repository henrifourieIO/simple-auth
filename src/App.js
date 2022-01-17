import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Simple React Login Auth</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
