import React from 'react';
import {CustomButton} from './styles/index';

const Button = ({
    text,
    variant,
    type='button',
}) => {

    return (
        <CustomButton type={type} variant={variant} >{text}</CustomButton>
    );
}

export default Button;