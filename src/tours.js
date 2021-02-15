import React from 'react';
import Tour from './tour';
import {FaAngellist} from "react-icons/fa";

const Tours = ({tours, removeTour}) => {
    return (
        <section>
           <div className='title'> 
           <h2 >
               Ours Tours
           <FaAngellist className="col" />
        
          
           </h2>
           <div className='underline'></div>
           </div>
           <div>
               {tours.map((tour)=>{
                   return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
               })}
           </div>


        </section>
    );
};

export default Tours;