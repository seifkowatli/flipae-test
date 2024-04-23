import { useMemo } from 'react';
import { useApp } from '~/providers';
import { isEmpty } from '~/utils';
import {
  getPermissionsArray,
  isHaveOneOfPermissions,
  isHavePermission,
} from '~/utils/permissions.utils';

export const usePermissions = () => {
  const { App } = useApp();

  const userPermissionsArray = isEmpty(App?.user?.roles)
    ? []
    : getPermissionsArray(App?.user?.roles);

  const userHavePermission = requiredPermission =>
    isHavePermission(userPermissionsArray, requiredPermission);

  const useHaveOneOfPermissions = requiredPermissions =>
    isHaveOneOfPermissions(userPermissionsArray, requiredPermissions);

  return { userPermissionsArray, userHavePermission , useHaveOneOfPermissions };
};
