import React from 'react';
import { Button } from 'reactstrap';

class TextFilter extends React.Component {
    state = {
        error: undefined
    }
    handleTextInput = (e) => {
        e.preventDefault()
        const text = e.target.elements.text.value.trim();
        if (text === '') {
            this.setState({
                error: true
            })
        } else {
            this.props.filterList(text);
        }
    }
    render() {
        return (
            <div>
                <form className='textfilter_form' onSubmit={this.handleTextInput} >
                    <input className='textfilter_input' name='text' type='text' />
                    <Button className='textfilter_btn'>Search</Button>
                </form>
            </div>
        )
    }
}
export default TextFilter;

