import React from 'react';
import Button from '@material-ui/core/Button';

const noClickFunction = () => {
    return;
};

export const PrimaryButton = (props) => {
    return (
        <a href={props.buttonLink}>
            <Button
                style={{ fontSize: '1.6rem', ...props.styles }}
                onClick={props.handleClick ? props.handleClick : noClickFunction()}
                variant='contained' color='primary' size='large'
                type={props.type}
            >
                {props.buttonText}
            </Button>
        </a>
    );
};

export const SecondaryButton = (props) => {
    return (
        <div>
            <Button
                style={{ color: 'white', borderWidth: '2px', ...props.styles }}
                value={props.value || ''}
                onClick={props.handleClick ? props.handleClick : noClickFunction()}
                variant='outlined' color='secondary'
                target={props.target}
            >
                {props.buttonText}
            </Button>
        </div>
    );
}
