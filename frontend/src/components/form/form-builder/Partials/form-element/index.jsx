import { forwardRef } from 'react';
import * as Elements from '../../../form-elements';

const FormElement = forwardRef(({ type, ...props }, ref) => {
  switch (type) {
    case 'password':
      return <Elements.Password ref={ref} {...props} />;
    case 'toggler':
    case 'checkbox':
      return <Elements.Toggler type={type} ref={ref} {...props} />;
    case 'dropdown':
      return <Elements.BasicSelect ref={ref} {...props} />;
    default:
      return <Elements.BasicInput  type={type} ref={ref} {...props} />;
  }
});

export default FormElement;
