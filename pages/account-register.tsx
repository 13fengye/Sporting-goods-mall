export default function AccountRegister() {

  return (<>
    <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Register</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="/index">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Register</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start My Account Area Wrapper ==--> */}
        <section className="account-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="section-title text-center">
                  <h2 className="title">Register</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="register-form-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="username">Username <span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email">Email address <span className="required">*</span></label>
                          <input id="email" className="form-control" type="email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">Password <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb--0">
                          <a className="btn-register" href="/shop">Register</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End My Account Area Wrapper ==--> */}
    </main>
  </>)
}