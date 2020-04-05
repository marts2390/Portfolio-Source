import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Input(props) {
    return (
        <TextField
            fullWidth={props.fullWidth}
            label={props.label}
            variant={props.variant}
            type={props.text}
            name={props.name} />
    )
}