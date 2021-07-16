import React from 'react';
import { useParams } from 'react-router-dom';

import { buildArticlesData } from '../helpers/helpers';
import DataList from '../components/DataList';

const ArticlesList = () => {
  const { id } = useParams();

  return (
    <DataList title="Articles List" url={`users/${id}/articles`} processData={buildArticlesData} />
  );
};

export default ArticlesList;
