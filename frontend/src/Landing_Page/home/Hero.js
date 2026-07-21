import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5 mb-5' >
        <div className='row text-center'>
           <img src="media/images/homehero.png" alt="HeroImage" className='mb-5'/>
           <h1 className='mt-5'>Invest in everthing</h1>
           <p>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
           <button className='p-1 btn btn-primary fs-5 mb-5' style={{width:"15%", margin:"0 auto"}}>Signup Now</button>
        </div>
       </div>
     );
}

export default Hero;