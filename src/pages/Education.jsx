import "./Education.css";
import { FaGraduationCap,FaBuilding }  from "react-icons/fa6";
import { AiFillIdcard } from "react-icons/ai";

export default function Education() {
  return (
    <div className="container-fluid mt-5" id="Education">
      <div>
        <h1 className="project-title mx-4 fs-1 fw-bold  " style={{ textAlign: "justify" }}>
          Education
        </h1>
        <div class="lines2"></div>
      </div>
      <div className="container-fluid mt-5 mb-5  d-flex justify-content-center"  data-aos="zoom-in">
        <section className="timeline_area section_padding_130">
          <div className="container-fluid ">
            <div className="row justify-content-center "></div>
            <div className="row">
              <div className="col-12">
                {/* <!-- Timeline Area--> */}
                <div className="apland-timeline-area">
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area ">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "5s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2024</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9  ">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "5s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                           <span className="text-white fs-4"> <FaGraduationCap/></span>
                          </div>
                          <div className="timeline-text">
                            <h6> Bachelor's Degree (E.C.E)</h6>
                            <p>Godavari Institute of Engineering and Technology,Rajahmundry,AndhraPradesh</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">→</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2020</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          style={{
                            visibility: "visible",
                            animationDelay: "5s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                            <span className="text-white fs-4"> <FaBuilding/> </span>
                          </div>
                          <div className="timeline-text">
                            <h6>
                            Intermediate (M.P.C)</h6>
                            <p>TLMSM Juniour College,Ongole,AndhraPradesh</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">→</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div
                      className="timeline-date wow fadeInLeft"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p>2018</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-9">
                        <div
                          className="single-timeline-content d-flex wow fadeInLeft"
                          data-wow-delay="0.3s"
                          id="line"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <div className="timeline-icon">
                            <span className="text-white fs-4"> <AiFillIdcard/> </span>
                          </div>
                          <div className="timeline-text">
                            <h6>High School Degree</h6>
                            <p>
                          Apex High School, Ongole, AndhraPradesh
                            </p>
                          </div>
                          <div className="go-corner" href="#">
                            <div className="go-arrow">→</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}