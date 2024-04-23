import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '~/hooks';
import { useNotifications } from '~/providers';
import { Pipeline, isEmpty } from '~/utils';
import { resourceKey } from '../data';
import {
  addUserFormatter,
  editUserFormatter
} from '../formatters';
import UserForm from '../partials/user-form';

const Edit = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [editData, setEditData] = useState({});
  const { id } = useParams();
  const { notify } = useNotifications();
  const { formatMessage: t } = useIntl();
  const { getUsers, editUser } = useUser();
  const { isLoading: editLoading, mutate } = editUser(`/${id}`);
  const { data, isLoading } = getUsers(`/${id}`);

  const addUserFormatterPipeline = new Pipeline(addUserFormatter);
  const editUserFormatterPipeline = new Pipeline(editUserFormatter);

  useEffect(() => {
    if (!isEmpty(data) && !isLoading) {
      console.log();
      setEditData(editUserFormatterPipeline.run(data));
    }
  }, [data, isLoading]);

  const submitAction = data => {
    mutate(addUserFormatterPipeline.run(data), {
      onSuccess: data => {
        notify(
          'success',
          `${t({ id: `${resourceKey}.singular` })} 
           ${t({ id: 'addedSuccessfully' })}`
        );
        navigate(pathname.split('/').slice(0, -2).join('/'));
      },
    });
  };

  if (isEmpty(editData) || isLoading) return 'Loading...';
  return (
    <UserForm
      defaultValues={editData}
      formType="edit"
      loading={editLoading}
      submitAction={submitAction}
    />
  );
};

export default Edit;
