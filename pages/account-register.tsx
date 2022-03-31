import PageHeaderArea from "./pageHeaderArea";

export default function AccountRegister() {

  return (<>
    <main className="main-content">
      <PageHeaderArea />


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