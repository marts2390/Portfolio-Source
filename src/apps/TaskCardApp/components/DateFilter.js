import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../actions/filters';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const DateFilter = (props) => {

    const [selected, setSelectedItem] = useState('');

    return (
        <FormControl>
            <InputLabel>Sort By</InputLabel>
            <Select
                style={{ minWidth: '250px', margin: '20px 0' }}
                variant='filled'
                value={selected}
                onChange={(e) => {
                    props.dispatch(sortBy(e.target.value))
                    setSelectedItem(e.target.value)
                }}
            >
                <MenuItem value='newest'>Latest</MenuItem>
                <MenuItem value='earlist'>Earliest</MenuItem>
            </Select>
        </FormControl>
    )
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(DateFilter);