import { Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import styles from './App.module.css';
import SideBar from "./components/layout/SideBar";
import TheHeader from "./components/layout/TheHeader";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className={styles.SideBar} lg={2}>
            <SideBar />
          </Col>
          <Col lg={10}>
            <TheHeader />
            <header className={styles.AppHeader}>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
