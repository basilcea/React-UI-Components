/* eslint-disable no-undef */
import React from  'react';
import './Footer.css';

const Footer = ({retweets ,likes}) =>{
    return (
        <div className='footer'>
            <div className='footer-socials'>
                <button>
                <i className="far fa-comment"></i> 
                </button>
                <button>
                
                <i className="fas fa-retweet"></i> {retweets}
                </button>
                <button>
                <i className="far fa-heart"></i> {likes}
                </button>
                <button>
                <i className="far fa-envelope-open"></i>
                </button>

            </div>
        </div>
    )
}

export default Footer