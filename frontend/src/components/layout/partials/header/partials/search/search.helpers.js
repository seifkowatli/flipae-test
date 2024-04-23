import { navigationData } from "~/routes/navigation.data";

export const extractSearchList = (Intl, permissionChecker) => {
  const result = [];

  const traverse = navData => {
    for (const item of navData) {
      if (item.subItems) {
        traverse(item.subItems);
      } else if (permissionChecker(item.permissions)) {
        result.push({
          label: Intl.formatMessage({ id: item.label }),
          path: item.path,
        });
      }
    }
  };

  traverse(navigationData);

  return result;
};
