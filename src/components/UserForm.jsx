import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

import PropTypes from 'prop-types';
import styles from './UserForm.module.scss';
import { useUserConsumer } from '../context/UserContext';

const UserForm = ({ handleSubmit, resetForm }) => {
  const { id } = useUserConsumer();
  const [nickname, setNickname] = useState('');
  const [biography, setBiography] = useState('');
  const clearData = () => {
    setNickname('');
    setBiography('');
    resetForm();
  };
  return (
    <div className="mb-3">
      <h4 className={styles.Title}>User Update Form</h4>
      <Form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit({
          nickname,
          biography,
        });
      }}
      >
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="id">
              <Form.Label>User ID:</Form.Label>
              <Form.Control type="text" disabled value={id} />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="nickname">
              <Form.Label>Nickname*:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nickname*"
                value={nickname}
                onChange={
                    (event) => {
                      setNickname(event.target.value);
                    }
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="biography">
          <Form.Label>Biography :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={biography}
            placeholder="Tell us more about yourself in less than 140 characters"
            onChange={
                (event) => {
                  setBiography(event.target.value);
                }
            }
          />
        </Form.Group>
        <Row>
          <Col xs lg="1">
            <Button variant="light" onClick={clearData}>Reset</Button>
          </Col>
          <Col xs lg="1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

UserForm.propTypes = {
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UserForm;
