import {
    dropdownEntryFormatter,
    extractDropdownValue
  } from '~/helpers';
  
  export const addUserFormatter = [
    //permissions formatter
    requestObject => ({
      ...requestObject,
      supervisor: extractDropdownValue(requestObject?.supervisor),
    }),
  ];
  
  export const editUserFormatter = [
    requestObject => ({
      ...requestObject,
      supervisor: dropdownEntryFormatter('_id', 'name', requestObject.supervisor),
    }),
  ];
  
  
  