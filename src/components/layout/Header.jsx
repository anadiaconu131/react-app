import React from 'react';
import {
  Container, Image, Row, Col,
} from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => (
  <Container className={`mb-5 ${styles.Block}`}>
    <Row className="justify-content-between">
      <Col>
        <Image className={styles.Image} alt="React app" src="/logo192.png" />
      </Col>
      <Col>
        <h4 className={styles.Title}>React Testing App</h4>
      </Col>
      <Col>
        <span className={styles.Title}>
          Hello Mr. Smith &nbsp;&nbsp;
          <span>
            <a href="/">sign-out</a>
          </span>
        </span>
      </Col>
    </Row>
  </Container>
);

export default Header;
