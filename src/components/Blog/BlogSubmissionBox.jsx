import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogSubmissionBox(){
    const navigate = useNavigate();
    
    const boxStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15vh', 
        fontSize: '2vh'
    };

    const handleClick = () => {
        navigate('/create-blog-post');
    };

    return (
        <div style={boxStyle}>
            Have an article, <span onClick={handleClick} style={{color: 'blue', cursor: 'pointer'}}>click here </span> to publish your article
        </div>
    );
}

export default BlogSubmissionBox;
