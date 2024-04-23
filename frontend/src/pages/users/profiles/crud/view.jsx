import { useParams } from 'react-router-dom';
import { EntityView } from '~/components';
import { useUser } from '~/hooks';
import { getViewUser, resourceKey } from '../data';

const View = () => {
  const { id } = useParams();
  const { getUsers } = useUser();
  const { data, isLoading } = getUsers(`/${id}`);

  if (isLoading) return 'Loading...';
  return (
    <EntityView
      entityKey={resourceKey}
      entity={getViewUser(data)}
    />
  );
};

export default View;
