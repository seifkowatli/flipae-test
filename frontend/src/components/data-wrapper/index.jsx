import React from 'react';
import { useFetch } from '~/hooks';
import { useApp } from '~/providers';

const DataWrapper = ({
  children,
  resourceKey,
  urlParams,
  queryParams,
  dataFormatter = null,
  fetchConfig = [],
}) => {
  const { App } = useApp();
  const fetchAction = useFetch(resourceKey, ...fetchConfig);
  const { isLoading, data, isError , error } = fetchAction(urlParams, queryParams);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return dataFormatter
    ? children(dataFormatter(data, App?.preferences?.lang))
    : children(data, App?.preferences?.lang);
};

export default DataWrapper;
