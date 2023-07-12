import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

// Componentes de las páginas
const MainPage = () => (
  <Container>
    <h2>Bienvenido</h2>
    <p>
      Bienvenido/a a esta aplicación de ejemplos de tiempos verbales en castellano. Aquí podrás explorar y aprender sobre los diferentes tiempos verbales utilizados en este idioma.
    </p>
    <p>
      Utiliza la barra de navegación superior para acceder a las diferentes páginas de tiempo verbal: Pasado, Presente y Futuro. Cada página contiene una breve descripción del tiempo verbal correspondiente.
    </p>
    <p>
      ¡Disfruta aprendiendo sobre los tiempos verbales y mejora tu conocimiento del castellano!
    </p>
  </Container>
);
const PasadoPage = () => (
  <Container>
    <h2>Pasado</h2>
    <p>
      El tiempo verbal "pasado" se utiliza para referirse a acciones, eventos o situaciones que ocurrieron en un momento anterior al presente. En español, existen varios tiempos verbales para expresar el pasado, como el pretérito perfecto, el pretérito imperfecto, el pretérito indefinido, entre otros.
    </p>
    <h3>Ejemplos de tiempos verbales en pasado:</h3>
    <ul>
      <li>Comí una manzana ayer.</li>
      <li>Estudiaba mucho cuando era joven.</li>
      <li>Visité España el verano pasado.</li>
    </ul>
  </Container>
);
const PresentePage = () => (
  <Container>
    <h2>Presente</h2>
    <p>
      El tiempo verbal "presente" se utiliza para referirse a acciones, eventos o situaciones que ocurren en el momento actual. En español, el presente indica una acción habitual, verdades universales o situaciones que están ocurriendo en el presente.
    </p>
    <h3>Ejemplos de tiempos verbales en presente:</h3>
    <ul>
      <li>Leo un libro todos los días.</li>
      <li>El sol sale por el este.</li>
      <li>Estoy estudiando para mi examen.</li>
    </ul>
  </Container>
);
const FuturoPage = () => (
  <Container>
    <h2>Futuro</h2>
    <p>
      El tiempo verbal "futuro" se utiliza para referirse a acciones, eventos o situaciones que ocurrirán en un momento posterior al presente. En español, el futuro se puede expresar utilizando diferentes construcciones verbales, como el futuro simple, el futuro perifrástico o el presente de subjuntivo.
    </p>
    <h3>Ejemplos de tiempos verbales en futuro:</h3>
    <ul>
      <li>Mañana iré al cine.</li>
      <li>En el futuro, viajaré por todo el mundo.</li>
      <li>Espero que tengas éxito en tu carrera.</li>
    </ul>
  </Container>
);

const App = () => {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Principal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/pasado">Pasado</Nav.Link>
              <Nav.Link as={Link} to="/presente">Presente</Nav.Link>
              <Nav.Link as={Link} to="/futuro">Futuro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pasado" element={<PasadoPage />} />
        <Route path="/presente" element={<PresentePage />} />
        <Route path="/futuro" element={<FuturoPage />} />
      </Routes>
    </Router>
  );
};

export default App;