export default function PageNotFound(){
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Faq Area Wrapper ==--> */}
        <section className="page-not-found-area">
          <div className="container pt--0 pb--0">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="page-not-found-wrap">
                  <div className="page-not-found-content">
                    <h3 className="not-found-text" data-aos="fade-down" data-aos-duration="1000">404</h3>
                    <h3 className="title" data-aos="fade-down" data-aos-duration="1200">Page Cannot Be Found!</h3>
                    <p className="desc" data-aos="fade-down" data-aos-duration="1400">Seems like nothing was found at this location. Try something else or you can go back to the homepage following the button below!</p>
                    <a className="btn-theme-border" href="/index" data-aos="fade-down" data-aos-duration="1600">Back to home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Faq Area Wrapper ==--> */}
      </main>
    </>
  );
}