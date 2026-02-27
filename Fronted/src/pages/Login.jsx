import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    navigate('/dashboard'); 
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Iniciar Sesión - Timeboxing</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo" required /><br /><br />
        <input type="password" placeholder="Contraseña" required /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}