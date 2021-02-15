import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
    const [readMore, setReadMore]=useState(false);
    return (
        <article className="container">
            <img src={image} alt={name}/>
            <footer >
                <div className="info">
                <h4 className="name">{name}</h4>
                <h4 className="price"> ${price}</h4>
                </div>
                <p className="paragrap">
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button className='btn1' onClick={() => setReadMore(!readMore)}>
                        {readMore? 'show less' : 'read more'}
                    </button>
                </p>
                <button className="btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    );
    
};

export default Tour;