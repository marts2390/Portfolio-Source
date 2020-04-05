import React from 'react';

export default class SecondaryFilter extends React.Component {
    handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.value.toLowerCase();
        this.props.filterList(filter);
    };
    render() {
        return (
            <div>
                {
                    this.props.tags.map((tags, index) => (
                        <li className='allfilters_list_item' key={index}>
                            <button className='allfilters_list_item_btn btn' key={index} value={tags} onClick={this.handleFilter}>{tags}</button>
                        </li>
                    ))
                }
            </div>
        )
    }
}