import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';

import styles from './UserDetails.module.scss';
import useRequest from '../hooks/useRequest';
import REQUEST_STATUS from '../constants';

const UserTitle = ({ name, createdAt }) => (
  <div>
    <span className={styles.Title}>{name}</span>
    <span className={styles.SubTitle}><FontAwesomeIcon icon={faAddressCard} /> {createdAt}</span>
  </div>
);
UserTitle.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

const UserJob = ({ jobTitle, jobDescription }) => (
  <div>
    <Link className={styles.JobTitle} to="/">{jobTitle}</Link>
    <p className={styles.SubTitle}>{jobDescription}</p>
  </div>
);
UserJob.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
};

const UserDescription = ({ biography }) => (
  <p className={styles.Biography}>{biography}</p>
);
UserDescription.propTypes = {
  biography: PropTypes.string.isRequired,
};

const UserDetails = () => {
  const defaultUser = {
    id: '',
    avatar: '',
    name: '',
    createdAt: '',
    jobTitle: '',
    jobDescription: '',
    biography: '',
  };
  const { id } = useParams();
  const {
    data: user, requestStatus, error,
  } = useRequest(defaultUser, `users/${id}`);

  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <ReactPlaceholder
      type="media"
      rows={10}
      ready={requestStatus === REQUEST_STATUS.SUCCESS}
    >
      <Row>
        <Col xs={1} md={2}>
          <Image src={user.avatar} alt={user.name} thumbnail />
        </Col>
        <Col xs={1} md={10}>
          <UserTitle name={user.name} createdAt={user.createdAt} />
          <UserJob jobTitle={user.jobTitle} jobDescription={user.jobDescription} />
          <UserDescription biography={user.biography} />
        </Col>
      </Row>
    </ReactPlaceholder>
  );
};

export default UserDetails;
