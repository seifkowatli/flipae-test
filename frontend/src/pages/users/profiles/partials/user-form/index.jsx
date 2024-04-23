import { useNavigate } from 'react-router-dom';
import { FormBuilder, FormWrapper } from '~/components';
import { resourceKey } from '../../data';
import { fields, validationSchema } from './data';
import { useIntl } from 'react-intl';

const UserForm = ({ submitAction, formType, ...rest }) => {
  const navigate = useNavigate();
  const { formatMessage : t } = useIntl();
  return (
    <FormWrapper titleKey={resourceKey} typeKey={formType}>
      <FormBuilder
        fields={fields}
        validationSchema={validationSchema(t)}
        formKey={resourceKey}
        submitAction={submitAction}
        cancelProps={{
          onClick: () => navigate(-1),
        }}
        {...rest}
      />
    </FormWrapper>
  );
};

export default UserForm;
