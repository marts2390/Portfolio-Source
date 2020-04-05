import React from 'react'
import { Grid, Button } from '@material-ui/core';

class Filters extends React.Component {
    handleFilter = (e) => {
        e.preventDefault();
        const filter = e.currentTarget.value.toLowerCase();
        this.props.filterList(filter);
    };
    render() {
        return (
            <div className='mainfilters'>
                <ul className='mainfilters_list'>
                    <Grid container spacing={2}>
                        {
                            this.props.filters.map((filter, index) => (
                                <Grid item sm={6} md={2} key={index}>
                                    <li className='mainfilters_list_item'>
                                        <Button style={{fontSize: '1.4rem', borderRadius: '2rem'}} variant='outlined' color='primary' size='large' key={filter} value={filter} onClick={this.handleFilter}>{filter}</Button>
                                    </li>
                                </Grid>
                            ))
                        }
                    </Grid>
                </ul>
            </div>
        )
    }
}

export default Filters;