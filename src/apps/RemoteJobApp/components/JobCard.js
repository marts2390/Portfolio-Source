import React from 'react'
import { Button } from 'reactstrap'
import ReactHtmlParser from 'html-react-parser';
import moment from 'moment';

const JobCard = (props) => {
    return (
        <div>
            {
                props.payload.map((job, index) => (
                    <div key={index}>
                        <div className='jobcard'>
                            <div className='inner'>
                                <div className='jobcard_title'>
                                    {
                                        job.company_logo ?
                                            <div className='jobcard_title_img'
                                                style={{ backgroundImage: `url(${job.company_logo}` }}>
                                            </div>
                                            :
                                            ''
                                    }
                                    <div>
                                        <a href={job.url} target='_blank' without rel="noopener noreferrer"><h2 className='jobcard_position' key={job.position}>{job.position}</h2></a>
                                        <h3 className='jobcard_company' key={job.company}>{job.company}</h3>
                                        <h5 key={job.date}>{moment(job.date).fromNow()}</h5>
                                    </div>
                                </div>
                                <p className='jobcard_description' key={job.description}>
                                    {
                                        ReactHtmlParser(job.description.replace(/[^a-zA-Z0-9]/g, ' ')) + '...'
                                    }
                                </p>
                                <ul className='jobcard_list'>
                                    {job.tags.map((tag, index) =>
                                        <button disabled className='jobcard_tag' key={tag + index} onClick={props.filterList}>{tag}</button>
                                    )}
                                </ul>
                                <div className='jobcard_buttons'>
                                    <a key={job.url} href={job.url} target="_blank" rel="noopener noreferrer">
                                        <Button className='jobcard_btn'>Full Description</Button>
                                    </a>
                                    <a key={job.url[index]} href={`https://remoteok.io/l/${job.id}`} target="_blank" rel="noopener noreferrer">
                                        <Button className='jobcard_btn'>Apply!</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default JobCard;