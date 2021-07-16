import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Title = ({ title }) => (<h5>{title}</h5>);
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

const LinkedTitle = ({ title, id }) => (<Link to={`users/${id}`}><Title title={title} /></Link>);
LinkedTitle.propTypes = {
  title: PropTypes.string.isRequired,
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

const Card = ({
  id, title, subtitle, thumbnail, description, fullDisplay,
}) => (
  <Col>
    <div className={styles.Block}>
      <Row xs={1} md={fullDisplay ? 1 : 2}>
        <Col>
          <Image className="w-100" src={thumbnail} alt={title} />
        </Col>
        <Col>
          {id ? <LinkedTitle id={id} title={title} /> : <Title title={title} />}
          <p className={styles.SubTitle}>{subtitle}</p>
          <p className={styles.Description}>{description}</p>
        </Col>
      </Row>
      <Buttons id={id} />
    </div>
  </Col>
);
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  fullDisplay: PropTypes.bool,
};

Card.defaultProps = {
  id: '',
  fullDisplay: false,
};

export default Card;
