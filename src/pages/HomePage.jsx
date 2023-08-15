import React from "react";
import "../assets/bootstrap.css";
import "../assets/style.css";
import "../assets/responsive.css";
import Form from "../components/Form";

function HomePage() {
  return (
    <div>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section class="team_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Our <span>Doctors</span>
            </h2>
          </div>
          <div class="carousel-wrap">
            <div class="owl-carousel team_carousel">
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/team1.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>Hennry</h5>
                    <h6>MBBS</h6>
                    <div class="social_box">
                      <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
