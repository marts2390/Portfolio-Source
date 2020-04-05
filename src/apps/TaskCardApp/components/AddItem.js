import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
    }

    handleOption = (e) => {
        e.preventDefault();
        const item = e.target.elements.note.value.trim();
        if (item.length > 0) {
            this.props.dispatch(addItem({
                note: item,
                createdAt: moment().unix()
            }));
            this.setState({ error: undefined })
        } else {
            this.setState({ error: 'Oops try again!' })
        }
    }
    render() {
        return (
            <div className='textfield'>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form onSubmit={this.handleOption}>
                    <TextField fullWidth variant='filled' type='text' name='note' label='Make a Note' />
                    <Button style={{marginTop: '20px'}} size='large' color='primary' variant='contained' type='submit'>Add an Item</Button>
                </form>
            </div>
        )
    };
};

export default connect()(AddItem)