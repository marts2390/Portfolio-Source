import React from 'react';

const SkillsList = () => {
    const list = [
        'Javascript',
        'HTML5',
        'CSS3',
        'SCSS',
        'PHP',
        'Responsive',
        'Material UI',
        'Bootstrap',
        'AngularJS',
        'ReactJS',
        'jQuery',
        'ES6/7',
        'gulp',
        'npm',
        'Webpack',
        'Babel',
        'Wordpress',
        'Netsuite',
        'REST API',
        'Sketch'
    ];

    return (
        <div>
            {
                list.map((item) => {
                    return (
                        <p className='skillslist_item' key={item}>{item}</p>
                    )
                })
            }
        </div>
    )
};

export default SkillsList;