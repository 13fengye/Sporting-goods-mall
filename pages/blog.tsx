import PageHeaderArea from "./pageHeaderArea";

export default function Blog() {
  return (
    <>
      <main className="main-content">
        <PageHeaderArea />

        {/* <!--== Start Blog Area Wrapper ==--> */}
        <section className="blog-area blog-inner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/111.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">Lorem ipsum dolor ametcons adipisicing elit sed</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/23.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">Celebrity Daughter Opens About Upto Having Her Eye</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/32.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">Romantic Love Stories Of Hollywood Popular Celebrities</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>

              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/46.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">fashions fade, style is eternal About Upto Having Her Eye</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/54.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">Nicholas K Spring 2020 Runway</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-4">
                {/* <!--== Start Blog Item ==--> */}
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="/blog-details"><img src="/static/picture/63.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="/">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="/">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="/blog-details">Marc Jacobs Spring 2020 Runway</a></h4>
                      <a className="post-btn" href="/">Read More</a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Blog Item ==--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Blog Area Wrapper ==--> */}
      </main>
    </>
  );
}