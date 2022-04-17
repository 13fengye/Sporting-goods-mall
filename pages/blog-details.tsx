import PageHeaderArea from "./pageHeaderArea";

export default function BlogDetails(){
  return (
    <>
      <main className="main-content">
        <PageHeaderArea />

        {/* <!--== Start Blog Area Wrapper ==--> */}
        <section className="blog-details-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8" data-aos="fade-right">
                <div className="blog-details-content-wrap">
                  <div className="blog-details-item">
                    <div className="blog-details-thumb">
                      <img src="/static/picture/details1.webp" width="750" height="459" alt="Image-HasTech" />
                    </div>
                    <div className="blog-meta-post">
                      <ul>
                        <li className="post-date"><i className="fa fa-calendar"></i><a href="/blog">22,Jun 2022</a></li>
                        <li className="author-info"><i className="fa fa-user"></i><a href="/blog">Hector Lovett</a></li>
                      </ul>
                    </div>
                    <h3 className="main-title">Lorem ipsum dolor sit amet conse adipisi elit sed do eiusmod tempor.</h3>
                    <div className="details-wrapper details-wrapper-style1" data-margin-bottom="38">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <blockquote>
                        <div className="inner-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit sed do eiusmod tempor incididunt ut</p>
                          <span className="user-name">Rachel Leonard</span>
                          <img className="inner-shape" src="/static/picture/quote2.webp" width="82" height="59" alt="Image-HasTech" />
                        </div>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="details-wrapper details-wrapper-style2">
                      <p><img className="p-image-right" src="/static/picture/details2.webp" width="370" height="400" alt="Image-HasTech" /><span>Lorem ipsum dolor sit amet, consec adipisic elit, sed do eius tempor incididu ut labore et dolore ma aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nil ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat velit esse cillum dolore</span></p>
                      <p className="mb-25"> leu fugiat nulla pariatur. Excepteur sintocca cupidatat non proident, sunt in culpa qui off deserunt mollit anim id est laborum. Sed utl perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="blog-details-footer">
                      <div className="tage-list">
                        <span>Tages:</span>
                        <a href="/blog">Mobile</a>,
                        <a href="/blog">Laptop</a>,
                        <a href="/blog">Smart</a>,
                        <a href="/blog">TV</a>
                      </div>
                      <div className="social-icons">
                        <span>Share:</span>
                        <a href="#/"><i className="fa fa-facebook"></i></a>
                        <a href="#/"><i className="fa fa-dribbble"></i></a>
                        <a href="#/"><i className="fa fa-pinterest-p"></i></a>
                        <a href="#/"><i className="fa fa-twitter"></i></a>
                      </div>
                    </div>
                    <div className="article-next-previous">
                      <div className="arrow-item previous">
                        <div className="arrow-thumb">
                          <a href="/"><img src="/static/picture/s4.webp" width="98" height="101" alt="" /></a>
                          <a className="overlay" href="/"><i className="fa fa-angle-left"></i></a>
                        </div>
                        <div className="arrow-content">
                          <span className="date"><a href="/blog"><i className="fa fa-calendar"></i>26 March, 2022</a></span>
                          <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                        </div>
                      </div>
                      <div className="arrow-item next">
                        <div className="arrow-thumb">
                          <a href="/"><img src="/static/picture/s1.webp" width="98" height="101" alt="" /></a>
                          <a className="overlay" href="/"><i className="fa fa-angle-right"></i></a>
                        </div>
                        <div className="arrow-content">
                          <span className="date"><a href="/blog">25 March, 2022<i className="fa fa-calendar"></i></a></span>
                          <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--== Start Comment View Item ==--> */}
                  <div className="comment-view-area">
                    <h4 className="title-main">Comments</h4>
                    <div className="comment-view-content">
                      <div className="single-comment">
                        <div className="author-pic">
                          <a href="/blog"><img src="/static/picture/author1.webp" width="101" height="118" alt="Image-HasTech" /></a>
                        </div>
                        <div className="author-info">
                          <h4 className="title">
                            <a href="/blog">Marie Jensen</a>
                            <span> - </span>
                            <a className="comment-date" href="/blog">22 August, 2022</a>
                          </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp labore et dol magna aliqua. Ut enim ad minim veniam.</p>
                          <div className="author-info-footer">
                            <a className="comment-reply" href="#/">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="single-comment reply-comment">
                        <div className="author-pic">
                          <a href="/blog"><img src="/static/picture/author2.webp" width="101" height="118" alt="Image-HasTech" /></a>
                        </div>
                        <div className="author-info">
                          <h4 className="title">
                            <a href="/blog">Rachel Leonard</a>
                            <span> - </span>
                            <a className="comment-date" href="/blog">22 August, 2022</a>
                          </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedd labore et dol magna aliqua. Ut enim ad.</p>
                          <div className="author-info-footer">
                            <a className="comment-reply" href="#/">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="single-comment">
                        <div className="author-pic">
                          <a href="/blog"><img src="/static/picture/author3.webp" width="101" height="118" alt="Image-HasTech" /></a>
                        </div>
                        <div className="author-info">
                          <h4 className="title">
                            <a href="/blog">Amilia Luna</a>
                            <span> - </span>
                            <a className="comment-date" href="/blog">22 August, 2022</a>
                          </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp labore et dol magna aliqua. Ut enim ad minim veniam.</p>
                          <div className="author-info-footer">
                            <a className="comment-reply" href="#/">Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--== End Comment View Item ==--> */}

                  {/* <!--== Start Comment Item ==--> */}
                  <div className="comment-form-area">
                    <h4 className="title-main">Leave a Comments</h4>
                    <div className="comment-form-content">
                      <form action="#">
                        <div className="row ">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input className="form-control" type="text" placeholder="Name *" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input className="form-control" type="email" placeholder="Email *" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb--0">
                              <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb--0">
                              <button type="submit" className="btn-theme">Send a Comment</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!--== End Comment Item ==--> */}
                </div>
              </div>
              <div className="col-xl-4" data-aos="fade-left">
                <div className="blog-sidebar">
                  <div className="blog-sidebar-search">
                    <div className="sidebar-search-form">
                      <form action="#">
                        <input type="search" placeholder="Search" />
                          <button><i className="fa fa-search"></i></button>
                      </form>
                    </div>
                  </div>

                  <div className="blog-sidebar-wrap">
                    <div className="blog-sidebar-category">
                      <h4 className="sidebar-title" data-margin-bottom="23">Categories</h4>
                      <div className="sidebar-category">
                        <ul className="category-list">
                          <li><a href="/shop">Accesasories<span> (6)</span></a></li>
                          <li><a href="/shop">Computer<span> (4)</span></a></li>
                          <li><a href="/shop">Covid-19<span> (2)</span></a></li>
                          <li><a href="/shop">Electronics<span> (6)</span></a></li>
                          <li><a href="/shop">Frame Sunglasses<span> (12)</span></a></li>
                          <li><a href="/shop">Furniture<span> (7)</span></a></li>
                          <li><a href="/shop">Genuine Leather<span> (9)</span></a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="blog-sidebar-post">
                      <h4 className="sidebar-title">Recent Post</h4>
                      <div className="sidebar-post">
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="/"><img src="/static/picture/s1.webp" width="98" height="101" alt="" /></a>
                          </div>
                          <div className="post-content">
                            <span className="date"><a href="/blog"><i className="fa fa-calendar"></i>22,Jun 2022</a></span>
                            <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                          </div>
                        </div>
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="/"><img src="/static/picture/s2.webp" width="98" height="101" alt="" /></a>
                          </div>
                          <div className="post-content">
                            <span className="date"><a href="/blog"><i className="fa fa-calendar"></i>22,Jun 2022</a></span>
                            <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                          </div>
                        </div>
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="/"><img src="/static/picture/s3.webp" width="98" height="101" alt="" /></a>
                          </div>
                          <div className="post-content">
                            <span className="date"><a href="/blog"><i className="fa fa-calendar"></i>22,Jun 2022</a></span>
                            <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                          </div>
                        </div>
                        <div className="single-post">
                          <div className="post-thumb">
                            <a href="/"><img src="/static/picture/s4.webp" width="98" height="101" alt="" /></a>
                          </div>
                          <div className="post-content">
                            <span className="date"><a href="/blog"><i className="fa fa-calendar"></i>22,Jun 2022</a></span>
                            <h6 className="title"><a href="/">Lorem ipsum dolorl amet conse adip</a></h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="blog-sidebar-category-sub-menu">
                      <h4 className="sidebar-title" data-margin-bottom="23">Archives</h4>
                      <div className="sidebar-category-sub-menu">
                        <ul className="sub-menu-list">
                          <li><a href="/shop">March 2018</a></li>
                          <li><a href="/shop">February 2018</a></li>
                          <li><a href="/shop">January 2021</a></li>
                          <li><a href="/shop">September 2019</a></li>
                          <li><a href="/shop">March 2018</a></li>
                          <li><a href="/shop">July 2021</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="blog-sidebar-tags">
                      <h4 className="sidebar-title">Tages</h4>
                      <div className="sidebar-tags">
                        <ul className="tags-list mb--0">
                          <li><a href="/blog">Mobile</a></li>
                          <li><a href="/blog">Laptop</a></li>
                          <li><a href="/blog">Smart TV</a></li>
                          <li><a href="/blog">Pendrive</a></li>
                          <li><a href="/blog">Smartwatch</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Blog Area Wrapper ==--> */}
      </main>
    </>
  );
}