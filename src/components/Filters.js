import React from 'react';
import { SecondaryButton } from './buttons/Buttons';
import { Grid } from '@material-ui/core';

const Filters = (props) => {
    const classes = {
        filterContainer: {
            margin: '2rem 0'
        },
        buttons: {
            width: '100%',
            padding: '0.5rem 1rem',
        }
    }

    return (
        <div style={classes.filterContainer}>
            <Grid container spacing={1}>
                <Grid item xs={4} md={2} >
                    <SecondaryButton
                        className='filter-button'
                        styles={classes.buttons}
                        buttonText='All'
                        handleClick={props.handleShuffle} />
                </Grid>
                {props.filters.map((filter) => {
                    return (
                        <Grid item xs={4} md={2} key={filter}>
                            <SecondaryButton
                                className='filter-button'
                                styles={classes.buttons}
                                buttonText={filter}
                                value={filter}
                                handleClick={props.handleFilter} />
                        </Grid>
                    );
                })
                }
            </Grid>
        </div>
    )
}

export default Filters