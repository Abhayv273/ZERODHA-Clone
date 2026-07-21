import React from 'react';

function Hero() {
    return ( 
      <section className="container-fluid" id="supportHero" style={{backgroundColor:"rgb(54, 87, 234)"}}>
      <div className="row p-5 " id="supportWrapper" style={{marginTop:"70px"}}>
        <h4 className='col-10 '>Support Portal</h4>
        <a className='col-2' href="/"><u>Track Tickets</u></a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O " />
          <br />
          <ol className="sup pt-3">
             <li> <a href="/support"><u>Track account opening</u></a></li>
              <li><a href="/support"> <u>Track segment activation</u></a></li>
             <li> <a href="/support"> <u>Intraday margins</u></a></li>
             <li><a href="/support">  <u>Kite user manual</u></a></li>
          </ol>
         
          
         
          
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="/support"><u>Current Takeovers and Delisting - January 2024</u></a>
            </li>
            <li>
              <a href="/support"><u> Intraday leverages - MIS & CO</u></a>
            </li>
          </ol>
        </div>
      </div>
    </section>
 );
}

export default Hero;