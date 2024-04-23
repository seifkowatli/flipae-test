import { fields, validationSchema } from './partials/user-form/data';

export const resourceKey = 'users';

export const userTableData = t =>  [
    {
      field: 'name',
      headerName: t({ id: `${resourceKey}.name` }),
      width: 200,
    },
    {
      field: 'email',
      headerName: t({ id: `${resourceKey}.email` }),
      width: 200,
    },
    {
      field: 'job',
      headerName: t({ id: `${resourceKey}.job` }),
      width: 200,
    },
    {
      field: 'supervisor',
      headerName: t({ id: `${resourceKey}.supervisor` }),
      renderCell: ({ row }) => row?.supervisor?.name,
      width: 200,
    },
  ];

export const getViewUser = user => [
  { name: 'name', value: user.name },
  { name: 'email', value: user.email },
  {
    name: 'supervisor',
    value: `/users/${user?.supervisor?._id}`,
    type: 'link',
    isInternal: true,
    entityLabel: user?.supervisor?.name,
  },
  { name: 'email', value: user.job },
];

export const userFormData = {
  fields,
  validationSchema,
};
