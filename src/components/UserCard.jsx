import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UserDetails.module.scss';

const Name = ({ name }) => (<h5>{name}</h5>);
Name.propTypes = {
  name: PropTypes.string.isRequired,
};

const LinkedName = ({ name, id }) => (<Link to={`users/${id}`}><Name name={name} /></Link>);
LinkedName.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const Buttons = ({ id }) => (
  <Row xs={1} md={2}>
    <Col><Link to="/">View User</Link></Col>
    <Col><Link to={`/users/${id}/articles`}>View Articles</Link></Col>
  </Row>
);
Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};

const UserCard = ({
  id, name, email, avatar, biography,
}) => (
  <Col>
    <div className={styles.Block}>
      <Row xs={1} md={2}>
        <Col>
          <Image src={avatar} alt={name} />
        </Col>
        <Col>
          {id ? <LinkedName id={id} name={name} /> : <Name name={name} />}
          <p className={styles.SubTitle}>{email}</p>
          <p className={styles.Description}>{biography}</p>
        </Col>
      </Row>
      <Buttons id={id} />
    </div>
  </Col>
);
UserCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  id: '',
};

export default UserCard;
