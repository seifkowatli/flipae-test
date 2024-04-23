import * as Yup from 'yup';
import { apiKeys } from '~/configs';
import { dropdownDataFormatter } from '~/helpers';

export const validationSchema = t =>  Yup.object().shape({
  name: Yup.string().required(t({ id: 'validation.required' })),
  email: Yup.string().email(t({id : 'validation.email'})).required(t({ id: 'validation.required' })),
  job: Yup.string().required(t({ id: 'validation.required' })),
  supervisor: Yup.object().nullable(),
});

export const fields = [
  { name: 'name' },
  { name: 'email' },
  { name: 'job', width: '100%' },
  {
    name: 'supervisor',
    type: 'dropdown',
    withFetch: true,
    width: '100%',
    fetchProps: {
      resourceKey: apiKeys.users,
    },
    dataFormatter: dropdownDataFormatter('_id', 'name'),
  },
];


