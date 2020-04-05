import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { removeItem } from '../actions/items';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import getFilteredItems from '../selectors/getFilteredItems';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Fade from 'react-reveal/Fade';

const List = (props) => {

    return (
        <Grid container spacing={3}>
            {props.items.map((item, index) => (
                <Grid item md={3} key={index}>
                    <Fade>
                        <Paper variant="outlined" elevation={6}>
                            <Card>
                                <CardContent id={'item' + index}>
                                    <h4 className='transition'>{item.note}</h4>
                                    <p className='transition'>Created at {moment(item.createdAt).format('hh:mm a')}</p>
                                </CardContent>
                                <CardActions>
                                    <Button variant='contained' color='primary' onClick={(() => {
                                        props.dispatch(removeItem({ id: item.id }))
                                    })}>Remove</Button>
                                    <Button variant='contained' color='primary'
                                        onClick={() => {
                                            props.toggleClass(index)
                                        }}>
                                        {props.selected ? 'Unselect' : 'Select'}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Fade>
                </Grid>
            ))}
        </Grid>
    )
};

const mapStateToProps = (state) => {
    return {
        items: getFilteredItems(state.expenses, state.filters),
    };
};


export default connect(mapStateToProps)(List);
