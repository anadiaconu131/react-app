import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';

import Card from './Card';
import useRequest from '../hooks/useRequest';
import REQUEST_STATUS from '../constants';

const DataList = ({
  title, url, processData,
}) => {
  const {
    data, requestStatus, error,
  } = useRequest([], url, processData);

  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <ReactPlaceholder
      type="media"
      rows={10}
      ready={requestStatus === REQUEST_STATUS.SUCCESS}
    >
      <h2>{title}</h2>
      <Row xs={1} md={3} className="g-4">
        { data.map((item) => <Card key={item.id} {...item} />) }
      </Row>
    </ReactPlaceholder>
  );
};

DataList.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  url: PropTypes.string.isRequired,
  processData: PropTypes.func.isRequired,
};

export default DataList;
