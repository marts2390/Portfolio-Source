import React from 'react'
import { Container } from '@material-ui/core';
import shuffle from 'shuffle-array';
import PortfolioGrid from './Portfolio';
import SiteList from './SiteList';
import Filters from './Filters';


class PortfoloSection extends React.Component {
    state = {
        data: SiteList,
        initialState: SiteList,
        limit: 9,
        filters: [
            'JavaScript',
            'Wordpress',
            'Netsuite',
            'React',
            'E-Commerce'
        ]
    }

    handleShuffle = () => {
        this.setState({
            data: shuffle(this.state.initialState)
        })
    }

    handleFilter = (e) => {
        e.preventDefault();
        const data = this.state.initialState;
        const filter = e.currentTarget.value;
        let filteredList = data.filter(items => {
            return items.tags.includes(filter)
        });

        this.setState({
            data: filteredList
            // limit: this.state.data.length
        })
    }

    // onLoadMore = () => {
    //     this.setState({ limit: this.state.data.length })
    // }

    // onLoadLess = () => {
    //     this.setState({ limit: 9 })
    // }

    render() {
        return (
            <div id='portfolioSection' className='portfolio_section'>
                <Container maxWidth='md'>
                    <h2 className='title'>My Projects</h2>
                    <Filters handleShuffle={this.handleShuffle} handleFilter={this.handleFilter} filters={this.state.filters} />
                    <PortfolioGrid data={this.state.data} limit={this.state.limit} />

                </Container>
            </div>
        )
    }
}

export default PortfoloSection;
