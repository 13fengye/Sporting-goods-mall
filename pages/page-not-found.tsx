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
                    <h3 className="title" data-aos="fade-down" data-aos-duration="1200">页面走丢了</h3>
                    <p className="desc" data-aos="fade-down" data-aos-duration="1400">这里似乎没有您想要的信息，回到首页吧~</p>
                    <a className="btn-theme-border" href="/index" data-aos="fade-down" data-aos-duration="1600">回到首页</a>
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