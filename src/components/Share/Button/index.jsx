import React from 'react';
import CustomButton from './styles/index';

const Button = ({
    text,
    variant,
    type='button',
}) => (
  <CustomButton type={type} variant={variant}>{text}</CustomButton>
    )

export default Button;
