import React from 'react';
import DataWrapper from '~/components/data-wrapper';

const withDataWrapper = (Component, componentProps , DataWrapperProps) => {
  return props => {
    return (
      <DataWrapper {...DataWrapperProps}>
        {data => <Component {...props} {...componentProps} data={data} />}
      </DataWrapper>
    );
  };
};

export default withDataWrapper;
