import { useIntl } from 'react-intl';
import { TableView } from '~/components';
import { apiKeys } from '~/configs';
import { useUser } from '~/hooks';
import { resourceKey, userTableData } from '../data';

const Browse = () => {
  const { formatMessage: t } = useIntl();
  const { getUsers } = useUser();
  const { data, isLoading } = getUsers();

  return isLoading ? (
    'Loading...'
  ) : (
    <TableView
      apiKey={apiKeys.users}
      entityKey={resourceKey}
      rows={data}
      loading={isLoading}
      columns={userTableData(t)}
    />
  );
};

export default Browse;
