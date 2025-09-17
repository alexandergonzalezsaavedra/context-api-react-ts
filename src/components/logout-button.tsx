import { useAuth } from '../hooks/use-auth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      className='btn btn-danger'
      onClick={logout}
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
