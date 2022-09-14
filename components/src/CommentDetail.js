import React from 'react';
import Faker from 'faker';
import logo from './img1.jpg';
const CommnetDetail = (props) =>{

    return(
        <div className='comments'>
        <a href='/' className='avatar'>
            <img alt='avatar'  src={logo} style={{height:'100px'}}/>
        </a>
        <div className='content' style={{display : 'inline-block'}}>
            <a href='/' className='author'>
                {props.author}
            </a>
            <div className='metadata' style={{display : 'inline-block'}}>
                <span className='date' >
                    Date and Time
                </span>
            </div>
            <div className='text'>
                Nice Blog Post
            </div>
        </div>
    </div>
    );
};

export default CommnetDetail;