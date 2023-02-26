import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Aboutus() {
  return (
    <React.Fragment>
      <Header />
      <main id="main">
        <div
          class="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(../assets/img/breadcrumbs-bg.jpg)" }}
        >
          <div class="container position-relative d-flex flex-column align-items-center">
            <h2>About</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About</li>
            </ol>
          </div>
        </div>

        <section id="alt-services" class="alt-services">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div
                class="col-lg-6 img-bg"
                style={{ backgroundImage: "url(../assets/img/alt-services.jpg)" }}
              ></div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>MIDMAC General Trading</h3>
                <p>
                  MIDMAC was established in 2014 and is currently led by its CEO, Mr. Thani Jumaa Al
                  Rumaithi, a highly reputable name in the UAE. Our main objective is to provide
                  local companies in the region with the most cost-effective products and solutions
                  in a timely manner. We strive to utilize the most effective technologies and
                  practices to serve various sectors, including:
                </p>

                <ul class="sector-list">
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Oil & Gas
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Power
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Refining
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Petrochemicals
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Marine
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Major &amp; Small Industries
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Utility &amp; Infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-services-2" class="alt-services section-bg">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus
                  maxime minima iste magni sit praesentium assumenda minus. Amet rerum saepe tempora
                  vero.
                </p>

                <div class="icon-box d-flex position-relative">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" class="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident
                    </p>
                  </div>
                </div>

                <div class="icon-box d-flex position-relative">
                  <i class="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" class="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>

                <div class="icon-box d-flex position-relative">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" class="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit.
                      Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>

                <div class="icon-box d-flex position-relative">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" class="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit
                      non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 img-bg"
                style={{ backgroundImage: "url(../assets/img/alt-services-2.jpg)" }}
              ></div>
            </div>
          </div>
        </section>

        <section id="team" class="team">
          <div class="container">
            <div class="section-header">
              <h2>Our Team</h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt
                dolores placeat sunt id nobis omnis tiledo stran delop
              </p>
            </div>

            <div class="row gy-5">
              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum
                    distinctio dire flow
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod
                    dolores exercitationem ut
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut
                    praesentium vel tque sed facilis at qui
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et
                    veniam quasi quam consectetur
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-5.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Brian Doe</h4>
                  <span>Marketing</span>
                  <p>
                    Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt
                    doloribus quia impedit laborum velit
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 member">
                <div class="member-img">
                  <img src="assets/img/team/team-6.jpg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Josepha Palas</h4>
                  <span>Operation</span>
                  <p>
                    Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et
                    omnis fugit eligendi cupiditate vel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="testimonials section-bg">
          <div class="container">
            <div class="section-header">
              <h2>Testimonials</h2>
              <p>
                Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim
                velit qui ut et autem uia reprehenderit sunt deleniti
              </p>
            </div>

            <div class="slides-2 swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                        suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                        Maecen aliquam, risus at semper.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem
                        cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
                        noster fugiat irure amet legam anim culpa.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla
                        quem veniam duis minim tempor labore quem eram duis noster aute amet eram
                        fore quis sint minim.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export
                        minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt
                        elit fore quem dolore labore illum veniam.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                        noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat
                        legam esse veniam culpa fore nisi cillum quid.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Aboutus;
