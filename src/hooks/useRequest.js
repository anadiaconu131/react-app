import { useEffect, useState } from 'react';

import REQUEST_STATUS from '../constants';
import userApi from '../api/users';

const useRequest = (initialData, url, processData) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');
  const [requestStatus, setRequestStatus] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        setRequestStatus(REQUEST_STATUS.LOADING);
        const result = await userApi.getData(url);
        if (result) {
          if (processData) {
            setData(processData(result));
          } else setData(result);
        }
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILED);
        setError(e.message);
      } finally {
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      }
    }
    fetchUsers();
  }, [url, processData]);
  return {
    data, requestStatus, error,
  };
};

export default useRequest;
