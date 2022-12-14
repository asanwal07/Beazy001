
import React from "react";

import image1 from '../images/img-shop.jpg';

function Testimo() {
      return (
            <div class="Testimo-Main-Container">
                  <div class="Testimo-Heading">
                        <div class="Testimo-heading-box">
                              <h1 >Testimonials</h1>
                        </div>
                        <div class="Testimo-slogan-box">
                              <h4>Let's Hear from our customers lorem ipsum dummy Dummy</h4>
                        </div>
                        <div className="subContent">

                              <div className="Content-holder">
                                    <div className="img-name-holder">
                                          <div className="Content-img">
                                                <img src={image1} alt="hi" />
                                          </div>
                                          <div className="name-descrip">
                                                <h5>General Kirana</h5>
                                                <p>Beazy user,Haldwani</p>
                                          </div>
                                    </div>
                                    <div className="Content-description">

                                          <p>Decrease our pen and paper work.Increased our revenues.Helps in updating stocks.</p>
                                    </div>
                              </div>
                              <div className="Content-holder">
                                    <div className="img-name-holder">
                                          <div className="Content-img">
                                                <img src={image1} alt="hi" />
                                          </div>
                                          <div className="name-descrip">
                                                <h5>General Kirana</h5>
                                                <p>Beazy user,Haldwani</p>
                                          </div>
                                    </div>
                                    <div className="Content-description">

                                          <p>Decrease our pen and paper work.Increased our revenues.Helps in updating stocks.</p>
                                    </div>
                              </div>
                        </div>


                  </div>
                  <div class="Testimo-Content"></div>
            </div>
      )
}

export default Testimo;
// { display: "flex" }