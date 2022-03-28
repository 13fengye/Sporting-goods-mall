export default function Accountlogin() {

  return (<>
    <div className="wrapper">

      {/* <!--== Start Header Wrapper ==--> */}
      <header className="main-header-wrapper position-relative">
        <div className="header-top">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="header-top-align">
                  <div className="header-top-align-start">
                    <div className="desc">
                      <p>World Wide Completely Free Returns and Free Shipping</p>
                    </div>
                  </div>
                  <div className="header-top-align-end">
                    <div className="header-info-items">
                      <div className="info-items">
                        <ul>
                          <li className="number"><i className="fa fa-phone"></i><a href="tel://0123456789">+00 123 456 789</a></li>
                          <li className="email"><i className="fa fa-envelope"></i><a href="mailto://demo@example.com">demo@example.com</a></li>
                          <li className="account"><i className="fa fa-user"></i><a href="">Account</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container pt--0 pb--0">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="header-middle-align">
                  <div className="header-middle-align-start">
                    <div className="header-logo-area">
                      <a href="index.html">
                        <img className="logo-main" src="static/picture/logo.webp" width="131" height="34" alt="Logo" />
                          <img className="logo-light" src="static/picture/logo-light.webp" width="131" height="34" alt="Logo" />
                          </a>
                        </div>
                    </div>
                    <div className="header-middle-align-center">
                      <div className="header-search-area">
                        <form className="header-searchbox">
                          <input type="search" className="form-control" placeholder="Search" />
                            <button className="btn-submit" type="submit"><i className="pe-7s-search"></i></button>
                        </form>
                      </div>
                    </div>
                    <div className="header-middle-align-end">
                      <div className="header-action-area">
                        <div className="shopping-search">
                          <button className="shopping-search-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i className="pe-7s-search icon"></i></button>
                        </div>
                        <div className="shopping-wishlist">
                          <a className="shopping-wishlist-btn" href="shop-wishlist.html">
                            <i className="pe-7s-like icon"></i>
                          </a>
                        </div>
                        <div className="shopping-cart">
                          <button className="shopping-cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="offcanvasRightLabel">
                            <i className="pe-7s-shopbag icon"></i>
                            <sup className="shop-count">02</sup>
                          </button>
                        </div>
                        <button className="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                          <i className="pe-7s-menu"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-area header-default">
            <div className="container">
              <div className="row no-gutter align-items-center position-relative">
                <div className="col-12">
                  <div className="header-align">
                    <div className="header-navigation-area position-relative">
                      <ul className="main-menu nav">
                        <li className="has-submenu"><a href="#/"><span>Home</span></a>
                          <ul className="submenu-nav">
                            <li><a href="index.html"><span>Home One</span></a></li>
                            <li><a href="index-two.html"><span>Home Two</span></a></li>
                          </ul>
                        </li>
                        <li><a href="about-us.html"><span>About</span></a></li>
                        <li className="has-submenu"><a href="#/"><span>Pages</span></a>
                          <ul className="submenu-nav">
                            <li><a href="account.html"><span>Account</span></a></li>
                            <li><a href=""><span>Login</span></a></li>
                            <li><a href="account-register.html"><span>Register</span></a></li>
                            <li><a href="page-not-found.html"><span>Page Not Found</span></a></li>
                          </ul>
                        </li>
                        <li className="has-submenu position-static"><a href="#/"><span>Shop</span></a>
                          <ul className="submenu-nav submenu-nav-mega column-3">
                            <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Shop Layout</span></a>
                              <ul>
                                <li><a href="shop-three-columns.html"><span>Shop 3 Column</span></a></li>
                                <li><a href="shop-four-columns.html"><span>Shop 4 Column</span></a></li>
                                <li><a href="shop.html"><span>Shop Left Sidebar</span></a></li>
                                <li><a href="shop-right-sidebar.html"><span>Shop Right Sidebar</span></a></li>
                              </ul>
                            </li>
                            <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Single Product</span></a>
                              <ul>
                                <li><a href="single-normal-product.html"><span>Single Product Normal</span></a></li>
                                <li><a href="single-product.html"><span>Single Product Variable</span></a></li>
                                <li><a href="single-group-product.html"><span>Single Product Group</span></a></li>
                                <li><a href="single-affiliate-product.html"><span>Single Product Affiliate</span></a></li>
                              </ul>
                            </li>
                            <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Others Pages</span></a>
                              <ul>
                                <li><a href="shop-cart.html"><span>Shopping Cart</span></a></li>
                                <li><a href="shop-checkout.html"><span>Checkout</span></a></li>
                                <li><a href="shop-wishlist.html"><span>Wishlist</span></a></li>
                                <li><a href="shop-compare.html"><span>Compare</span></a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu"><a href="#/"><span>Blog</span></a>
                          <ul className="submenu-nav submenu-nav-mega">
                            <li className="mega-menu-item"><a href="#/" className="mega-title">Blog Layout</a>
                              <ul>
                                <li><a href="blog.html">Blog Grid</a></li>
                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="mega-menu-item"><a href="#/" className="mega-title">Single Blog</a>
                              <ul>
                                <li><a href="blog-details-no-sidebar.html">Blog Details</a></li>
                                <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                <li><a href="blog-details.html">Blog Details Right Sidebar</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="contact.html"><span>Contact</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
      {/* <!--== End Header Wrapper ==--> */}

      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Login</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Login</li>
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
                  <h2 className="title">Login</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="login-form-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="username">Username or email address <span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">Password <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <a className="btn-login" href="account.html">Login</a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group account-info-group mb--0">
                          <div className="rememberme-account">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">Remember me</label>
                            </div>
                          </div>
                          <a className="lost-password" href="#/">Lost your password?</a>
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

      {/* <!--== Start Footer Area Wrapper ==--> */}
      <footer className="footer-area">
        {/* <!--== Start Footer Main ==--> */}
        <div className="footer-main">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                {/* <!--== Start widget Item ==--> */}
                <div className="widget-item">
                  <div className="about-widget-wrap">
                    <div className="widget-logo-area">
                      <a href="index.html">
                        <img className="logo-main" src="static/picture/logo-light.webp" width="131" height="34" alt="Logo" />
                      </a>
                    </div>
                    <p className="desc">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                    <div className="social-icons">
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-dribbble"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-pinterest-p"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--== End widget Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* <!--== Start widget Item ==--> */}
                <div className="widget-item widget-services-item">
                  <h4 className="widget-title">Services</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Services</h4>
                  <div id="widgetId-1" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li><a href="contact.html">Home monitoring</a></li>
                          <li><a href="contact.html">Air Filters</a></li>
                          <li><a href="contact.html">Professional installation</a></li>
                          <li><a href="contact.html">Smart Buildings</a></li>
                          <li><a href="contact.html">For contractors</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--== End widget Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* <!--== Start widget Item ==--> */}
                <div className="widget-item widget-account-item">
                  <h4 className="widget-title">My Account</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-2">My Account</h4>
                  <div id="widgetId-2" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li><a href="">My Account</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="shop-cart.html">Shopping cart</a></li>
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="">Services Login</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--== End widget Item ==--> */}
              </div>
              <div className="col-md-6 col-lg-3">
                {/* <!--== Start widget Item ==--> */}
                <div className="widget-item">
                  <h4 className="widget-title">Contact Info</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">Contact Info</h4>
                  <div id="widgetId-3" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-contact-wrap">
                        <ul>
                          <li><span>Address:</span> Your address goes here.</li>
                          <li><span>Phone//fax:</span> <a href="tel://0123456789">0123456789</a></li>
                          <li><span>Email:</span> <a href="mailto://demo@example.com">demo@example.com</a></li>
                          <li><a target="_blank" href="javascript:;">www.example.com</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--== End widget Item ==--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Footer Main ==--> */}

        {/* <!--== Start Footer Bottom ==--> */}
        <div className="footer-bottom">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <p className="copyright">Copyright &copy; 2022.Company name All rights reserved.<a target="_blank" href="https://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="payment">
                  <a href=""><img src="static/picture/payment-card.webp" width="192" height="21" alt="Payment Logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Footer Bottom ==--> */}
      </footer>
      {/* <!--== End Footer Area Wrapper ==--> */}

      {/* <!--== Scroll Top Button ==--> */}
      <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>

      {/* <!--== Start Quick View Menu ==--> */}
      <aside className="product-quick-view-modal">
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close">
              <span className="close-icon"><i className="fa fa-close"></i></span>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="thumb">
                  <img src="static/picture/1.webp" width="570" height="541" alt="Alan-Shop" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="content">
                  <h4 className="title">Space X Bag For Office</h4>
                  <div className="prices">
                    <del className="price-old">$85.00</del>
                    <span className="price">$70.00</span>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                  <div className="quick-view-select">
                    <div className="quick-view-select-item">
                      <label htmlFor="forSize" className="form-label">Size:</label>
                      <select className="form-select" id="forSize" required={false}>
                        <option selected={false} value="">s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                      </select>
                    </div>
                    <div className="quick-view-select-item">
                      <label htmlFor="forColor" className="form-label">Color:</label>
                      <select className="form-select" id="forColor" required={false}>
                        <option selected={false} value="">red</option>
                        <option>green</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>white</option>
                      </select>
                    </div>
                  </div>
                  <div className="action-top">
                    <div className="pro-qty">
                      <input type="text" id="quantity20" title="Quantity" value="1" />
                    </div>
                    <button className="btn btn-black">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas-overlay"></div>
      </aside>
      {/* <!--== End Quick View Menu ==--> */}

      {/* <!--== Start Aside Cart Menu ==--> */}
      <div className="aside-cart-wrapper offcanvas offcanvas-end" tabIndex={-1} id="AsideOffcanvasCart" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h1 id="offcanvasRightLabel"></h1>
          <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i className="fa fa-chevron-right"></i></button>
        </div>
        <div className="offcanvas-body">
          <ul className="aside-cart-product-list">
            <li className="product-list-item">
              <a href="#/" className="remove">×</a>
              <a href="single-product.html">
                <img src="static/picture/14.webp" width="90" height="110" alt="Image-HasTech" />
                  <span className="product-title">Leather Mens Slipper</span>
              </a>
              <span className="product-price">1 × £69.99</span>
            </li>
            <li className="product-list-item">
              <a href="#/" className="remove">×</a>
              <a href="single-product.html">
                <img src="static/picture/2.webp" width="90" height="110" alt="Image-HasTech" />
                  <span className="product-title">Quickiin Mens shoes</span>
              </a>
              <span className="product-price">1 × £20.00</span>
            </li>
          </ul>
          <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
          <a className="btn-theme" data-margin-bottom="10" href="shop-cart.html">View cart</a>
          <a className="btn-theme" href="shop-checkout.html">Checkout</a>
          <a className="d-block text-end lh-1" href="shop-checkout.html"><img src="static/picture/paypal.webp" width="133" height="26" alt="Has-image" /></a>
        </div>
      </div>
      {/* <!--== End Aside Cart Menu ==--> */}

      {/* <!--== Start Aside Search Menu ==--> */}
      <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex={-1} id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="pe-7s-close"></i></button>
        </div>
        <div className="offcanvas-body">
          <div className="container pt--0 pb--0">
            <div className="search-box-form-wrap">
              <div className="search-note">
                <p>Start typing and press Enter to search</p>
              </div>
              <form action="#" method="post">
                <div className="search-form position-relative">
                  <label htmlFor="search-input" className="visually-hidden">Search</label>
                  <input id="search-input" type="search" className="form-control" placeholder="Search entire store…" />
                    <button className="search-button"><i className="fa fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>
      {/* <!--== End Aside Search Menu ==--> */}

      {/* <!--== Start Side Menu ==--> */}
      <div className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex={-1} id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 id="offcanvasExampleLabel"></h1>
          <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i className="fa fa-chevron-left"></i></button>
        </div>
        <div className="offcanvas-body">
          <div className="info-items">
            <ul>
              <li className="number"><a href="tel://0123456789"><i className="fa fa-phone"></i>+00 123 456 789</a></li>
              <li className="email"><a href="mailto://demo@example.com"><i className="fa fa-envelope"></i>demo@example.com</a></li>
              <li className="account"><a href=""><i className="fa fa-user"></i>Account</a></li>
            </ul>
          </div>
          {/* <!-- Mobile Menu Start --> */}
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li><a href="#">Home</a>
                <ul className="sub-menu">
                  <li><a href="index.html">Home One</a></li>
                  <li><a href="index-two.html">Home Two</a></li>
                </ul>
              </li>
              <li><a href="about-us.html">About</a></li>
              <li><a href="#">Pages</a>
                <ul className="sub-menu">
                  <li><a href="account.html">Account</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="account-register.html">Register</a></li>
                  <li><a href="page-not-found.html">Page Not Found</a></li>
                </ul>
              </li>
              <li><a href="#">Shop</a>
                <ul className="sub-menu">
                  <li><a href="#">Shop Layout</a>
                    <ul className="sub-menu">
                      <li><a href="shop-three-columns.html">Shop 3 Column</a></li>
                      <li><a href="shop-four-columns.html">Shop 4 Column</a></li>
                      <li><a href="shop.html">Shop Left Sidebar</a></li>
                      <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Single Product</a>
                    <ul className="sub-menu">
                      <li><a href="single-normal-product.html">Single Product Normal</a></li>
                      <li><a href="single-product.html">Single Product Variable</a></li>
                      <li><a href="single-group-product.html">Single Product Group</a></li>
                      <li><a href="single-affiliate-product.html">Single Product Affiliate</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Others Pages</a>
                    <ul className="sub-menu">
                      <li><a href="shop-cart.html">Shopping Cart</a></li>
                      <li><a href="shop-checkout.html">Checkout</a></li>
                      <li><a href="shop-wishlist.html">Wishlist</a></li>
                      <li><a href="shop-compare.html">Compare</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><a href="#">Blog Layout</a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Blog Grid</a></li>
                      <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                      <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Single Blog</a>
                    <ul className="sub-menu">
                      <li><a href="blog-details-no-sidebar.html">Blog Details</a></li>
                      <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                      <li><a href="blog-details.html">Blog Details Right Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          {/* <!-- Mobile Menu End --> */}
        </div>
      </div>
      {/* <!--== End Side Menu ==--> */}
    </div>
  </>)
}