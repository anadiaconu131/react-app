import { Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import routes from "./services/routes";
import NotFound from "./views/NotFound";

function App() {
  return (
      <ErrorBoundary>
        <div className="App">
            <Container fluid>
              <Row>
                <Col className={`${styles.SideBar} d-none d-lg-block`} lg={2}>
                  <SideBar />
                </Col>
                <Col className={styles.AppBlock} lg={10}>
                  <Header pageName='Home' />
                    <Switch>
                        {routes.map((route, i) => (
                            <Route exact path={route.path} key={i} component={route.component} />
                        ))}
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Col>
              </Row>
            </Container>
        </div>
      </ErrorBoundary>
  );
}

export default App;
