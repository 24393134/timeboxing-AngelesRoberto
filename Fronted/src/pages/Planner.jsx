export default function Planner() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Planificador de Tiempo</h1>
      <p>Organiza tus bloques de tiempo aquí.</p>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Actividad</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>08:00</td><td>Revisión de correos</td></tr>
          <tr><td>09:00</td><td>Desarrollo Frontend</td></tr>
        </tbody>
      </table>
    </div>
  );
}