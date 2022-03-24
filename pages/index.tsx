import React from "react";

export default function Home(){
  return(<>
    <div className="wrapper">
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
                          <li className="account"><i className="fa fa-user"></i><a href="account-login.html">Account</a></li>
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
                        <a href="">
                          <img className="logo-main" src="/static/picture/logo.webp" width="131" height="34" alt="Logo" />
                          <img className="logo-light" src="/static/picture/logo-light.webp" width="131" height="34" alt="Logo" />
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
                            <li><a href=""><span>Home One</span></a></li>
                            <li><a href="index-two.html"><span>Home Two</span></a></li>
                          </ul>
                        </li>
                        <li><a href="about-us.html"><span>About</span></a></li>
                        <li className="has-submenu"><a href="#/"><span>Pages</span></a>
                          <ul className="submenu-nav">
                            <li><a href="account.html"><span>Account</span></a></li>
                            <li><a href="account-login.html"><span>Login</span></a></li>
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

      <main className="main-content">
        <section className="home-slider-area">
          <div className="swiper-container home-slider-container default-slider-container">
            <div className="swiper-wrapper home-slider-wrapper slider-default">
              <div className="swiper-slide">
                <div className="slider-content-area" data-bg-img="/static/assets/img/shape/1.webp">
                  <div className="container">
                    <div className="slider-container">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-sm-6 col-md-5">
                          <div className="slider-content">
                            <div className="content">
                              <div className="title-box">
                                <h2 className="title">Exclusive New Shoes</h2>
                              </div>
                              <div className="desc-box">
                                <p className="desc">Up To 30% Off All Shoes & Products</p>
                              </div>
                              <div className="btn-box">
                                <a className="btn-slider" href="shop.html">Shop Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="slider-thumb">
                            <div className="thumb scene">
                              <span className="scene-layer" data-depth=".3"><img src="/static/picture/slider-01.webp" width="461" height="489" alt="Image-HasTech" /></span>
                            </div>
                            <div className="shape-group mousemove">
                              <div className="shape-group-one mousemove-layer" data-speed=".8" data-bg-img="/static/assets/img/shape/2.webp"></div>
                              <div className="shape-group-two scene"><span className="scene-layer" data-depth=".6"><img src="/static/picture/33.webp" width="471" height="462" alt="Image-HasTech" /></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="slider-text-shape">NEW 2021</h2>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-content-area" data-bg-img="/static/assets/img/shape/1.webp">
                  <div className="container">
                    <div className="slider-container">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-sm-6 col-md-5">
                          <div className="slider-content">
                            <div className="content">
                              <div className="title-box">
                                <h2 className="title">Exclusive New Shoes</h2>
                              </div>
                              <div className="desc-box">
                                <p className="desc">Up To 30% Off All Shoes & Products</p>
                              </div>
                              <div className="btn-box">
                                <a className="btn-slider" href="shop.html">Shop Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="slider-thumb">
                            <div className="thumb scene">
                              <span className="scene-layer" data-depth=".3"><img src="/static/picture/slider-03.webp" width="548" height="649" alt="Image-HasTech" /></span>
                            </div>
                            <div className="shape-group mousemove">
                              <div className="shape-group-one mousemove-layer" data-speed=".8" data-bg-img="/static/assets/img/shape/2.webp"></div>
                              <div className="shape-group-two scene"><span className="scene-layer" data-depth=".6"><img src="/static/picture/33.webp" width="471" height="462" alt="Image-HasTech" /></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="slider-text-shape">NEW 2022</h2>
                </div>
              </div>
            </div>

            <div className="swiper-btn-wrap">
              <div className="swiper-btn-prev">
                <i className="pe-7s-angle-left"></i>
              </div>
              <div className="swiper-btn-next">
                <i className="pe-7s-angle-right"></i>
              </div>
            </div>
          </div>
        </section>

        <section className="product-area product-collection-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="product-collection">
                  <div className="inner-content">
                    <div className="product-collection-content">
                      <div className="content">
                        <h3 className="title"><a href="shop.html">Sports Shoes</a></h3>
                        <h4 className="price">From $95.00</h4>
                      </div>
                    </div>
                    <div className="product-collection-thumb" data-bg-img="/static/assets/img/shop/collection/1.webp"></div>
                    <a className="banner-link-overlay" href="shop.html"></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-collection">
                  <div className="inner-content">
                    <div className="product-collection-content">
                      <div className="content">
                        <h3 className="title"><a href="shop.html">Latest Shoes</a></h3>
                        <h4 className="price">From $90.00</h4>
                      </div>
                    </div>
                    <div className="product-collection-thumb" data-bg-img="/static/assets/img/shop/collection/2.webp"></div>
                    <a className="banner-link-overlay" href="shop.html"></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-collection">
                  <div className="inner-content">
                    <div className="product-collection-content">
                      <div className="content">
                        <h3 className="title"><a href="shop.html">Office Shoes</a></h3>
                        <h4 className="price">From $82.00</h4>
                      </div>
                    </div>
                    <div className="product-collection-thumb" data-bg-img="/static/assets/img/shop/collection/3.webp"></div>
                    <a className="banner-link-overlay" href="shop.html"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-area product-default-area">
          <div className="container pt--0">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 className="title">Featured Items</h3>
                  <div className="desc">
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li className="discount">-10%</li>
                        </ul>
                      </div>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                      <div className="prices">
                        <span className="price-old">$100</span>
                        <span className="sep">-</span>
                        <span className="price">$240.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                      <div className="prices">
                        <span className="price">$140.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li className="discount">-10%</li>
                        </ul>
                      </div>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                      <div className="prices">
                        <span className="price-old">$60</span>
                        <span className="sep">-</span>
                        <span className="price">$260.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Hollister V-Neck Knit</a></h4>
                      <div className="prices">
                        <span className="price">$880.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3"> 
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                      <div className="prices">
                        <span className="price">$500.00</span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-sm-6 col-lg-3"> 
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li className="discount">-10%</li>
                        </ul>
                      </div>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">New Womens High Hills</a></h4>
                      <div className="prices">
                        <span className="price-old">$300</span>
                        <span className="sep">-</span>
                        <span className="price">$333.00</span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-sm-6 col-lg-3"> 
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                      <div className="prices">
                        <span className="price">$133.00</span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-sm-6 col-lg-3"> 
                <div className="product-item">
                  <div className="inner-content">
                    <div className="product-thumb">
                      <a href="single-product.html">
                        <img src="/static/picture/8.webp" width="270" height="274" alt="Image-HasTech" />
                      </a>
                      <div className="product-flag">
                        <ul>
                          <li className="discount">-10%</li>
                        </ul>
                      </div>
                      <div className="product-action">
                        <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                        <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                        <button type="button" className="btn-product-quick-view-open">
                          <i className="fa fa-arrows"></i>
                        </button>
                        <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                      </div>
                      <a className="banner-link-overlay" href="shop.html"></a>
                    </div>
                    <div className="product-info">
                      <div className="category">
                        <ul>
                          <li><a href="shop.html">Men</a></li>
                          <li className="sep">/</li>
                          <li><a href="shop.html">Women</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="single-product.html">exclusive mens shoe</a></h4>
                      <div className="prices">
                        <span className="price-old">$300</span>
                        <span className="sep">-</span>
                        <span className="price">$420.00</span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </section> 
  
        <section className="bg-color-f2 position-relative z-index-1">
          <div className="container pt--0 pb--0">
            <div className="row divider-wrap divider-style1">
              <div className="col-lg-6">
                <div className="divider-content" data-title="NEW">
                  <h4 className="sub-title">Saving 50%</h4>
                  <h2 className="title">All Online Store</h2>
                  <p className="desc">Offer Available All Shoes & Products</p>
                  <a className="btn-theme" href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-layer-wrap">
            <div className="bg-layer-style z-index--1 parallax" data-speed="1.05" data-bg-img="/static/assets/img/photos/bg1.webp"></div>
          </div>
        </section>  
        <section className="product-area product-best-seller-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 className="title">Best Seller</h3>
                  <div className="desc">
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-slider-wrap">
                  <div className="swiper-container product-slider-col4-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"> 
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$200</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                      <div className="swiper-slide"> 
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$440.00</span>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                      <div className="swiper-slide"> 
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$130</span>
                                <span className="sep">-</span>
                                <span className="price">$333.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price">$540.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                
                      </div>
                      <div className="swiper-slide">
                
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$40</span>
                                <span className="sep">-</span>
                                <span className="price">$280.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                
                      </div>
                      <div className="swiper-slide">
                
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                              <div className="prices">
                                <span className="price-old">$400</span>
                                <span className="sep">-</span>
                                <span className="price">$580.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                
                      </div>
                    </div>
                  </div>
                  <div className="product-swiper-btn-wrap">
                    <div className="product-swiper-btn-prev">
                      <i className="fa fa-arrow-left"></i>
                    </div>
                    <div className="product-swiper-btn-next">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container pt--0 pb--0">
            <div className="row flex-md-row-reverse justify-content-between divider-wrap divider-style2">
              <div className="col-lg-6">
                <div className="divider-thumb-content">
                  <div className="thumb">
                    <a href="shop.html">
                      <img src="/static/picture/113.webp" width="570" height="350" alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Sports Shoes</h2>
                    <p className="desc">Up To 30% Off All Shoes & Products</p>
                    <a className="btn-theme" href="shop.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="divider-thumb-content">
                  <div className="thumb">
                    <a href="shop.html">
                      <img src="/static/picture/25.webp" width="570" height="700" alt="Image-HasTech" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-area blog-default-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 className="title">Latest Blog</h3>
                  <div className="desc">
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="blog-details.html"><img src="/static/picture/111.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="blog.html">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="blog.html">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor ametcons adipisicing elit sed</a></h4>
                      <a className="post-btn" href="blog.html">Read More</a>
                    </div>
                  </div>
                </div>
        
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="blog-details.html"><img src="/static/picture/23.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="blog.html">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="blog.html">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="blog-details.html">Celebrity Daughter Opens About Upto Having Her Eye</a></h4>
                      <a className="post-btn" href="blog.html">Read More</a>
                    </div>
                  </div>
                </div>
        
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="inner-content">
                    <div className="thumb">
                      <a href="blog-details.html"><img src="/static/picture/32.webp" width="370" height="260" alt="Image-HasTech" /></a>
                    </div>
                    <div className="content">
                      <div className="meta-post">
                        <ul>
                          <li className="post-date"><i className="fa fa-calendar"></i><a href="blog.html">27,Jun 2030</a></li>
                          <li className="author-info"><i className="fa fa-user"></i><a href="blog.html">Oaklee Odom</a></li>
                        </ul>
                      </div>
                      <h4 className="title"><a href="blog-details.html">Romantic Love Stories Of Hollywood Popular Celebrities</a></h4>
                      <a className="post-btn" href="blog.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-area">
        <div className="footer-main">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="widget-item">
                  <div className="about-widget-wrap">
                    <div className="widget-logo-area">
                      <a href="">
                        <img className="logo-main" src="/static/picture/logo-light.webp" width="131" height="34" alt="Logo" />
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
              </div>
              <div className="col-md-6 col-lg-3">
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
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget-item widget-account-item">
                  <h4 className="widget-title">My Account</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-2">My Account</h4>
                  <div id="widgetId-2" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li><a href="account-login.html">My Account</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="shop-cart.html">Shopping cart</a></li>
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="account-login.html">Services Login</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
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
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-7 col-lg-6">
                <p className="copyright">Copyright &copy; 2022.Company name All rights reserved.<a target="_blank" href="https://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="payment">
                    <a href="account-login.html"><img src="/static/picture/payment-card.webp" width="192" height="21" alt="Payment Logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>
      <aside className="product-quick-view-modal">
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close">
              <span className="close-icon"><i className="fa fa-close"></i></span>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="thumb">
                  <img src="/static/picture/1.webp" width="570" height="541" alt="Alan-Shop" />
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
                <img src="/static/picture/14.webp" width="90" height="110" alt="Image-HasTech" />
                  <span className="product-title">Leather Mens Slipper</span>
              </a>
              <span className="product-price">1 × £69.99</span>
            </li>
            <li className="product-list-item">
              <a href="#/" className="remove">×</a>
              <a href="single-product.html">
                <img src="/static/picture/2.webp" width="90" height="110" alt="Image-HasTech" />
                  <span className="product-title">Quickiin Mens shoes</span>
              </a>
              <span className="product-price">1 × £20.00</span>
            </li>
          </ul>
          <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
          <a className="btn-theme" data-margin-bottom="10" href="shop-cart.html">View cart</a>
          <a className="btn-theme" href="shop-checkout.html">Checkout</a>
          <a className="d-block text-end lh-1" href="shop-checkout.html"><img src="/static/picture/paypal.webp" width="133" height="26" alt="Has-image" /></a>
        </div>
      </div> 
      <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex={-1}id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
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
              <li className="account"><a href="account-login.html"><i className="fa fa-user"></i>Account</a></li>
            </ul>
          </div>
  
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li><a href="#">Home</a>
                <ul className="sub-menu">
                  <li><a href="">Home One</a></li>
                  <li><a href="index-two.html">Home Two</a></li>
                </ul>
              </li>
              <li><a href="about-us.html">About</a></li>
              <li><a href="#">Pages</a>
                <ul className="sub-menu">
                  <li><a href="account.html">Account</a></li>
                  <li><a href="account-login.html">Login</a></li>
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
         </div>
      </div>
    </div>
  </>);
}
