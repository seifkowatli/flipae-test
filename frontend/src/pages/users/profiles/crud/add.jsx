import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '~/hooks';
import { useNotifications } from '~/providers';
import { Pipeline } from '~/utils';
import { resourceKey } from '../data';
import { addUserFormatter } from '../formatters';
import UserForm from '../partials/user-form';

const Add = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { formatMessage: t } = useIntl();
  const { addUser} = useUser();
  const { isLoading, mutate } = addUser();

  const userFormatterPipeline = new Pipeline(addUserFormatter);
  
  const submitAction = data => {
    mutate(userFormatterPipeline.run(data), {
      onSuccess: data => {
        notify(
          'success',
          `${t({ id: `${resourceKey}.singular` })} 
           ${t({ id: 'updatedSuccessfully' })}`
        );
        navigate(pathname.split('/').slice(0, -1).join('/'));
      },
    });
  };

  return (
    <UserForm
      formType="add"
      submitAction={submitAction}
      loading={isLoading}
    />
  );
};

export default Add;
