import { apiKeys, defaultHost } from '~/configs';
import { useCrud, useFetch } from '../';

export const useUser = () => {
  const { add, edit, remove } = useCrud(apiKeys.users);
  //TODO switch to useFetch instead of using get
  const countUsers = type => get('/count', `?type=${type}`);
  const getCurrentUser = useFetch(`${apiKeys.users}/me`);
  const get = useFetch(apiKeys.users ,true , defaultHost , {cacheTime : 0});
  const getJudges = useFetch(`${apiKeys.users}/judges`);
  return {
    addUser: add,
    editUser: edit,
    getUsers: get,
    removeUser: remove,
    getCurrentUser,
    countUsers,
    getJudges,
  };
};
