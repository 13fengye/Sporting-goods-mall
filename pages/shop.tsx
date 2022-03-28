import React, { useState } from "react";

export default function Shop() {
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
                      <a href="index.html">
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
                            <li><a href="index.html"><span>Home One</span></a></li>
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
                                <li><a href=""><span>Shop Left Sidebar</span></a></li>
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
        <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Product Page</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Product Page</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start Product Area Wrapper ==--> */}
        <section className="product-area product-default-area">
          <div className="container">
            <div className="row flex-xl-row-reverse justify-content-between">
              <div className="col-xl-9">
                <div className="row">
                  <div className="col-12">
                    <div className="shop-top-bar">
                      <div className="shop-top-left">
                        <p className="pagination-line"><a href="">12</a> Product Found of <a href="">30</a></p>
                      </div>
                      <div className="shop-top-center">
                        <nav className="product-nav">
                          <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="fa fa-th"></i></button>
                            <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="fa fa-list"></i></button>
                          </div>
                        </nav>
                      </div>
                      <div className="shop-top-right">
                        <div className="shop-sort">
                          <span>Sort By :</span>
                          <select className="form-select" aria-label="Sort select example">
                            <option selected={false}>Default</option>
                            <option value="1">Popularity</option>
                            <option value="2">Average Rating</option>
                            <option value="3">Newsness</option>
                            <option value="4">Price Low to High</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                        <div className="row">
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/8.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Primitive Men shoes</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Hollister V-Neck Knit</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">exclusive mens shoe</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">New Womens High Hills</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Leather Mens slippers</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-12">
                            <div className="pagination-items">
                              <ul className="pagination justify-content-end mb--0">
                                <li><a className="active" href="">1</a></li>
                                <li><a href="shop-four-columns.html">2</a></li>
                                <li><a href="shop-three-columns.html">3</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                        <div className="row">
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-1.webp" width="322" height="360" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-2.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-3.webp" width="322" height="360" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-4.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-5.webp" width="322" height="360" alt="Image-HasTech" />
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
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-md-12">
                            {/* <!--== Start Product Item ==--> */}
                            <div className="product-item product-list-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <a href="single-product.html">
                                    <img src="/static/picture/list-6.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href=""></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-12">
                            <div className="pagination-items">
                              <ul className="pagination justify-content-end mb--0">
                                <li><a className="active" href="">1</a></li>
                                <li><a href="shop-four-columns.html">2</a></li>
                                <li><a href="shop-three-columns.html">3</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="shop-sidebar">
                  <div className="shop-sidebar-category">
                    <h4 className="sidebar-title">Top Categories</h4>
                    <div className="sidebar-category">
                      <ul className="category-list mb--0">
                        <li><a href="">Shoes <span>(6)</span></a></li>
                        <li><a href="">Computer <span>(4)</span></a></li>
                        <li><a href="">Covid-19 <span>(2)</span></a></li>
                        <li><a href="">Electronics <span>(6)</span></a></li>
                        <li><a href="">Frame Sunglasses <span>(12)</span></a></li>
                        <li><a href="">Furniture <span>(7)</span></a></li>
                        <li><a href="">Genuine Leather <span>(9)</span></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="shop-sidebar-price-range">
                    <h4 className="sidebar-title">Price Filter</h4>
                    <div className="sidebar-price-range">
                      <div id="price-range"></div>
                    </div>
                  </div>

                  <div className="shop-sidebar-color">
                    <h4 className="sidebar-title">Color</h4>
                    <div className="sidebar-color">
                      <ul className="color-list">
                        <li data-bg-color="#39ed8c" className="active"></li>
                        <li data-bg-color="#a6ed42"></li>
                        <li data-bg-color="#daed39"></li>
                        <li data-bg-color="#eed739"></li>
                        <li data-bg-color="#eca23a"></li>
                        <li data-bg-color="#f36768"></li>
                        <li data-bg-color="#e14755"></li>
                        <li data-bg-color="#dc83a3"></li>
                        <li data-bg-color="#dc82da"></li>
                        <li data-bg-color="#9a82dd"></li>
                        <li data-bg-color="#82c2db"></li>
                        <li data-bg-color="#6bd6b0"></li>
                        <li data-bg-color="#9ed76b"></li>
                        <li data-bg-color="#c8c289"></li>
                      </ul>
                    </div>
                  </div>

                  <div className="shop-sidebar-size">
                    <h4 className="sidebar-title">Size</h4>
                    <div className="sidebar-size">
                      <ul className="size-list">
                        <li><a href="">S <span>(6)</span></a></li>
                        <li><a href="">M <span>(4)</span></a></li>
                        <li><a href="">L <span>(2)</span></a></li>
                        <li><a href="">XL <span>(6)</span></a></li>
                        <li><a href="">XXL <span>(12)</span></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="shop-sidebar-brand">
                    <h4 className="sidebar-title">Brand</h4>
                    <div className="sidebar-brand">
                      <ul className="brand-list mb--0">
                        <li><a href="">Lakmeetao <span>(6)</span></a></li>
                        <li><a href="">Beautifill <span>(4)</span></a></li>
                        <li><a href="">Made In GD <span>(2)</span></a></li>
                        <li><a href="">Pecifico <span>(6)</span></a></li>
                        <li><a href="">Xlovgtir <span>(12)</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Product Area Wrapper ==--> */}
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
                          <li><a href="account-login.html">My Account</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="shop-cart.html">Shopping cart</a></li>
                          <li><a href="">Shop</a></li>
                          <li><a href="account-login.html">Services Login</a></li>
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
                  <a href="account-login.html"><img src="/static/picture/payment-card.webp" width="192" height="21" alt="Payment Logo" /></a>
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
              <li className="account"><a href="account-login.html"><i className="fa fa-user"></i>Account</a></li>
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
                      <li><a href="">Shop Left Sidebar</a></li>
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