import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';
import ErrorBoundary from './components/ErrorBoundary';
import routes from './routes/routes';
import NotFound from './views/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Container fluid>
          <Row>
            <Col className={`${styles.SideBar} d-none d-lg-block`} lg={1}>
              <SideBar />
            </Col>
            <Col className={styles.AppBlock} lg={11}>
              <Header pageName="Home" />
              <Switch>
                {routes.map((route, i) => (
                  // eslint-disable-next-line react/no-array-index-key
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
