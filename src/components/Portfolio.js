import React from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';


import { SecondaryButton } from './buttons/Buttons';

const PortfolioGrid = (props) => {

    const useStyles = makeStyles(theme => ({
        primaryButton: {
            fontSize: '16px',
            color: '#ffffff',
            background: 'transparent',
            border: '2px solid #3f52b5',
            borderRadius: '20px',
        },
        GridList: {
            margin: '-5px',
            paddingBottom: '10px'
        },
        GridListItem: {
            padding: '0 !important'
        },
        GridContainer: {
            [theme.breakpoints.up('md')]: {
                maxHeight: '65rem',
                overflow: 'scroll',
            },
        }
    }));

    const classes = useStyles();


    // const renderButton = () => {
    //     props.data.forEach((item) => {
    //         if (item.link && item.link.includes('.com')) {
    //             return (
    //                 <div>

    //                 </div>
    //             );
    //         } 
    //     }
    // }

    // renderButton();

    const renderList = () => {
        // return props.data.slice(0, props.limit).map((item) => {
        return props.data.map((item) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={item.name}>
                    <Card
                        style={{
                            backgroundImage: `url('${item.image}')`,
                            backgroundSize: item.bgSize,
                            backgroundColor: item.bgColor,
                            boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.6)'
                        }}
                        className='gridListTile'>
                        <div className='overlay'></div>
                        <div className='infobar'>
                            <Grid container spacing={2} className={classes.GridList}>
                                {item.tags.map((tags) => (
                                    <Grid item xs={4} key={tags} className={classes.GridListItem}>
                                        <Flip left cascade>
                                            <div className='listItems'>
                                                <p>{tags}</p>
                                            </div>
                                        </Flip>
                                    </Grid>
                                ))}
                            </Grid>
                            {item.link.includes('.com') ?
                                <a href={item.link}>
                                    <SecondaryButton
                                        buttonText='Take a Look'
                                        styles={{ fontSize: '1.4rem', borderRadius: '2rem', width: '100%' }}
                                        target='_blank'
                                    />
                                </a>
                                :
                                <Link to={item.link}>
                                    <SecondaryButton
                                        buttonText='Take a Look'
                                        buttonLink={item.link}
                                        styles={{ fontSize: '1.4rem', borderRadius: '2rem', width: '100%' }}
                                        target='_blank'
                                    />
                                </Link>
                            }
                        </div>
                    </Card>
                </Grid>
            );
        });
    };
    return (
        <Grid className={classes.GridContainer} container spacing={3}>
            <FlipMove typeName={null}>
                {renderList()}
            </FlipMove>
        </Grid>
    )
}

export default PortfolioGrid;