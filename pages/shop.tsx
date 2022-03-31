import React, { useState } from "react";

export default function Shop() {
  return (<>
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
                      <li><a href="/index">Home</a></li>
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
                        <p className="pagination-line"><a href="/">12</a> Product Found of <a href="/">30</a></p>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Modern Smart Shoes</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Primitive Mens shoes</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Simple Fabric Shoe</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/8.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Primitive Men shoes</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Hollister V-Neck Knit</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">exclusive mens shoe</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">New Womens High Hills</a></h4>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Leather Mens slippers</a></h4>
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
                                <li><a className="active" href="/">1</a></li>
                                <li><a href="/shop-four-columns">2</a></li>
                                <li><a href="/shop-three-columns">3</a></li>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-1.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-2.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-3.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-4.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Modern Smart Shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-5.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-flag">
                                    <ul>
                                      <li className="discount">-10%</li>
                                    </ul>
                                  </div>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Primitive Mens shoes</a></h4>
                                  <div className="prices">
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
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
                                  <a href="/single-product">
                                    <img src="/static/picture/list-6.webp" width="322" height="360" alt="Image-HasTech" />
                                  </a>
                                  <div className="product-action">
                                    <a className="btn-product-wishlist" href="/shop-wishlist"><i className="fa fa-heart"></i></a>
                                    <a className="btn-product-cart" href="/shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                    <button type="button" className="btn-product-quick-view-open">
                                      <i className="fa fa-arrows"></i>
                                    </button>
                                    <a className="btn-product-compare" href="/shop-compare"><i className="fa fa-random"></i></a>
                                  </div>
                                  <a className="banner-link-overlay" href="/"></a>
                                </div>
                                <div className="product-info">
                                  <div className="category">
                                    <ul>
                                      <li><a href="/">Men</a></li>
                                      <li className="sep">/</li>
                                      <li><a href="/">Women</a></li>
                                    </ul>
                                  </div>
                                  <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                                  <div className="prices">
                                    <span className="price-old">$300</span>
                                    <span className="sep">-</span>
                                    <span className="price">$240.00</span>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                                  <a className="btn-theme btn-sm" href="/shop-cart">Add To Cart</a>
                                </div>
                              </div>
                            </div>
                            {/* <!--== End prPduct Item ==--> */}
                          </div>
                          <div className="col-12">
                            <div className="pagination-items">
                              <ul className="pagination justify-content-end mb--0">
                                <li><a className="active" href="/">1</a></li>
                                <li><a href="/shop-four-columns">2</a></li>
                                <li><a href="/shop-three-columns">3</a></li>
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
                        <li><a href="/">Shoes <span>(6)</span></a></li>
                        <li><a href="/">Computer <span>(4)</span></a></li>
                        <li><a href="/">Covid-19 <span>(2)</span></a></li>
                        <li><a href="/">Electronics <span>(6)</span></a></li>
                        <li><a href="/">Frame Sunglasses <span>(12)</span></a></li>
                        <li><a href="/">Furniture <span>(7)</span></a></li>
                        <li><a href="/">Genuine Leather <span>(9)</span></a></li>
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
                        <li><a href="/">S <span>(6)</span></a></li>
                        <li><a href="/">M <span>(4)</span></a></li>
                        <li><a href="/">L <span>(2)</span></a></li>
                        <li><a href="/">XL <span>(6)</span></a></li>
                        <li><a href="/">XXL <span>(12)</span></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="shop-sidebar-brand">
                    <h4 className="sidebar-title">Brand</h4>
                    <div className="sidebar-brand">
                      <ul className="brand-list mb--0">
                        <li><a href="/">Lakmeetao <span>(6)</span></a></li>
                        <li><a href="/">Beautifill <span>(4)</span></a></li>
                        <li><a href="/">Made In GD <span>(2)</span></a></li>
                        <li><a href="/">Pecifico <span>(6)</span></a></li>
                        <li><a href="/">Xlovgtir <span>(12)</span></a></li>
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
  </>)
}