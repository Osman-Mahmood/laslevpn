import React from 'react'
import './Testimonial.css'
import lady from '../../assets/Testimonialimg/lady.png'
import left from '../../assets/Testimonialimg/left.png'
import right from '../../assets/Testimonialimg/right.png'
import group from '../../assets/Testimonialimg/group.png'
function Testimonial() {
    return (
        <div>
             <section id="Testimonials">
     <div className="testimonials wrapper">
       <div className="container">
         <div className="row mt-5">
           <div className="col-sm-12">
             <div className="text-content text-center">
              <h1 className="mt-5">Trusted by Thousands of<br/> Happy Customer</h1>
              <p>
                  These are the stories of our customers who have joined us with great<br/>pleasure when using this crazy feature.
              </p>
             </div>
           </div>
         </div>
         <div className="row text-center mt-5 spaces justify-content-center">
         <div className="col-md-4 border border-danger rounded shadow ">
            <div className="client-info">
                <div className="client-img">
                    <img src={lady} alt="no-connection" />
                    <h5 className="mt-2 ">Vizeh Robert<br/><p>Warsaw,Poland</p></h5>
                    <p className="client-star">4.5 </p>
                    <i className="fas fa-star mt-4 ml-5"></i>
                    </div>
                   <p className="client-review mt-3 justify-content-start text-start">
                       "Wow...I am very happy to use this vpn.It turned out to be more than my expectation and so far there have no be a problem.LaslesVPN is always the best"
                   </p>
                </div>   
         </div>
       <div className="col-md-4 col-sm-10 rounded mr-3 spaces">
            <div className="client-info">
                <div className="client-img">
                    <img src={lady} alt="no-connection" />
                    <h5 className="mt-2">Vizeh Robert<br/><p>Warsaw,Poland</p></h5>
                    <p className="client-star">4.5 </p>
                    <i className="fas fa-star mt-4 ml-5"></i>
                    </div>
                   <p className="client-review mt-3 justify-content-start text-start">
                       "Wow...I am very happy to use this vpn.It turned out to be more than my expectation and so far there have no be a problem.LaslesVPN is always the best"
                   </p>
                </div>  
                 </div>
                 
                 <div className="col-md-4 col-sm-12 ml-5  rounded ">
            <div className="client-info">
                <div className="client-img">
                    <img src={lady} alt="no-connection" />
                    <h5 className="mt-2">Vizeh Robert<br/><p>Warsaw,Poland</p></h5>
                    <p className="client-star">4.5 </p>
                    <i className="fas fa-star mt-4 ml-5"></i>
                    </div>
                   <p className="client-review mt-3 justify-content-start text-start">
                       "Wow...I am very happy to use this vpn.It turned out to be more than my expectation and so far there have no be a problem.LaslesVPN is always the best"
                   </p>
                  
                </div>   
               
                </div>
                <div className="row">
                    <div className="col-md-6">
                <img className="group" src={group} alt="no-connection" />
                </div>
                <div className="col-md-6">
                <img className="left-image" src={left} alt="no-connection" />
                <img className="left-image" src={right} alt="no-connection" />
                </div>
         </div>
         </div>
         </div>
         </div>
         </section>
        </div>
    )
}

export default Testimonial
