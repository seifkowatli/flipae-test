export const getEditPath = pathname => {
  const path = pathname.split('/');
  path.splice(path.lastIndexOf('/'), 0, 'edit');
  return path.join('/');
};

export const latestEntriesFormatter = (entityPath, pathKey, labelKey) => (data) => {
  const getValue = (obj, keyPath) => {
    return keyPath.split('.').reduce((current, key) => {
      return current[key];
    }, obj);
  };

  return data.map(entry => ({
    label: getValue(entry, labelKey),
    path: `${entityPath}/${getValue(entry, pathKey)}`,
  }));
}


export const getFormFieldsNames = (fields) => fields.map(field => field.name);
