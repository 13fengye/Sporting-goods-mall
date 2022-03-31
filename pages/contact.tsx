export default function Contact() {
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Contact Us</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="/index">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Contact Us</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start Contact Area Wrapper ==--> */}
        <section className="contact-area contact-page-area">
          <div className="container">
            <div className="row contact-page-wrapper">
              <div className="col-xl-9">
                <div className="contact-form-wrap" data-aos="fade-right">
                  <div className="contact-form-title">
                    <h2 className="title">We Are Here! Please Send A Quest</h2>
                  </div>
                  {/* <!--== Start Contact Form ==--> */}
                  <div className="contact-form">

                    <div className="row row-gutter-20">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" name="con_name" placeholder="Name *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="email" name="con_email" placeholder="Email *" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb--0">
                          <textarea className="form-control" name="con_message" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb--0">
                          <button className="btn-theme" type="submit">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--== End Contact Form ==--> */}

                {/* <!--== Message Notification ==--> */}
                <div className="form-message"></div>
                <div className="shape-group-style2">
                  <div className="shape-group-one"><img src="/static/picture/13.webp" width="193" height="168" alt="Image-HasTech" /></div>
                  <div className="shape-group-two"><img src="/static/picture/15.webp" width="221" height="113" alt="Image-HasTech" /></div>
                  <div className="shape-group-three"><img src="/static/picture/16.webp" width="129" height="147" alt="Image-HasTech" /></div>
                  <div className="shape-group-four"><img src="/static/picture/17.webp" width="493" height="340" alt="Image-HasTech" /></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact-info-wrap">
                <div className="contact-info">
                  <div className="row">
                    <div className="col-lg-4 col-xl-12">
                      <div className="info-item" data-aos="fade-left">
                        <div className="icon">
                          <img src="/static/picture/c1.webp" width="69" height="65" alt="Image-HasTech" />
                        </div>
                        <div className="info">
                          <h5 className="title">Address</h5>
                          <p>Your address goes here. 123 Your Location</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-12">
                      <div className="info-item" data-aos="fade-left" data-aos-delay="60">
                        <div className="icon">
                          <img src="/static/picture/c2.webp" width="65" height="65" alt="Image-HasTech" />
                        </div>
                        <div className="info">
                          <h5 className="title">Phone No</h5>
                          <p>
                            <a href="tel://+00123456789">+00123456789</a>
                              <a href="tel://+00123456789">+00123456789</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-12">
                      <div className="info-item" data-aos="fade-left" data-aos-delay="120">
                        <div className="icon">
                          <img src="/static/picture/c3.webp" width="65" height="65" alt="Image-HasTech" />
                        </div>
                        <div className="info">
                          <h5 className="title">Email / Web</h5>
                          <p>
                            <a href="mailto://demo@example.com">demo@example.com</a>
                              <a href="mailto://www.example.com">www.example.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* <!--== End Contact Area Wrapper ==--> */}
    </main>
    </>
  );
}