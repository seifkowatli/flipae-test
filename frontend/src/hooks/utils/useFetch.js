import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { defaultHost, storageKeys } from '~/configs';

export const useFetch = (
  resource,
  withAuth = true,
  host = defaultHost,
  configs = {}
) => {
  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    authorization: withAuth ? `Bearer ${Cookies.get(storageKeys.token)}` : null,
  });

  return (urlParams = '', queryParams = '') =>
    useQuery(
      `${resource}${urlParams}${queryParams}`,
      async () => {
        let res = await fetch(`${host}${resource}${urlParams}${queryParams}`, {
          headers,
        });

        if (!res.ok) {
          tempRes = await res.json();
          throw new Error(res.status);
        }
        return res.json();
      },
      { ...configs }
    );
};
