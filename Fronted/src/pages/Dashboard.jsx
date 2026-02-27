import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel de Control</h1>
      <p>Bienvenido a tu gestión de tiempo.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h3>Tareas Pendientes</h3>
          <p>5 tareas para hoy</p>
        </div>
      </div>
      <br />
      <Link to="/planner">Ir al Planificador →</Link>
    </div>
  );
}