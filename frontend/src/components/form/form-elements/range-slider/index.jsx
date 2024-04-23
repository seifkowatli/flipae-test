import { Box, Slider } from '@mui/material';
import React, { forwardRef } from 'react';

const RangeSlider = forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      value,
      formKey,
      step = 10,
      min = 10,
      max = 100,
      ...rest
    },
    ref
  ) => {
    return (
   
      <Box>
        <Slider
          size="medium"
          value={value}
          onChange={onChange}
          name={name}
          defaultValue={value}
          valueLabelDisplay="auto"
          shiftStep={10}
          step={10}
          min={10}
          max={100}
          {...rest}
        />
      </Box>
    );
  }
);

export default RangeSlider;
