import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import TextField from '@material-ui/core/TextField';

class TextFilter extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <TextField fullWidth variant='filled' name='text' type='text' label='Search' 
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                </form>
                {this.props.noMatches && <p>Oops, Try Again</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(TextFilter);
