import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';
import { useAuth } from './hooks/use-auth';

const App = () => {
  const { user } = useAuth();

  if (!user)
    return (
      <div className='container'>
        <h1 className='text-center mt-5'>Please log in</h1>
        <LoginButton />
      </div>
    );

  return (
    <div className='container'>
      <h1 className='text-center mt-5'>Context API</h1>
      <div className='row'>
        <div className='col-md-4 text-center'>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};
export default App;
