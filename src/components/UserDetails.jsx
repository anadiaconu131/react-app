import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import styles from './UserDetails.module.scss';
import { useUserConsumer } from '../services/UserContext';

const UserDetails = () => {
  const {
    id, nickname, biography, avatar,
  } = useUserConsumer();
  return (
    <div className={styles.Block}>
      <Row>
        <Col lg={2} sm>
          <Image src={avatar} thumbnail />
        </Col>
        <Col lg={10} sm>
          <h3 className="mb-0">{nickname}</h3>
          <span className={styles.SubTitle}>
            (
            {id}
            )
          </span>
          <p>{biography}</p>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetails;
